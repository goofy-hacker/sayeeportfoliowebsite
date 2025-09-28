import React from 'react';
import { Experience } from '../data/portfolio';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="mb-8 flex gap-4 lg:gap-6">
      {/* Timeline circle and line */}
      <div className="relative flex flex-col items-center">
        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-matrix-500 shadow-lg">
          <span className="text-xs font-typewriter text-black">{experience.id}</span>
        </div>
        <div className="absolute top-10 bottom-0 w-0.5 bg-gradient-to-b from-matrix-500 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="flex-1 rounded-xl bg-black/50 p-6 shadow-md transition-all duration-300 hover:shadow-lg ring-1 ring-matrix-900">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-lg font-typewriter text-matrix-400">{experience.role}</h3>
          <span className="text-sm font-typewriter text-matrix-500">{experience.period}</span>
        </div>
        <p className="mb-3 text-sm font-typewriter text-matrix-400">{experience.company}</p>
        <p className="text-matrix-300">{experience.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;