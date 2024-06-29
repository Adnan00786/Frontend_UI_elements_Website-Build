"use client";
import React from 'react';
import { FaShoppingCart, FaTools, FaWrench, FaDollarSign, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useDarkMode from 'use-dark-mode';

const About = () => {
  const darkMode = useDarkMode(true);

  return (
        <>
        <section id='about'>
    <div className={`min-h-screen ${darkMode.value ? 'bg-gradient-to-b from-yellow-400 to-yellow-1900 ' : 'bg-gradient-to-b from-yellow-200 to-orange-400'} p-8 flex flex-col items-center`}>
       <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-5xl font-bold ${darkMode.value ? 'text-white' : 'text-gray-800'} mb-8`}
      >
        About Us
      </motion.h1>

      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`${darkMode.value ? 'bg-opacity-80 bg-black' : 'bg-white'} p-8 rounded-lg shadow-lg`}
        >
          <h2 className={`text-3xl font-bold ${darkMode.value ? 'text-white' : 'text-gray-800'} mb-6`}>Our Story</h2>
          <p className={`${darkMode.value ? 'text-gray-200' : 'text-gray-600'} leading-relaxed mb-4`}>
            Hi-Tech Copier was founded with the vision of providing top-quality copier machine solutions to businesses of all sizes. Over the years, we have grown to become a trusted name in the industry, known for our commitment to excellence and customer satisfaction.
          </p>
          {/* <p className={`${darkMode.value ? 'text-gray-200' : 'text-gray-600'} leading-relaxed`}>
          Established in 2008, we have built a reputation for excellence in the sales and servicing of copier machines from leading international brands. Our commitment to prompt, fair, and quality service has quickly earned us recognition in the industry. We pride ourselves on our honesty and integrity, ensuring that we never mislead our customers or engage in unnecessary replacements. In an era where self-interest often prevails, we stand out by adhering to the timeless principles of fairness, transparency, politeness, humility, and solidarity. Experience the difference with us, where business is not just a transaction, but a relationship built on trust.
          </p> */}
          <p className={`${darkMode.value ? 'text-gray-200' : 'text-gray-600'} leading-relaxed`}>
          We are in market since 2008 dealing with sales and services of copier machines of all international brands. We are known for our prompt and fair services. In a short span of time we gain fame just beacause of quality service, as we do not cheat customers by saying lie and replacing items unnecessarily. We do not want to introduce ourselves inn this manner, but in these era of selflishness where humanity is heading towards `Me I  and only Me` concept, we are focussing on traditional way of business where we are taught to be fair, frank, polite, humble, and to deal with solidarity, You will definitely feel the difference once we are bond in business relations.
          </p>
        </motion.div>
      </div>
        <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex flex-col items-center ${darkMode.value ? 'bg-opacity-80 bg-black' : 'bg-white'} p-4 rounded-lg shadow-lg`}
        >
          <FaShoppingCart className={`text-6xl ${darkMode.value ? 'text-white' : 'text-gray-800'} mb-4`} />
          {/* <h2 className="text-2xl font-semibold text-gray-800">Sales</h2> */}
          <h2 className={`text-2xl font-semibold ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Sales</h2>
          {/* <p className="text-gray-700 text-center"> */}
          <p className={`${darkMode.value ? 'text-gray-200' : 'text-gray-700'} text-center`}>
            Providing top-quality copier machines for all your business needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`flex flex-col items-center ${darkMode.value ? 'bg-opacity-80 bg-black' : 'bg-white'} p-4 rounded-lg shadow-lg`}
          >
          <FaTools className={`text-6xl ${darkMode.value ? 'text-white' : 'text-gray-800'} mb-4`} />
          <h2 className={`text-2xl font-semibold ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Complete Servicing</h2>
          <p className={`${darkMode.value ? 'text-gray-200' : 'text-gray-700'} text-center`}>
            Comprehensive servicing of copier machines to ensure optimal performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`flex flex-col items-center ${darkMode.value ? 'bg-opacity-80 bg-black' : 'bg-white'} p-4 rounded-lg shadow-lg`}
          >
          <FaWrench className={`text-6xl ${darkMode.value ? 'text-white' : 'text-gray-800'} mb-4`} />
          <h2 className={`text-2xl font-semibold ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Repairs</h2>
          <p className={`${darkMode.value ? 'text-gray-200' : 'text-gray-700'} text-center`}>
            Expert repair services for all copier machine issues.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`flex flex-col items-center ${darkMode.value ? 'bg-opacity-80 bg-black' : 'bg-white'} p-4 rounded-lg shadow-lg`}
          >
          <FaDollarSign className={`text-6xl ${darkMode.value ? 'text-white' : 'text-gray-800'} mb-4`} />
          <h2 className={`text-2xl font-semibold ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Spare Parts Sales</h2>
          <p className={`${darkMode.value ? 'text-gray-200' : 'text-gray-700'} text-center`}>
            Sales of spare parts at economical prices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className={`flex flex-col items-center ${darkMode.value ? 'bg-opacity-80 bg-black' : 'bg-white'} p-4 rounded-lg shadow-lg`}
          >
          <FaShieldAlt className={`text-6xl ${darkMode.value ? 'text-white' : 'text-gray-800'} mb-4`} />
          <h2 className={`text-2xl font-semibold ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Service Guarantee</h2>
          <p className={`${darkMode.value ? 'text-gray-200' : 'text-gray-700'} text-center`}>
            Service guarantee/warranty for black & white machines for 50,000 copies or three months, whichever is earlier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className={`flex flex-col items-center ${darkMode.value ? 'bg-opacity-80 bg-black' : 'bg-white'} p-4 rounded-lg shadow-lg`}
          >
          <FaUsers className={`text-6xl ${darkMode.value ? 'text-white' : 'text-gray-800'} mb-4`} />
          <h2 className={`text-2xl font-semibold ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Our Team</h2>
          <p className={`${darkMode.value ? 'text-gray-200' : 'text-gray-700'} text-center`}>
            Meet our dedicated team of experts committed to providing the best service.
          </p>
        </motion.div>
      </div>
    </div>
          </section>
    </>
  );
};

export default About;
