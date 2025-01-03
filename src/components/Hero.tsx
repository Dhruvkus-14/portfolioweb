import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { scrollToSection } from '../utils/scrollUtils';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = './src/assets/Dhruv_Kushwaha_Resume.pdf'; // Replace with the correct path
    link.download = 'Dhruv_Kushwaha_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-600 mb-8">
              Hi, I am
            </h3>
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Dhruv Kushwaha
              </span>
            </h1>
            <h2 className="text-2xl font-medium text-gray-700 mb-6">
              <Typewriter
                words={[
                  'Web Developer',
                  'Software Engineer',
                  'Tech Enthusiast',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p className="text-lg text-gray-500 max-w-2xl mb-8">
            Full Stack Developer based in India
            </p>
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Download Resume
            </button>
          </motion.div>
        </div>

        <div className="w-64 h-64 md:w-80 md:h-80 relative">
          <img
            src="./src/assets/picture.png" // Replace with your correct path
            alt="Dhruv Kushwaha"
            className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
