import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import auditImage from '../assets/audit.jpg';
import taxationImage from '../assets/taxation.jpg';
import legalImage from '../assets/legal.jpg';
import consultancyImage from '../assets/consultancy.jpg';
import statutoryImage from '../assets/statutory.jpg';
import managementImage from '../assets/management.jpg';
import assuranceImage from '../assets/assurance.jpg';
import directTaxImage from '../assets/direct.jpg';
import indirectTaxImage from '../assets/indirect.jpg';
import internationalTaxImage from '../assets/international.jpg';
import companyImage from '../assets/company.jpg';
import startupImage from '../assets/startup.jpg';
import outsourcingImage from '../assets/outsourcing.jpg';
import consultImage from '../assets/consult.jpg';
import businessImage from '../assets/business.jpg';
import otherImage from '../assets/other.jpg';

const Services = () => {
  const [showAuditDetails, setShowAuditDetails] = useState(false);
  const [showTaxationDetails, setShowTaxationDetails] = useState(false);
  const [showLegalDetails, setShowLegalDetails] = useState(false);
  const [showConsultancyDetails, setShowConsultancyDetails] = useState(false); // State for consultancy details

  const serviceVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const detailsVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.5 } },
  };

  const toggleAuditDetails = () => {
    setShowAuditDetails(!showAuditDetails);
    setShowTaxationDetails(false);
    setShowLegalDetails(false);
    setShowConsultancyDetails(false); // Close consultancy details if open
  };

  const toggleTaxationDetails = () => {
    setShowTaxationDetails(!showTaxationDetails);
    setShowAuditDetails(false);
    setShowLegalDetails(false);
    setShowConsultancyDetails(false); // Close consultancy details if open
  };

  const toggleLegalDetails = () => {
    setShowLegalDetails(!showLegalDetails);
    setShowAuditDetails(false);
    setShowTaxationDetails(false);
    setShowConsultancyDetails(false); // Close consultancy details if open
  };

  const toggleConsultancyDetails = () => {
    setShowConsultancyDetails(!showConsultancyDetails);
    setShowAuditDetails(false);
    setShowTaxationDetails(false);
    setShowLegalDetails(false);
  };

  return (
    <section id="services" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-4xl lg:text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="service-item flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-lg"
            variants={serviceVariants}
            whileHover="hover"
            onClick={toggleAuditDetails}
          >
            <img src={auditImage} alt="Audit & Assurance" className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-2xl mb-2 cursor-pointer font-bold">Audit & Assurance</h3>
              <p>We provide comprehensive audit and assurance services to help ensure your business's financial integrity and compliance.</p>
              <AnimatePresence>
                {showAuditDetails && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={detailsVariants}
                    className="mt-4 grid grid-cols-1 gap-4"
                  >
                    <div className="mt-4">
                      <img src={statutoryImage} alt="Statutory Service" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Statutory Service</h4>
                      <p>An audit mandated by law to ensure the accuracy of an organization's financial statements and their adherence to regulatory requirements.</p>
                    </div>
                    <div className="mt-4">
                      <img src={managementImage} alt="Management Audits" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Management Audits</h4>
                      <p>A systematic evaluation of management practices, policies, and procedures aimed at assessing their efficiency, effectiveness, and alignment with organizational goals and strategies.</p>
                    </div>
                    <div className="mt-4">
                      <img src={assuranceImage} alt="Assurance Services" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Assurance Services</h4>
                      <p>Independent professional assessments that improve the quality, reliability, and relevance of information or its context.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="service-item flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-lg"
            variants={serviceVariants}
            whileHover="hover"
            onClick={toggleTaxationDetails}
          >
            <img src={taxationImage} alt="Taxation" className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-2xl mb-2 cursor-pointer font-bold">Taxation</h3>
              <p>Our tax experts offer strategic tax planning and compliance services to optimize your tax position.</p>
              <AnimatePresence>
                {showTaxationDetails && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={detailsVariants}
                    className="mt-4 grid grid-cols-1 gap-4"
                  >
                    <div className="mt-4">
                      <img src={directTaxImage} alt="Direct Taxes" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Direct Taxes</h4>
                      <p>Services aimed at helping individuals and organizations comply with direct tax laws and regulations, minimize tax liabilities, and ensure efficient tax planning.</p>
                    </div>
                    <div className="mt-4">
                      <img src={indirectTaxImage} alt="Indirect Taxes" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Indirect Taxes</h4>
                      <p>Compliance, advisory, planning, and representation services related to taxes levied on the production, sale, or consumption of goods and services.</p>
                    </div>
                    <div className="mt-4">
                      <img src={internationalTaxImage} alt="International Taxes" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">International Taxes</h4>
                      <p>Services addressing tax implications from cross-border transactions, investments, and operations.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="service-item flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-lg"
            variants={serviceVariants}
            whileHover="hover"
            onClick={toggleLegalDetails}
          >
            <img src={legalImage} alt="Legal & Compliance Services" className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-2xl mb-2 cursor-pointer font-bold">Legal & Compliance Services</h3>
              <p>Ensure your business adheres to all legal and regulatory requirements with our comprehensive compliance services.</p>
              <AnimatePresence>
                {showLegalDetails && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={detailsVariants}
                    className="mt-4 grid grid-cols-1 gap-4"
                  >
                    <div className="mt-4">
                      <img src={companyImage} alt="Company Law" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Company Law</h4>
                      <p>Legal services related to company law.</p>
                    </div>
                    <div className="mt-4">
                      <img src={startupImage} alt="Startup" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Startup</h4>
                      <p>Legal services tailored for startups.</p>
                    </div>
                    <div className="mt-4">
                      <img src={outsourcingImage} alt="Outsourcing" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Outsourcing</h4>
                      <p>Legal outsourcing services.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="service-item flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-lg"
            variants={serviceVariants}
            whileHover="hover"
            onClick={toggleConsultancyDetails}
          >
            <img src={consultancyImage} alt="Management Consultancy & Business Advisory" className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-2xl mb-2 cursor-pointer font-bold">Management Consultancy & Business Advisory</h3>
              <p>Our consultants offer expert advice to help you navigate complex business challenges and achieve your strategic goals.</p>
              <AnimatePresence>
                {showConsultancyDetails && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={detailsVariants}
                    className="mt-4 grid grid-cols-1 gap-4"
                  >
                    <div className="mt-4">
                      <img src={consultImage} alt="Management Consultancy" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Management Consultancy</h4>
                      <p>Expert advice to improve performance, efficiency, and effectiveness.</p>
                    </div>
                    <div className="mt-4">
                      <img src={businessImage} alt="Business Advisory Services" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Business Advisory Services</h4>
                      <p>Assistance in addressing challenges and achieving strategic objectives.</p>
                    </div>
                    <div className="mt-4">
                      <img src={otherImage} alt="Other Services" className="w-full h-32 object-cover rounded-lg mb-2" />
                      <h4 className="text-xl mb-2 font-bold">Other Services</h4>
                      <p>Additional consultancy services tailored to your needs.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
