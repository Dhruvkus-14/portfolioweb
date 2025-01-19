import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { tech: 'HTML', imageUrl: '/assets/html.png' },
  { tech: 'CSS', imageUrl: '/assets/css.png' },
  { tech: 'JavaScript', imageUrl: '/assets/javascript.png' },
  { tech: 'ReactJS', imageUrl: '/assets/react.png' },
  { tech: 'TailwindCSS', imageUrl: '/assets/tailwind.png' },
  { tech: 'Firebase', imageUrl: '/assets/firebase.png' },
  { tech: 'Supabase', imageUrl: '/assets/supabase.png' },
  { tech: 'MongoDB', imageUrl: '/assets/Mongodb.png' },
  { tech: 'NextJS', imageUrl: '/assets/nextjs.png' },
  { tech: 'NodeJS', imageUrl: '/assets/nodejs.png' },
  { tech: 'ExpressJS', imageUrl: '/assets/expressjs.png' },
  { tech: 'EmailJS', imageUrl: '/assets/emailjs.png' },
];

const About = () => {
  const upperHalf = milestones.slice(0, Math.ceil(milestones.length / 2));
  const lowerHalf = milestones.slice(Math.ceil(milestones.length / 2));

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Technologies I've Worked With</h2>
          <p className="text-lg mt-4">A glance at the tools and technologies that define my journey in web development.</p>
        </div>

        {/* Upper Half - Left to Right */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee gap-8">
            {upperHalf.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 mx-4 transform hover:scale-105 transition-transform duration-300"
                style={{ minWidth: '200px' }}
              >
                <img
                  src={milestone.imageUrl}
                  alt={milestone.tech}
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{milestone.tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lower Half - Right to Left */}
        <div className="overflow-hidden relative mt-12">
          <div className="flex animate-marquee-reverse gap-8">
            {lowerHalf.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 mx-4 transform hover:scale-105 transition-transform duration-300"
                style={{ minWidth: '200px' }}
              >
                <img
                  src={milestone.imageUrl}
                  alt={milestone.tech}
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{milestone.tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 15s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-reverse {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default About;