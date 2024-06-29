import React, { useEffect } from "react";
import useDarkMode from 'use-dark-mode';
import { motion } from 'framer-motion';

const Rentals = () => {
  const darkMode = useDarkMode(true);

  useEffect(() => {
    if (darkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode.value]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
    <section id='rentals'>
    <div className={`w-full min-h-screen ${darkMode.value ? 'bg-gradient-to-b from-gray-900 via-yellow-800 to-gray-700' : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300'}`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.h2 
          className={`text-3xl mb-6 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Rentals
        </motion.h2>
        <motion.p 
          className={`text-lg mb-6 ${darkMode.value ? 'text-white' : 'text-gray-700'}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          It would be a smart decision to rent a copier from Hi-Tech Copier. Image is an innovative organisation which offers the rental of all sorts of IT and office equipment to organisations in Hyderabad, Secunderabad and to various cities across Andhra Pradesh and Telangana states. Image Business Machines is a reliable service that only offers well maintained photocopiers that feature the latest technology. So the next time you need to hire a photocopier for a short term or long term rent plan, look no further than Image Business Machines.
        </motion.p>
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{ 
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className={`p-6 rounded-lg shadow-lg ${darkMode.value ? 'bg-gray-800' : 'bg-white'}`}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            >
            <h3 className={`text-2xl mb-2 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Rental Advantages</h3>
            <ul className={`list-disc pl-5 ${darkMode.value ? 'text-white' : 'text-gray-700'}`}>
              <li>No Investment</li>
              <li>No Maintenance charges</li>
              <li>No Risk & No Surprise Bills</li>
              <li>Low Copy Cost & High Copy Quality</li>
              <li>Free Upgrade of Latest Technology</li>
              <li>Replacement of Copier every Two years</li>
              <li>Rent is inclusive of all Spares & Consumables</li>
            </ul>
          </motion.div>
          <motion.div 
            className={`p-6 rounded-lg shadow-lg ${darkMode.value ? 'bg-gray-800' : 'bg-white'}`}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            >
            <h3 className={`text-2xl mb-2 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>With this also get</h3>
            <ul className={`list-disc pl-5 ${darkMode.value ? 'text-white' : 'text-gray-700'}`}>
              <li>Express Service</li>
              <li>Free Operator's training</li>
              <li>Free Delivery in Hyderabad & Visakhapatnam</li>
              <li>High Speed Machines - 20 ppm to 70 ppm</li>
              <li>Heavy Print Capacity - Upto 1 Lakh copies per day</li>
            </ul>
          </motion.div>
          <motion.div 
            className={`p-6 rounded-lg shadow-lg ${darkMode.value ? 'bg-gray-800' : 'bg-white'}`}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            >
            <h3 className={`text-2xl mb-2 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Reasons for Opting Image Business Machines</h3>
            <ul className={`list-disc pl-5 ${darkMode.value ? 'text-white' : 'text-gray-700'}`}>
              <li>Skilled technicians</li>
              <li>Largest Inventory of Digital Copiers & Printers</li>
              <li>Largest Inventory for Spares & Consumables</li>
              <li>On time Delivery, Installation and support</li>
              <li>100% Service satisfaction</li>
            </ul>
          </motion.div>
          <motion.div 
            className={`p-6 rounded-lg shadow-lg ${darkMode.value ? 'bg-gray-800' : 'bg-white'}`}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className={`text-2xl mb-2 ${darkMode.value ? 'text-white' : 'text-gray-800'}`}>Convenient Rental Packages</h3>
            <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'} mb-4`}>Once a month payment with flexible rental schemes.</p>
            <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'} mb-4`}>Please feel free to contact me if you need any further information.</p>
            <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'} mb-2`}><strong>Mohammad Jaffar Ahmed</strong></p>
            <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'} mb-2`}>Mobile: +91 9030731001 (10am to 8pm Monday to Saturday)</p>
            <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'} mb-2`}>Email: example@gmail.com</p>
            <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'} mb-4`}>Sunday & General holiday closed.</p>
            <p className={`${darkMode.value ? 'text-white' : 'text-gray-700'}`}>Thanking you and assuring you of our prompt and best services at all times.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </section>
    </>
  );
}

export default Rentals;
