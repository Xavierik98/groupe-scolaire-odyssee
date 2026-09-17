import { LocalBusiness } from 'schema-dts';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: "Groupe Scolaire L'Odyssée",
  image: 'https://www.xn--gs-lodysse-j7a.com/hero-bg.jpeg',
  '@id': 'https://www.xn--gs-lodysse-j7a.com/#ecole',
  url: 'https://www.xn--gs-lodysse-j7a.com',
  telephone: '+242 05 585 02 02',
  email: 'contact@gs-lodyssée.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      "97116, Rue de BOUK' LI - BWALI, Camp 31 juillet, vers le PELLIGRINI et la direction d'OFIS",
    addressLocality: 'Pointe-Noire',
    addressCountry: 'CG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -4.7975,
    longitude: 11.8639,
  },
  areaServed: {
    '@type': 'City',
    name: 'Pointe-Noire',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'XAF',
} as unknown as LocalBusiness;
