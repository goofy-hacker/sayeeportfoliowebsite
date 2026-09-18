import React from 'react';
import { Experience } from '../data/portfolio';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="mb-8 flex gap-4 lg:gap-6">
      {/* Timeline marker */}
      <div className="relative flex flex-col items-center">
        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-matrix-500 bg-black">
          <span className="text-xs font-typewriter text-matrix-400">
            {String(experience.id).padStart(2, '0')}
          </span>
        </div>

        <div className="absolute top-10 bottom-0 w-px bg-matrix-800" />
      </div>

      {/* Content */}
      <div className="flex-1 rounded-xl bg-black/50 p-6 shadow-md transition-all duration-300 hover:shadow-lg ring-1 ring-matrix-900">
        <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <h3 className="text-lg font-typewriter text-matrix-400">
            {experience.role}
          </h3>

          <span className="text-sm font-typewriter text-matrix-500">
            {experience.period}
          </span>
        </div>

        <p className="mb-3 whitespace-pre-line text-sm font-typewriter leading-relaxed text-matrix-400">
          {experience.company}
        </p>

        <p className="leading-relaxed text-matrix-300">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;