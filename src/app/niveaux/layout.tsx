import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos Niveaux : Crèche, Maternelle, Élémentaire, Collège",
  description:
    "Découvrez nos niveaux d'enseignement à Pointe-Noire : crèche, maternelle, élémentaire et collège. Un parcours éducatif complet et cohérent pour votre enfant.",
  keywords:
    "crèche Pointe-Noire, maternelle Congo, élémentaire école privée, collège Pointe-Noire, niveaux scolaires L'Odyssée",
  openGraph: {
    title: "Nos Niveaux d'Enseignement | Groupe Scolaire L'Odyssée",
    description:
      "De la crèche au collège : découvrez notre parcours éducatif complet à Pointe-Noire.",
    type: "website",
    locale: "fr_FR",
    siteName: "Groupe Scolaire L'Odyssée",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.xn--gs-lodysse-j7a.com/niveaux",
  },
};

export default function NiveauxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
