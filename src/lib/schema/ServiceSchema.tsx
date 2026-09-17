import { Service } from 'schema-dts';

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Enseignement privé de la crèche au collège',
  provider: {
    '@type': 'EducationalOrganization',
    name: "Groupe Scolaire L'Odyssée",
  },
  areaServed: {
    '@type': 'City',
    name: 'Pointe-Noire',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Services du Groupe Scolaire L'Odyssée",
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Crèche',
          description: 'Accueil flexible des tout-petits de 3 mois à 3 ans',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Maternelle',
          description: "Développement des aptitudes fondamentales et épanouissement personnel",
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Élémentaire',
          description: 'Excellence académique combinée avec activités créatives et sportives',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Collège',
          description: 'Préparation à l\'avenir avec programme intensif et activités extrascolaires',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Restauration scolaire',
          description: 'Menus équilibrés et variés préparés sur place',
        },
      },
    ],
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.xn--gs-lodysse-j7a.com/contact',
    servicePhone: {
      '@type': 'ContactPoint',
      telephone: '+242 05 585 02 02',
    },
    availableLanguage: ['fr'],
  },
} as unknown as Service;
