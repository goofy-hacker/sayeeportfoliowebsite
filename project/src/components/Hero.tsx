import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, FileDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { MatrixBackground } from './Matrixbackground';

export const Hero = memo(function Hero() {
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/documents/sayee_cv.pdf';
    link.download = 'Sayee_Bandishte_CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <MatrixBackground />
      
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-full lg:w-1/2 flex justify-center glitch-parent"
            >
              <div className="relative max-w-md w-full">
                <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full" />
                
                <motion.div
                  className="relative z-10 rounded-lg overflow-hidden shadow-xl border-2 border-green-500/30 hover:border-green-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/images/documents/sayee_portfolio_image.jpg"
                    alt="Sayee Bandishte"
                    className="w-full h-auto aspect-square object-cover glitch-image"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="max-w-2xl space-y-6 md:space-y-8 relative">
                <h1 className="flex flex-col gap-3">
                  <span className="text-3xl md:text-4xl font-light text-green-400 font-mono">Hi</span>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-4xl md:text-5xl font-mono">I'm</span>
                    <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 glitch-text font-typewriter">
                      Sayee
                    </span>
                    <motion.span
                      animate={{ rotate: [0, 20, 0], y: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      className="text-4xl inline-flex"
                    >
                      👋
                    </motion.span>
                  </div>
                </h1>

                <div className="text-2xl md:text-3xl text-green-300 h-14 md:h-16 font-typewriter flex items-center justify-center lg:justify-start">
                  <span className="text-green-500 mr-2 hidden md:inline">&gt;</span>
                  <Typewriter
                    options={{
                      strings: [
                        'Cybersecurity Specialist',
                        'AI Security Researcher',
                        'Penetration Tester',
                        'Security Tool Developer',
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                      delay: 70,
                      cursor: '█',
                      cursorClassName: 'text-green-500'
                    }}
                  />
                </div>

                <p className="text-green-300 leading-relaxed md:leading-loose text-lg md:text-xl font-typewriter max-w-[90%] mx-auto lg:mx-0">
                  Welcome to my cyber fortress — where ethical hacking meets AI-driven defense. I hunt threats, build exploit-proof systems, and turn vulnerabilities into strategic wins. Let's secure the future, one breach at a time.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <motion.button
                    onClick={() => navigate('/terminal')}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-none transition-all w-full sm:w-auto glitch-button font-typewriter text-lg"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Terminal className="w-5 h-5" />
                    <span>Terminal Mode</span>
                  </motion.button>

                  <motion.button
                    onClick={handleDownloadCV}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 rounded-none transition-all w-full sm:w-auto font-typewriter text-lg"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileDown className="w-5 h-5" />
                    <span>Download CV</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Hero;