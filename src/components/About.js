import React, { useEffect, useState } from 'react';
import accountantImage from '../assets/about.jpg'; // Replace with your image path
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="p-8 bg-white md:mt-8">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-6 lg:pr-8" data-aos="fade-right">
          <img src={accountantImage} alt="Accountant" className="rounded-lg shadow-lg mx-auto md:mx-0 mt-6 md:mt-0 md:w-3/4 lg:w-full" />
          <div className="md:hidden flex justify-center mt-4">
            <button
              onClick={toggleShowMore}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              {showMore ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-6 lg:pl-8" data-aos="fade-left">
          <h2 className="text-2xl md:text-4xl lg:text-4xl mb-4">About Us</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-2 text-justify">
            We are a leading chartered accountant firm offering comprehensive financial solutions. 
            Our goal is dedicated to providing top-notch services in accounting, auditing, taxation, and business advisory.
          </p>
          <div className="hidden md:block">
            <button
              onClick={toggleShowMore}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              {showMore ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
      </div>

      {showMore && (
        <>
          <div className="container mx-auto mt-8" data-aos="fade-up">
            <h3 className="text-xl md:text-3xl lg:text-3xl mb-4">Our Mission</h3>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-justify">
              Our mission is to empower businesses by delivering innovative and reliable financial solutions
              that help them grow and succeed in a competitive market.
            </p>
          </div>

          <div className="container mx-auto mt-8" data-aos="fade-up">
            <h3 className="text-xl md:text-3xl lg:text-3xl mb-4">Our Vision</h3>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-justify">
              We envision a world where every business, regardless of size, has access to expert financial guidance
              and the tools they need to achieve their full potential.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default About;
