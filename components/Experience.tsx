
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">
        Work Experience
      </h2>
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-1 h-full bg-gray-700/50 shadow-md inset-0 left-1/2 -ml-0.5"></div>
        {EXPERIENCE_DATA.map((item, index) => {
           const isRightSide = index % 2 !== 0;
           return (
             <div key={index} className={`relative flex items-center ${isRightSide ? 'md:flex-row-reverse self-end' : 'self-start'}`}>
                {/* Desktop Spacer */}
                <div className="hidden md:block w-5/12"></div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 bg-slate-900 border-2 border-cyan-500 w-6 h-6 rounded-full items-center justify-center">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                </div>

                {/* Card */}
                <div className="w-full md:w-5/12 bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-xl p-6">
                    <h3 className="mb-2 text-xl font-bold text-cyan-400">{item.role}</h3>
                    <p className="mb-3 text-sm font-medium text-gray-300">{item.company} | {item.period}</p>
                    <ul className="list-disc pl-5 mt-4 text-gray-400 text-sm space-y-1">
                        {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
             </div>
           );
        })}
      </div>
    </section>
  );
};

export default Experience;