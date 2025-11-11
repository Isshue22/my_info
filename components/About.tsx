import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img
              src="components/myph.jpg"
              alt="Asish Bag"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-cyan-500 shadow-lg"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-gray-300 text-lg mb-6">
              I am a data analytics student skilled in statistical analysis, data visualization, and business intelligence. I have experience with data-driven solutions, customer support optimization, and sales analytics. 
            </p>
            <p className="text-gray-300 text-lg mb-8">
              I am proficient in Python, SQL, Tableau, AWS, and big data technologies, always eager to learn and apply my skills to solve real-world problems.
            </p>
            <a
              href="/asish_bag_resume.pdf"
              download
              className="inline-block bg-transparent border-2 border-cyan-500 text-cyan-500 font-bold py-3 px-8 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map(skill => (
              <div key={skill} className="bg-slate-800/50 border border-cyan-500/30 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;