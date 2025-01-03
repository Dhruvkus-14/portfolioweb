import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const milestones = [
    { tech: 'HTML', imageUrl: './src/assets/html.png' },
    { tech: 'CSS', imageUrl: './src/assets/css.png' },
    { tech: 'JavaScript', imageUrl: './src/assets/javascript.png' },
    { tech: 'ReactJS', imageUrl: './src/assets/react.png' },
    { tech: 'TailwindCSS', imageUrl: './src/assets/tailwind.png' },
    { tech: 'Firebase', imageUrl: './src/assets/firebase.png' },
    { tech: 'Supabase', imageUrl: './src/assets/supabase.png' },
    { tech: 'MongoDB', imageUrl: './src/assets/mongodb.png' },
    { tech: 'NextJS', imageUrl: './src/assets/nextjs.png' },
    { tech: 'NodeJS', imageUrl: './src/assets/nodejs.png' },
    { tech: 'ExpressJS', imageUrl: './src/assets/expressjs.png' },
    { tech: 'EmailJS', imageUrl: './src/assets/emailjs.png' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Technologies I've Worked With</h2>
          <p className="text-lg text-gray-600">A brief overview of my journey in web development.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6"
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
    </section>
  );
};

export default About;
