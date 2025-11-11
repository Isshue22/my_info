import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 group">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-700/50 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 font-semibold transition-colors">
            View Project
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 font-semibold transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;