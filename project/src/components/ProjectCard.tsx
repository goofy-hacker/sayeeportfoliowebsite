import React from 'react';
import { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="h-full rounded-xl bg-black/60 p-6 shadow-sm ring-1 ring-matrix-900 transition-all duration-300 hover:-translate-y-1 hover:ring-matrix-400 hover:shadow-lg">
      <div className="mb-4">
        <p className="mb-2 text-xs font-typewriter uppercase tracking-[0.25em] text-matrix-500">
          case study
        </p>

        <h3 className="text-xl font-typewriter text-matrix-400 leading-snug">
          {project.title}
        </h3>
      </div>

      <p className="text-sm font-typewriter leading-relaxed text-matrix-300">
        {project.description}
      </p>

      <div className="mt-5">
        <p className="mb-3 text-xs font-typewriter uppercase tracking-[0.2em] text-matrix-500">
          Skills & Frameworks
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="border border-matrix-700 bg-matrix-900/20 px-2.5 py-1 text-xs font-typewriter text-matrix-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;