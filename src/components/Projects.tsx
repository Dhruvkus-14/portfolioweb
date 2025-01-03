import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Creative-Slate',
    description: '   A highly interactive whiteboard web application used for brainstorming, planning projects, and creating diagram for personal tasks or whether you are teaching .This app simplifies your workflow and help you stay organized Boost Productivity:  includes handy tools like calculator, to-do-list , stopwatch, and a clock for efficient time and task  management.',
    imageUrl: './src/assets/project1.png',
    demoUrl: 'https://creative-slate.vercel.app/',
    githubUrl: 'https://github.com/Dhruvkus-14/CreativeSlate',
  },
  {
    title: 'Cars Hub ',
    description: 'Developed with Next.js and leveraging its server-side rendering capabilities, the Car Showcase website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience..',
    imageUrl: './src/assets/project2.png',
    demoUrl: 'https://carsview-r3en21m6o-dhruvs-projects-13ea04f4.vercel.app/',
    githubUrl: 'https://github.com/Dhruvkus-14/carsview',
  },
  
  {
    title: 'Whac a mole',
    description: 'The goal of the game is to hit (or "whack") as many moles as possible within a given time frame or before the game ends. Each successful hit earns points, while missing moles or hitting incorrect targets may result in a penalty.',
    imageUrl: './src/assets/project5.png',
    demoUrl: 'https://whac-a-mole-xi.vercel.app/',
    githubUrl: 'https://github.com/Dhruvkus-14/whac-a-mole',
  },
  {
    title: 'Tic-Tac-To',
    description: 'ATic-Tac-Toe (also known as Noughts and Crosses or Xs and Os) is a classic two-player game where the goal is to be the first to form a straight line of three of your symbols (either "X" or "O") on a 3x3 grid..',
    imageUrl: './src/assets/project3.png',
    demoUrl: 'https://tic-tac-to-tau.vercel.app/',
    githubUrl: 'https://github.com/Dhruvkus-14/Tic-Tac-To',
  },
  {
    title: 'StonePaperScissors',
    description: 'TStone-Paper-Scissors (also known as Rock-Paper-Scissors) is a simple, quick game often used for fun, decision-making, or as a challenge. The goal is to select a gesture (Stone, Paper, or Scissors) that beats your opponent.',
    imageUrl: './src/assets/project4.png',
    demoUrl: 'https://stone-paper-scissors-six.vercel.app/',
    githubUrl: 'https://github.com/Dhruvkus-14/StonePaperScissors',
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            A showcase of my recent projects with a modern touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
