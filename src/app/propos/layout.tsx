import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À Propos - Notre Histoire et Projet Éducatif",
  description:
    "Découvrez l'histoire, les valeurs et le projet éducatif du Groupe Scolaire L'Odyssée à Pointe-Noire. Une équipe engagée pour l'excellence de vos enfants.",
  keywords:
    "histoire école L'Odyssée, projet éducatif Congo, valeurs école privée Pointe-Noire, équipe pédagogique",
  openGraph: {
    title: "À Propos | Groupe Scolaire L'Odyssée",
    description:
      "Notre histoire, nos valeurs et notre projet éducatif au service de l'excellence.",
    type: "website",
    locale: "fr_FR",
    siteName: "Groupe Scolaire L'Odyssée",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.xn--gs-lodysse-j7a.com/propos",
  },
};

export default function ProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
