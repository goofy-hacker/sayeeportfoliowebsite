import { useState, useRef, useEffect, lazy, Suspense, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, X, Maximize2, Minimize2 } from 'lucide-react';

// Define the CommandOutput type
type CommandOutput = {
  type: 'input' | 'output' | 'ascii' | 'error' | 'success' | 'form';
  content: React.ReactNode;
};

// Note: Make sure the file casing matches your actual file name
const MatrixBackground = lazy(() => import('./Matrixbackground').then(module => ({ default: module.MatrixBackground })));

const TERMINAL_VERSION = '1.2.0';

// Helper function to wrap text and calculate proper box dimensions
const wrapText = (text: string, maxWidth: number = 60): string[] => {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';
  
  for (const word of words) {
    if ((currentLine + word).length <= maxWidth) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  
  return lines;
};

const createBox = (title: string, content: string[], maxWidth: number = 60): string => {
  const wrappedContent: string[] = [];
  
  content.forEach(line => {
    if (line.length <= maxWidth) {
      wrappedContent.push(line);
    } else {
      wrappedContent.push(...wrapText(line, maxWidth));
    }
  });
  
  // Find the longest content line and add extra padding
  const maxContentLength = Math.max(...wrappedContent.map(line => line.length));
  const extraPadding = 8; // Add extra space for better readability
  const boxWidth = maxContentLength + extraPadding;
  
  const top = `╭─ ${title} ${'─'.repeat(boxWidth - `╭─ ${title} `.length - 1)}╮`;
  const bottom = `╰${'─'.repeat(boxWidth - 2)}╯`;
  
  const lines = [
    top,
    `│${' '.repeat(boxWidth - 2)}│`
  ];
  
  // Add content lines with extra padding for better fit
  wrappedContent.forEach(line => {
    lines.push(`│  ${line}${' '.repeat(boxWidth - line.length - 4)} │`);
  });
  
  lines.push(
    `│${' '.repeat(boxWidth - 2)}│`,
    bottom
  );
  
  return lines.join('\n');
};

// Custom ASCII Art Banner for Sayee
const titleBanner = `
.d8888b.                                      
d88P  Y88b                                     
Y88b.                                          
 "Y888b.    8888b.  888  888  .d88b.   .d88b.  
    "Y88b.     "88b 888  888 d8P  Y8b d8P  Y8b 
      "888 .d888888 888  888 88888888 88888888 
Y88b  d88P 888  888 Y88b 888 Y8b.     Y8b.     
 "Y8888P"  "Y888888  "Y88888  "Y8888   "Y8888  
                         888                   
                    Y8b d88P                   
                     "Y88P"                    
`;

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
];

// Your Data
const PROJECTS = [
  {
    id: 1,
    title: "Secure Auth System",
    description: "Implemented a zero-trust authentication system with multi-factor authentication, JWT tokens, and role-based access control.",
    tags: ["OAuth 2.0", "JWT", "Zero Trust", "MFA"],
    link: "#",
  },
  {
    id: 2,
    title: "CTF Platform",
    description: "Developed a Capture The Flag platform featuring various categories including web exploitation, cryptography, and reverse engineering.",
    tags: ["CTF", "Pentest", "Docker", "WebSec"],
    link: "#",
  },
  {
    id: 3,
    title: "Threat Detection System",
    description: "Built an AI-powered threat detection system using machine learning to identify and respond to potential security breaches.",
    tags: ["ML", "SIEM", "Python", "TensorFlow"],
    link: "#",
  }
];

const SKILLS = [
  { name: "Penetration Testing", level: 5, category: "offensive" },
  { name: "Network Security", level: 4, category: "defensive" },
  { name: "Cryptography", level: 4, category: "tools" },
  { name: "Malware Analysis", level: 5, category: "offensive" },
  { name: "Incident Response", level: 3, category: "defensive" }
];

