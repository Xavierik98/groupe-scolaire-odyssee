import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const geistMono = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xn--gs-lodysse-j7a.com"),
  title: {
    template: "%s | Groupe Scolaire L’Odyssée",
    default: "Groupe Scolaire L’Odyssée - École Privée à Pointe-Noire, Congo-Brazzaville",
  },
  description:
    "Groupe Scolaire L’Odyssée à Pointe-Noire, République du Congo : éducation d’excellence de la crèche au collège. Enseignement innovant, bilingue et inclusif. Inscrivez vos enfants maintenant.",
  keywords: [
    "Groupe Scolaire L'Odyssée",
    "école privée Pointe-Noire",
    "école privée Congo Brazzaville",
    "groupe scolaire Pointe-Noire",
    "crèche Pointe-Noire",
    "maternelle Pointe-Noire",
    "élémentaire Congo",
    "collège Pointe-Noire",
    "enseignement privé République du Congo",
    "meilleure école Pointe-Noire",
    "inscription école privée Congo",
    "programme scolaire innovant Congo",
    "activités périscolaires Pointe-Noire",
    "éducation bilingue Congo",
    "école L'Odyssée Congo Brazzaville"
  ],
  other: {
    "geo.region": "CG-11",
    "geo.placename": "Pointe-Noire",
    "geo.position": "-4.7975;11.8639",
    "ICBM": "-4.7975, 11.8639",
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.xn--gs-lodysse-j7a.com",
    siteName: "Groupe Scolaire L'Odyssée",
    title: "L'Odyssée - École Privée | Crèche, Maternelle, Primaire, Collège",
    description:
      "Le Groupe Scolaire L'Odyssée propose un enseignement de qualité, de la crèche au collège, dans un cadre bienveillant et moderne.",
    images: [
      {
        url: "/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Groupe Scolaire L'Odyssée",
      },
    ],
  },
  alternates: {
    canonical: "https://www.xn--gs-lodysse-j7a.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
