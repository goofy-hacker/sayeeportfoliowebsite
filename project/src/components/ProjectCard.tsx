import React from 'react';
import { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative h-80 w-full overflow-hidden rounded-xl bg-black/50 shadow-md transition-all duration-300 hover:shadow-xl ring-1 ring-matrix-900">
      {/* Project Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-matrix-900/40 opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-matrix-400">
        <h3 className="mb-2 text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="mb-3 line-clamp-2 text-sm text-matrix-300">{project.description}</p>
        
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-matrix-900/30 px-2.5 py-0.5 text-xs text-matrix-400 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        
        {/* View Project Button */}
        <a 
          href={project.link || '#'} 
          className="transform rounded-full bg-matrix-500 px-4 py-2 text-center text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:bg-matrix-400"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;