const EXPERIENCES = [
  {
    id: 1,
    role: "Technical Administrator Intern",
    company: "McKenzie Adams Financial Services",
    period: "Present",
    description: "Managed Microsoft 365/Azure AD security controls & Salesforce CRM hygiene, ensuring compliance with NIST/ISO 27001. Automated workflows using Power Automate and deployed Microsoft Copilot to enhance operational efficiency. Supported cloud security initiatives, applying IAM principles and AI-driven threat monitoring for financial systems."
  },
  {
    id: 2,
    role: "Information Technology Assistant",
    company: "UMBC Department of IT",
    period: "Present",
    description: "Developed cybersecurity regulations for energy grids with Maryland PSC, integrating Zero Trust and AI-driven threat detection. Conducted risk assessments for critical infrastructure (DERs, water systems) and drafted incident response protocols. Researched & proposed policy frameworks to mitigate supply chain vulnerabilities in distributed energy resources."
  },
  {
    id: 3,
    role: "Cyber Threat Intelligence Intern",
    company: "Cybertection",
    period: "April 2025 - Present",
    description: "Conducted OSINT-based threat hunting using SpiderFoot, cutting IOC detection time by 40% through dark web monitoring. Built Python/Splunk automation to process 500+ daily alerts."
  },
  {
    id: 4,
    role: "Graduate Intern",
    company: "GradSec - University of Maryland Baltimore County",
    period: "April 2025 - Present",
    description: "Built and maintained GradSec's website and Discord bots using Python/JavaScript. Managed secure deployment on AWS."
  }
];

const ABOUT = {
  name: "Sayee",
  title: "Cybersecurity Engineer and Enthusiast",
  description: "Cybersecurity Specialist & AI Security Researcher",
  longDescription: "I'm a security specialist skilled in threat intelligence, vulnerability assessment, and secure AI systems, with hands-on expertise in tools like Burp Suite and Metasploit, plus programming in Python. Certified by Cisco, PwC, and Mastercard, I specialize in penetration testing and developing AI-powered security solutions."
};

