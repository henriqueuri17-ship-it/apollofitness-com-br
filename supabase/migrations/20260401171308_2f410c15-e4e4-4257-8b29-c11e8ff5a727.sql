
-- Create enum for quote status
CREATE TYPE public.quote_status AS ENUM ('novo', 'em_contato', 'negociacao', 'fechado', 'perdido');

-- Create enum for app roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create quotes table
CREATE TABLE public.quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT,
  total_value NUMERIC,
  status quote_status NOT NULL DEFAULT 'novo',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quote items table
CREATE TABLE public.quote_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quote_id UUID NOT NULL REFERENCES public.quotes(id) ON DELETE CASCADE,
  equipment_name TEXT NOT NULL,
  equipment_line TEXT NOT NULL,
  equipment_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create abandoned carts table
CREATE TABLE public.abandoned_carts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  city TEXT,
  items JSONB NOT NULL DEFAULT '[]',
  reminder_sent BOOLEAN NOT NULL DEFAULT false,
  recovered BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user roles table
CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on all tables
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.abandoned_carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Quotes: anyone can insert (public form), only admins can read/update
CREATE POLICY "Anyone can create quotes" ON public.quotes
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Admins can view all quotes" ON public.quotes
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update quotes" ON public.quotes
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Quote items: anyone can insert, admins can read
CREATE POLICY "Anyone can create quote items" ON public.quote_items
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Admins can view all quote items" ON public.quote_items
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.quotes q 
      WHERE q.id = quote_id 
      AND public.has_role(auth.uid(), 'admin')
    )
  );

-- Abandoned carts: anyone can insert/update their own, admins can read all
CREATE POLICY "Anyone can create abandoned carts" ON public.abandoned_carts
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can update abandoned carts by email" ON public.abandoned_carts
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins can view abandoned carts" ON public.abandoned_carts
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- User roles: only admins can manage
CREATE POLICY "Admins can view roles" ON public.user_roles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_quotes_updated_at
  BEFORE UPDATE ON public.quotes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_abandoned_carts_updated_at
  BEFORE UPDATE ON public.abandoned_carts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for search
CREATE INDEX idx_quotes_email ON public.quotes(email);
CREATE INDEX idx_quotes_phone ON public.quotes(phone);
CREATE INDEX idx_quotes_status ON public.quotes(status);
CREATE INDEX idx_abandoned_carts_email ON public.abandoned_carts(email);
CREATE INDEX idx_abandoned_carts_reminder ON public.abandoned_carts(reminder_sent) WHERE NOT reminder_sent;
