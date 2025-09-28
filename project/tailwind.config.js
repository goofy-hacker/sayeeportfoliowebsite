/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{cjs,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matrix: {
          50: '#f0fff0',
          100: '#dcffe4',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#0c4a2a',
          950: '#052e16',
          DEFAULT: '#00ff41',
          text: '#00ff41',
          cursor: '#00ff41',
          selection: '#00ff4140'
        },
        terminal: {
          bg: '#0d0f12',
          text: '#00ff41',
          cursor: '#00ff41',
          selection: '#00ff4140'
        }
      },
      fontFamily: {
        mono: [
          '"Share Tech Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
        terminal: ['"Share Tech Mono"', 'monospace'],
        typewriter: [
          '"Courier Prime"',
          'Courier',
          '"Courier New"',
          'monospace'
        ]
      },
      letterSpacing: {
        typewriter: '0.15em',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite alternate',
        'terminal-cursor': 'terminal-cursor 1s step-end infinite',
        'hacker-flicker': 'hacker-flicker 0.01s ease-in-out infinite alternate',
        'glitch': 'glitch 1s linear infinite',
        'glitch-text': 'glitch-text 1s linear infinite',
        'matrix-rain': 'matrix-rain 5s linear infinite',
        'typewriter': 'typewriter 4s steps(40) 1s forwards',
        'typewriter-blink': 'typewriter 4s steps(40) 1s forwards, blink-caret 0.75s step-end infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'text-glow': {
          '0%': { 'text-shadow': '0 0 5px rgba(0, 255, 65, 0.5)' },
          '100%': { 'text-shadow': '0 0 20px rgba(0, 255, 65, 0.9)' }
        },
        'terminal-cursor': {
          'from, to': { opacity: '0' },
          '50%': { opacity: '1' }
        },
        'hacker-flicker': {
          '0%': { opacity: '0.8' },
          '10%': { opacity: '0.9' },
          '20%': { opacity: '0.7' },
          '30%': { opacity: '1' },
          '40%': { opacity: '0.85' },
          '50%': { opacity: '0.95' },
          '60%': { opacity: '0.75' },
          '70%': { opacity: '0.9' },
          '80%': { opacity: '0.8' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0.9' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' }
        },
        'glitch-text': {
          '0%': { textShadow: '2px 0 #ff00ff, -2px 0 #00ffff' },
          '25%': { textShadow: '-2px 0 #ff00ff, 2px 0 #00ffff' },
          '50%': { textShadow: '2px 0 #ffff00, -2px 0 #ff00ff' },
          '75%': { textShadow: '-2px 0 #ffff00, 2px 0 #00ffff' },
          '100%': { textShadow: '2px 0 #00ffff, -2px 0 #ff00ff' }
        },
        'matrix-rain': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100vh' }
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-right-color': 'transparent' },
          '50%': { 'border-right-color': '#00ff41' }
        }
      },
      boxShadow: {
        'matrix': '0 0 15px rgba(0, 255, 65, 0.3)',
        'matrix-lg': '0 0 30px rgba(0, 255, 65, 0.5)',
        'terminal': '0 0 20px rgba(0, 255, 65, 0.7)'
      },
      backgroundImage: {
        'matrix-pattern': `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff41' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }
    },
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      addUtilities({
        '.text-matrix-glow': {
          'text-shadow': '0 0 10px rgba(0, 255, 65, 0.7)'
        },
        '.terminal-scrollbar': {
          'scrollbar-color': '#00ff41 #0d0f12',
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '6px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#0d0f12'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#00ff41',
            'border-radius': '3px'
          }
        },
        '.matrix-text': {
          'background-image': 'linear-gradient(to right, #00ff41, #00dd39, #00bb31)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
          'animation': 'text-glow 2s ease-in-out infinite alternate'
        },
        '.typewriter-effect': {
          'overflow': 'hidden',
          'border-right': '0.15em solid #00ff41',
          'white-space': 'nowrap',
          'margin': '0 auto',
          'letter-spacing': '0.15em',
          'animation': 'typewriter-blink'
        },
        '.typewriter-cursor': {
          'display': 'inline-block',
          'width': '0.15em',
          'height': '1em',
          'background': '#00ff41',
          'animation': 'blink-caret 0.75s step-end infinite',
          'margin-left': '0.1em'
        }
      });

      addComponents({
        '.terminal-window': {
          backgroundColor: '#0d0f12',
          border: '1px solid #00ff41',
          boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
          color: '#00ff41',
          fontFamily: '"Share Tech Mono", monospace',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(rgba(0, 255, 65, 0.1), rgba(0, 255, 65, 0.05))',
            pointerEvents: 'none'
          }
        },
        '.matrix-bg': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            backgroundImage: 'var(--tw-gradient-stops)',
            backgroundSize: '400% 400%',
            animation: 'matrix-rain 5s linear infinite',
            opacity: '0.1',
            pointerEvents: 'none'
          }
        },
        '.typewriter-paper': {
          backgroundColor: '#f5f5f5',
          backgroundImage: 'linear-gradient(#eee 0.1em, transparent 0.1em)',
          backgroundSize: '100% 1.2em',
          fontFamily: '"Courier Prime", monospace',
          lineHeight: '1.2em',
          textAlign: 'left',
          padding: '2em',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '30px',
            height: '100%',
            width: '2px',
            background: 'rgba(255,0,0,0.4)'
          }
        }
      });
    }
  ],
};