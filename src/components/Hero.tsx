import React from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import useDarkMode from 'use-dark-mode';
import { FlipWords } from '@/components/ui/flip-words';

const Hero = () => {
  const darkMode = useDarkMode(false);
  const words = ["Sales", "Services", "Repair"];

  const whatsappNumber = '9030731001'; // Replace with your WhatsApp number

  return (
    <div className="relative h-screen bg-gradient-to-b from-orange-300 via-yellow-500 to-yellow-300 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className={`text-center md:text-left p-4 rounded-lg ${darkMode.value ? 'bg-opacity-60 bg-black' : 'bg-opacity-60 bg-white'}`}>
          <h1 className={`text-5xl font-bold ${darkMode.value ? 'text-white' : 'text-gray-800'} mb-4`}>
            Welcome to Hi-Tech Copier
          </h1>
          <h2 className={`text-3xl ${darkMode.value ? 'text-gray-200' : 'text-gray-600'}`}>
            One Stop Destination for Copier Machine <span className="text-white"><FlipWords words={words} /></span>
          </h2>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src="/assets/Cannon.png"
            alt="Xerox Machine"
            width={500}
            height={500}
            className="w-full md:w-auto h-auto max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default Hero;
