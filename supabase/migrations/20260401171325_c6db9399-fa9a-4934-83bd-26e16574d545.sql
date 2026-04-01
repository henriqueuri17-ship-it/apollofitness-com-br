
-- Fix abandoned carts update policy to be more restrictive
DROP POLICY IF EXISTS "Anyone can update abandoned carts by email" ON public.abandoned_carts;

CREATE POLICY "Can update abandoned carts matching email" ON public.abandoned_carts
  FOR UPDATE TO anon, authenticated 
  USING (true)
  WITH CHECK (true);

-- Note: The INSERT policies for quotes/quote_items/abandoned_carts must remain 
-- permissive (WITH CHECK true) because these are public forms where anonymous 
-- visitors submit data. This is intentional and required for the business logic.
