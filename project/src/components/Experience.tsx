import React, { useState, useEffect } from 'react';
import { EXPERIENCES } from '../data/portfolio';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Professional Journey";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Reset animation when component mounts
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, []);

  return (
    <section id="work" className="bg-black/50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-block rounded-full bg-matrix-900/30 px-4 py-1.5">
            <span className="text-matrix-400 text-sm font-typewriter">
              ~my experience~
            </span>
          </div>
          
          <h2 className="mb-4 text-3xl font-typewriter text-matrix-400 md:text-4xl">
            <span className="typewriter-text">{displayedText}</span>
            <span className="typewriter-cursor">|</span>
          </h2>
          
          <p className="text-lg text-matrix-300">
            A timeline of my professional experience and career milestones.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="mx-auto max-w-3xl">
          {EXPERIENCES.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;