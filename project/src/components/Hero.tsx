import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, FileDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { MatrixBackground } from './Matrixbackground';

export const Hero = memo(function Hero() {
  const navigate = useNavigate();

  const profileImagePath = `${import.meta.env.BASE_URL}images/documents/sayee_portfolio_image.jpg`;
  const resumePath = `${import.meta.env.BASE_URL}images/documents/SayeeBandishte_GRCResume.pdf`;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Sayee_Bandishte_GRC_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <MatrixBackground />

      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
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
                  className="relative z-10 rounded-lg overflow-hidden shadow-xl border-2 border-green-500/30 hover:border-green-400/50 transition-all duration-300 bg-black/40"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={profileImagePath}
                    alt="Sayee Bandishte"
                    className="w-full aspect-square object-cover glitch-image"
                    loading="eager"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
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

                {/* Name */}
                <h1 className="flex flex-col gap-3">
                  <span className="text-2xl md:text-3xl font-light text-green-400 font-typewriter">
                    Hi
                  </span>

                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-3xl md:text-4xl font-typewriter">
                      I'm
                    </span>

                    <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 glitch-text font-typewriter">
                      Sayee
                    </span>

                    <motion.span
                      animate={{ rotate: [0, 20, 0], y: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      className="text-3xl inline-flex"
                    >
                      👋
                    </motion.span>
                  </div>
                </h1>

                {/* Roles */}
                <div className="text-xl md:text-2xl text-green-300 h-12 md:h-14 font-typewriter flex items-center justify-center lg:justify-start">
                  <span className="text-green-500 mr-2 hidden md:inline">&gt;</span>

                  <Typewriter
                    options={{
                      strings: [
                        'Cybersecurity GRC Analyst',
                        'AI Governance & Risk Specialist',
                        'Security Compliance Strategist',
                        'Critical Infrastructure Risk Analyst',
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                      delay: 70,
                      cursor: '█',
                      cursorClassName: 'text-green-500',
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-green-300 leading-relaxed md:leading-relaxed text-base md:text-lg font-typewriter max-w-[85%] mx-auto lg:mx-0">
                  I help organizations translate cybersecurity, AI, and regulatory risk into clear governance decisions, audit-ready controls, and measurable security improvements. My work focuses on GRC, third-party risk, AI governance, and critical infrastructure security, using frameworks such as NIST CSF 2.0, NIST 800-53, NIST AI RMF, ISO 27001, COBIT, and DOE/NARUC guidance to align technical controls with business and compliance priorities.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">

                  <motion.button
                    onClick={() => navigate('/terminal')}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-none transition-all w-full sm:w-auto glitch-button font-typewriter text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Terminal size={16} />
                    <span>Terminal Mode</span>
                  </motion.button>

                  <motion.button
                    onClick={handleDownloadCV}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 rounded-none transition-all w-full sm:w-auto font-typewriter text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileDown size={16} />
                    <span>Download Resume</span>
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