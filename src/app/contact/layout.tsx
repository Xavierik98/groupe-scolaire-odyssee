import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact & Inscription - Pointe-Noire",
  description:
    "Contactez le Groupe Scolaire L'Odyssée à Pointe-Noire pour une inscription ou toute demande d'information. Notre équipe vous répond rapidement.",
  keywords:
    "contact école Pointe-Noire, inscription école privée Congo, rendez-vous L'Odyssée, adresse téléphone école",
  openGraph: {
    title: "Contact | Groupe Scolaire L'Odyssée",
    description:
      "Contactez-nous pour une inscription ou toute demande d'information.",
    type: "website",
    locale: "fr_FR",
    siteName: "Groupe Scolaire L'Odyssée",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.xn--gs-lodysse-j7a.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
