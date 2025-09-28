import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 200) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the section that is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      
      // If we're at the top of the page, set the first section as active
      if (scrollPosition < offset) {
        setActiveSection(sectionIds[0]);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}