export function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<CommandOutput[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobileKeyboardOpen, setIsMobileKeyboardOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const terminalContentRef = useRef<HTMLDivElement>(null);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOutput([
        { 
          type: 'ascii', 
          content: (
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-8">
              <pre className="text-green-400 text-[8px] xs:text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre font-bold glitch-text hidden sm:block">
                {titleBanner}
              </pre>
              <h1 className="text-green-400 text-xl sm:text-2xl md:text-3xl font-bold sm:hidden text-center">
                {`Terminal v${TERMINAL_VERSION}`}
              </h1>
            </div>
          )
        }
      ]);

      if (!hasInitializedRef.current) {
        hasInitializedRef.current = true;
        const steps = [
          'msf exploit(linux/ssh/libssh_auth_bypass) > exploit',
          '[*] Started reverse TCP handler on 10.10.14.1:4444',
          '[*] Attempting to bypass authentication...',
          '[*] Exploit successful, sending payload...',
          '[*] Meterpreter session 1 opened (10.10.14.1:4444 -> 10.10.14.22:58342)',
          'meterpreter > shell'
        ];

        setIsTyping(true);
        setOutput(prev => [...prev, { 
          type: 'output',
          content: (
            <div className="text-gray-300">
              {steps.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          )
        }]);
        setTimeout(() => setIsTyping(false), 2000);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getAboutData = () => {
    const title = ABOUT.title;
    const descLines = ABOUT.longDescription.split('. ').map(line => line.trim());
    const content = [title, ...descLines];
    return createBox('About Sayee', content);
  };

  const getProjectsData = () => {
    return PROJECTS.map(proj => {
      const desc = proj.description;
      const tags = `Tags: ${proj.tags.join(', ')}`;
      const link = proj.link ? `Link: ${proj.link}` : '';
      const content = [desc, tags, link].filter(l => l);
      return createBox(proj.title, content) + '\n';
    }).join('\n');
  };

  const getExperienceData = () => {
    return EXPERIENCES.map(exp => {
      const role = `Role: ${exp.role}`;
      const period = `Period: ${exp.period}`;
      const descLines = exp.description.split('. ').map(line => `› ${line.trim()}`);
      const content = [role, period, ...descLines];
      return createBox(exp.company, content) + '\n';
    }).join('\n');
  };

  const getSkillsData = () => {
    const contentLines = SKILLS.map(skill =>
      `${skill.name.padEnd(20)} ${'■'.repeat(skill.level)}${'□'.repeat(5 - skill.level)}`
    );
    return createBox('Technical Skills', contentLines);
  };

  const getContactData = () => {
    const contactLines = [
      'Email: phantom.techsec@gmail.com',
      'GitHub: github.com/yourusername',
      '',
      'For secure communication:',
      'Use PGP key from main portfolio',
      ''
    ];
    return createBox('Contact Sayee', contactLines);
  };

  const commands = useMemo(
    () => [
      {
        name: 'about',
        description: 'Display information about Sayee',
        action: () => {
          setIsTyping(true);
          setOutput(prev => [...prev, {
            type: 'output',
            content: (
              <div className="text-gray-300 whitespace-pre-wrap">
                {getAboutData()}
              </div>
            )
          }]);
          setTimeout(() => setIsTyping(false), 500);
        }
      },
      {
        name: 'projects',
        description: 'List cybersecurity projects',
        action: () => {
          setIsTyping(true);
          setOutput(prev => [...prev, {
            type: 'output',
            content: (
              <div className="text-gray-300 whitespace-pre-wrap">
                {getProjectsData()}
              </div>
            )
          }]);
          setTimeout(() => setIsTyping(false), 500);
        }
      },
      {
        name: 'experience',
        description: 'Show professional experience',
        action: () => {
          setIsTyping(true);
          setOutput(prev => [...prev, {
            type: 'output',
            content: (
              <div className="text-gray-300 whitespace-pre-wrap">
                {getExperienceData()}
              </div>
            )
          }]);
          setTimeout(() => setIsTyping(false), 500);
        }
      },
      {
        name: 'skills',
        description: 'Display technical skills',
        action: () => {
          setIsTyping(true);
          setOutput(prev => [...prev, {
            type: 'output',
            content: (
              <div className="text-gray-300 whitespace-pre-wrap">
                {getSkillsData()}
              </div>
            )
          }]);
          setTimeout(() => setIsTyping(false), 500);
        }
      },
      {
        name: 'contact',
        description: 'Show contact information',
        action: () => {
          setIsTyping(true);
          setOutput(prev => [...prev, {
            type: 'output',
            content: (
              <div className="text-gray-300 whitespace-pre-wrap">
                {getContactData()}
              </div>
            )
          }]);
          setTimeout(() => setIsTyping(false), 500);
        }
      },
      {
        name: 'clear',
        description: 'Clear the terminal',
        action: () => {
          setOutput([]);
        }
      },
      {
        name: 'help',
        description: 'List available commands',
        action: () => {
          setIsTyping(true);
          const contentLines = commands.map(cmd => `${cmd.name.padEnd(15)} ${cmd.description}`);
          const maxLength = Math.max(...contentLines.map(line => line.length));
          const width = maxLength + 4;
          const top = `╭─ Available Commands ${'─'.repeat(width - '╭─ Available Commands '.length - 1)}╮`;
          const bottom = `╰${'─'.repeat(width - 2)}╯`;
          const content = [
            top,
            `│${' '.repeat(width - 2)}│`,
            ...contentLines.map(line => `│  ${line.padEnd(maxLength)} │`),
            bottom
          ].join('\n');
          setOutput(prev => [...prev, {
            type: 'output',
            content: (
              <div className="text-gray-300 whitespace-pre-wrap">
                {content}
              </div>
            )
          }]);
          setTimeout(() => setIsTyping(false), 500);
        }
      }
    ],
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsTyping(true);
    setOutput(prev => [...prev, { 
      type: 'input', 
      content: (
        <div className="text-green-400">
          sayee@portfolio:~$ {input}
        </div>
      )
    }]);
    
    const args = input.trim().split(' ');
    const command = args[0].toLowerCase();
    const foundCommand = commands.find(c => c.name === command);
    
    if (foundCommand) {
      foundCommand.action();
    } else {
      setOutput(prev => [...prev, {
        type: 'error',
        content: (
          <div className="text-red-400">
            Command not found: {command}. Type 'help' for available commands.
          </div>
        )
      }]);
      setIsTyping(false);
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] flex items-center justify-center p-2 sm:p-4 relative overflow-hidden cursor-default">
      <Suspense fallback={null}>
        <MatrixBackground />
      </Suspense>
      
      <div className={`w-full bg-[rgba(var(--bg-rgb),0.8)] border border-green-500/20 backdrop-blur-sm relative z-10 flex flex-col ${
        isMaximized ? 'fixed inset-0 m-0 max-w-none h-full rounded-none' : 'max-w-6xl rounded-lg'
      }`}>
        <div className="flex items-center justify-between p-2 bg-[rgba(var(--bg-rgb),0.5)] border-b border-green-500/20">
          <div className="flex items-center gap-2">
            <button
              aria-label="Close terminal"
              onClick={() => navigate('/')}
              className="group w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center rounded-full bg-red-500/50 hover:bg-red-500"
            >
              <X className="w-2 h-2 text-black opacity-75 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </button>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500/50" />
            <button
              aria-label={isMaximized ? 'Restore terminal' : 'Maximize terminal'}
              onClick={() => setIsMaximized(v => !v)}
              className="group w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center rounded-full bg-green-500/50 hover:bg-green-500"
            >
              {isMaximized ? (
                <Minimize2 className="w-2 h-2 text-black opacity-75 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              ) : (
                <Maximize2 className="w-2 h-2 text-black opacity-75 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-[10px] sm:text-xs text-gray-500">{`v${TERMINAL_VERSION}`}</span>
            <span className="text-[10px] sm:text-xs text-gray-500">sayee@portfolio:~</span>
          </div>
        </div>

        <div
          ref={terminalContentRef}
          className="flex-1 h-[60vh] sm:h-[70vh] md:h-[calc(100vh-12rem)] md:max-h-[700px] p-3 sm:p-6 font-typewriter text-xs sm:text-sm overflow-y-auto custom-scrollbar"
          onClick={() => inputRef.current?.focus()}
          style={{
            height: isMobileKeyboardOpen ? '40vh' : undefined
          }}
        >
          {output.map((line, i) => (
            <div
              key={i}
              className={`${
                line.type === 'input' 
                  ? 'text-green-400' 
                  : line.type === 'ascii' 
                  ? ''
                  : line.type === 'error'
                  ? 'text-red-400'
                  : line.type === 'success'
                  ? 'text-green-400'
                  : 'text-gray-300'
              } whitespace-pre-wrap mb-4 matrix-text break-words`}
            >
              {line.content}
            </div>
          ))}

          {!isTyping && (
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-green-400 text-xs sm:text-sm whitespace-nowrap">sayee@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                onFocus={() => setIsMobileKeyboardOpen(true)}
                onBlur={() => setIsMobileKeyboardOpen(false)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-[rgb(var(--text-rgb))] caret-green-500 text-xs sm:text-sm w-full"
                autoFocus
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </form>
          )}
        </div>

        <div className="p-2 border-t border-green-500/20 bg-[rgba(var(--bg-rgb),0.5)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-400 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500">
              Type <span className="rainbow-text font-bold">'help'</span> for commands
            </span>
          </div>
        </div>

        <div className="scan-lines hidden sm:block" />
      </div>
    </div>
  );
}

export default Terminal;