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
  const upperHalf = milestones.slice(0, milestones.length / 2); // First half of items
  const lowerHalf = milestones.slice(milestones.length / 2); // Second half of items

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Technologies I've Worked With</h2>
          <p className="text-lg text-gray-600">A brief overview of my journey in web development.</p>
        </div>

        {/* Upper Half - Left to Right */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            {upperHalf.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6 mx-4"
              >
                <img
                  src={milestone.imageUrl}
                  alt={milestone.tech}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{milestone.tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lower Half - Right to Left */}
        <div className="overflow-hidden whitespace-nowrap mt-8">
          <div className="flex animate-marquee-reverse">
            {lowerHalf.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6 mx-4"
              >
                <img
                  src={milestone.imageUrl}
                  alt={milestone.tech}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{milestone.tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
