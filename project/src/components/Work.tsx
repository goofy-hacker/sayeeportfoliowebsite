import React from 'react';
import { PROJECTS } from '../data/portfolio';
import ProjectCard from './ProjectCard';

const Work: React.FC = () => {
  return (
    <section id="projects" className="bg-black/50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-block rounded-full bg-matrix-900/30 px-4 py-1.5">
            <span className="text-matrix-400 text-sm font-typewriter">
              ~projects~
            </span>
          </div>
          
          <p className="text-lg text-matrix-300 font-typewriter">
            GRC, AI governance, and risk-focused work translating cybersecurity frameworks into real-world controls and measurable security outcomes.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;