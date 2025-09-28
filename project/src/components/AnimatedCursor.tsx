import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Type } from 'lucide-react';

const AnimatedCursor = () => {
  const [cursorType, setCursorType] = useState<'default' | 'text'>('default');
  const [isTyping, setIsTyping] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 35, stiffness: 300, mass: 0.8 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const updateCursorType = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setCursorType(target.matches('input, textarea, [contenteditable="true"]') ? 'text' : 'default');
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      setIsTyping(target.matches('input, textarea, [contenteditable="true"]'));
    };

    const handleKeyUp = () => setIsTyping(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', updateCursorType);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', updateCursorType);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        left: smoothX,
        top: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {cursorType === 'default' ? (
        <motion.div 
          className="w-4 h-4 rounded-full bg-yellow-400"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      ) : (
        <div className="relative">
          <Type className="w-5 h-5 text-green-400" strokeWidth={1.5} />
          {isTyping && (
            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
              <div className="flex gap-2">
                {[0, 0.2, 0.4].map((delay) => (
                  <motion.div
                    key={delay}
                    className="w-2 h-2 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default AnimatedCursor;