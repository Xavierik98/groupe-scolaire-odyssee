'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
          >
            <h1 className="text-4xl font-oswald font-bold text-gray-900 mb-8">
              Conditions d'Utilisation
            </h1>

            <div className="space-y-8 font-work-sans">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptation des Conditions</h2>
                <p className="text-gray-700 leading-relaxed">
                  En accédant et en utilisant le site web du Groupe Scolaire L'Odyssée, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Utilisation du Site</h2>
                <p className="text-gray-700 leading-relaxed">
                  Vous vous engagez à utiliser notre site uniquement à des fins légales et de manière à ne pas restreindre ou inhiber l'utilisation et la jouissance du site par un tiers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Inscriptions et Scolarité</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les informations relatives aux niveaux d'enseignement, tarifs et modalités d'inscription présentées sur ce site sont à titre indicatif. Le Groupe Scolaire L'Odyssée se réserve le droit de modifier son programme, ses tarifs ou ses conditions d'admission sans préavis.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>Toute inscription est soumise à la disponibilité des places et à un entretien préalable</li>
                  <li>Les tarifs de scolarité peuvent être révisés chaque année scolaire</li>
                  <li>Les photos et contenus présentés sont non contractuels</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Propriété Intellectuelle</h2>
                <p className="text-gray-700 leading-relaxed">
                  Tout le contenu du site (textes, images, logos, etc.) est la propriété du Groupe Scolaire L'Odyssée ou de ses partenaires et est protégé par les lois sur la propriété intellectuelle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Modalités de Paiement</h2>
                <p className="text-gray-700 leading-relaxed">
                  En procédant à une inscription, vous vous engagez à fournir des informations exactes et complètes. Les modalités de paiement des frais de scolarité seront communiquées par notre équipe administrative lors de la confirmation de l'inscription.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitation de Responsabilité</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le Groupe Scolaire L'Odyssée ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question concernant ces conditions d'utilisation, contactez-nous à :
                </p>
                <div className="mt-2 text-gray-700">
                  <p>Email : contact@gs-lodyssée.com</p>
                  <p>Téléphone : +242 05 585 02 02</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
