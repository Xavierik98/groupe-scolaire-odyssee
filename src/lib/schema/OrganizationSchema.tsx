import { Organization } from 'schema-dts';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: "Groupe Scolaire L'Odyssée",
  url: 'https://www.xn--gs-lodysse-j7a.com',
  logo: 'https://www.xn--gs-lodysse-j7a.com/logo.png',
  description:
    "Groupe Scolaire Privé L'Odyssée : éducation d'excellence de la crèche au collège à Pointe-Noire, République du Congo. Enseignement innovant, bilingue et inclusif.",
  slogan: 'Votre partenaire éducatif depuis 1995',
  foundingDate: '1995',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CG',
    addressLocality: 'Pointe-Noire',
    streetAddress:
      "97116, Rue de BOUK' LI - BWALI, Camp 31 juillet, vers le PELLIGRINI et la direction d'OFIS",
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+242 05 585 02 02',
      contactType: 'customer service',
      availableLanguage: ['fr'],
      areaServed: 'CG',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '17:00',
      },
    },
    {
      '@type': 'ContactPoint',
      telephone: '+242 04 061 34 48',
      contactType: 'admissions',
      availableLanguage: ['fr'],
      areaServed: 'CG',
    },
  ],
  email: 'contact@gs-lodyssée.com',
  sameAs: [
    'https://web.facebook.com/GroupeScolaireOdyssee/',
    'https://www.tiktok.com/@groupe.scolaire.odyssee',
    'https://www.linkedin.com/company/groupe-scolaire-odyssee/',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Pointe-Noire',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Niveaux d'enseignement L'Odyssée",
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Crèche',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Maternelle',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Élémentaire',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Collège',
      },
    ],
  },
} as unknown as Organization;
