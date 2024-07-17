import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiMap } from 'react-icons/fi';

const Contact = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section id="contact" className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-6 md:mb-8">Contact Us</h2>
        <div className="flex justify-center mb-4">
          <button
            onClick={toggleDetails}
            className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block"
          >
            {showDetails ? 'Hide Contact Details' : 'Show Contact Details'}
          </button>
        </div>
        {showDetails && (
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <FiMail className="text-2xl text-blue-500 mr-2" />
              <span className="text-lg">pbalajiandco@gmail.com</span>
            </div>
            <div className="flex items-center mb-4 mr-10">
              <FiPhone className="text-2xl text-blue-500 mr-2" />
              <span className="text-lg">9551124463</span>
            </div>
            <div className="flex items-center mb-4">
              <FiMapPin className="text-2xl text-blue-500 mr-2 mb-12" />
              <span className="text-lg">
                No-125, Ponnamallee Highway, <br />
                Poonamallee High Road, <br />
                Maduravoyal, <br />
                Chennai, Tamil Nadu 600095, <br />
                India
              </span>
            </div>
            <div className="flex items-center mb-4 mr-6">
              <FiMap className="text-2xl text-blue-500 mr-2" />
              <a
                href="https://maps.app.goo.gl/Auxth2YmUZwPiSB96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-lg"
              >
                View on Map
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
