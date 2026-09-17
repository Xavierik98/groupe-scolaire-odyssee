'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
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
              Politique de Confidentialité
            </h1>

            <div className="space-y-8 font-work-sans">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Collecte des Informations</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous collectons les informations que vous nous fournissez directement lorsque vous :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>Remplissez notre formulaire de contact</li>
                  <li>Effectuez une demande d'inscription pour votre enfant</li>
                  <li>Vous inscrivez à notre newsletter</li>
                  <li>Communiquez avec notre équipe administrative</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Utilisation des Informations</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les informations que nous collectons sont utilisées pour :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>Traiter vos demandes d'inscription et de renseignements</li>
                  <li>Assurer le suivi pédagogique et administratif des élèves</li>
                  <li>Communiquer avec vous concernant la scolarité de votre enfant</li>
                  <li>Améliorer nos services éducatifs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Protection des Données des Élèves</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les données personnelles concernant les élèves mineurs font l'objet d'une attention particulière. Nous mettons en œuvre des mesures de sécurité appropriées pour protéger ces informations contre tout accès non autorisé, modification, divulgation ou destruction. Ces données ne sont utilisées qu'à des fins pédagogiques et administratives internes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est envoyé.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Droits des Parents et Tuteurs</h2>
                <p className="text-gray-700 leading-relaxed">
                  En tant que parent ou tuteur légal, vous disposez d'un droit d'accès, de rectification et de suppression des données personnelles concernant votre enfant. Pour exercer ces droits, contactez notre équipe administrative.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question concernant notre politique de confidentialité, vous pouvez nous contacter à :
                </p>
                <div className="mt-2 text-gray-700">
                  <p>Email : contact@gs-lodyssée.com</p>
                  <p>Téléphone : +242 05 585 02 02</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
