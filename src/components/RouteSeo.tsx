import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://apollofitness.com.br";
const OG_IMAGE = `${SITE_URL}/__l5e/assets-v1/f83518eb-4fef-4350-939b-d487b556c33f/og-apollo-fitness.jpg`;

type Meta = { title: string; description: string; noindex?: boolean };

const routes: Record<string, Meta> = {
  "/": {
    title: "Aparelhos de Academia | Apollo Fitness Equipamentos",
    description:
      "Fábrica de aparelhos de academia no Brasil. Mais de 800 academias equipadas com equipamentos de musculação, cardio e peso livre. Solicite seu orçamento.",
  },
  "/linha-platinum": {
    title: "Linha Platinum | Aparelhos de Musculação Apollo Fitness",
    description:
      "Aparelhos de academia da Linha Platinum Apollo Fitness: musculação profissional com acabamento premium e garantia estendida. Monte seu orçamento.",
  },
  "/linha-gold": {
    title: "Linha Gold | Aparelhos de Musculação Apollo Fitness",
    description:
      "Linha Gold Apollo Fitness com dezenas de aparelhos de academia para musculação: extensora, leg press, pulley, cross over e mais. Peça um orçamento.",
  },
  "/peso-livre": {
    title: "Peso Livre | Bancos e Racks Apollo Fitness",
    description:
      "Equipamentos de peso livre Apollo Fitness: bancos, racks, suportes e estações para treino livre em academias profissionais.",
  },
  "/linha-articulados": {
    title: "Linha Articulados | Aparelhos de Academia Apollo Fitness",
    description:
      "Aparelhos articulados Apollo Fitness com movimento biomecânico natural para academias de alta performance. Confira e solicite orçamento.",
  },
  "/linha-pro-diamond": {
    title: "Linha Pro Diamond | Aparelhos Premium Apollo Fitness",
    description:
      "Linha Pro Diamond Apollo Fitness: aparelhos de academia premium com design exclusivo e alta durabilidade para grandes academias.",
  },
  "/linha-cardio": {
    title: "Linha Cardio | Esteira, Bike e Escada Apollo Fitness",
    description:
      "Equipamentos de cardio Apollo Fitness: esteira profissional, simulador de escada e bike de spinning para academias.",
  },
  "/catalogo": {
    title: "Catálogo de Equipamentos 2026 | Apollo Fitness",
    description:
      "Veja o catálogo completo 2026 da Apollo Fitness com todas as linhas de aparelhos de academia, página por página.",
  },
  "/orcamento": {
    title: "Carrinho de Orçamento | Apollo Fitness",
    description:
      "Monte a lista de aparelhos de academia que você precisa e envie seu pedido de orçamento para a Apollo Fitness.",
  },
  "/admin": {
    title: "Área Administrativa | Apollo Fitness",
    description: "Área restrita de gestão de orçamentos da Apollo Fitness.",
    noindex: true,
  },
  "/admin/login": {
    title: "Login Administrativo | Apollo Fitness",
    description: "Acesso restrito à área de gestão da Apollo Fitness.",
    noindex: true,
  },
};

const fallback: Meta = {
  title: "Página não encontrada | Apollo Fitness",
  description: "A página que você procura não existe. Volte ao início da Apollo Fitness.",
  noindex: true,
};

export const RouteSeo = () => {
  const { pathname } = useLocation();
  const path = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const meta = routes[path] ?? fallback;
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {meta.noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
    </Helmet>
  );
};
