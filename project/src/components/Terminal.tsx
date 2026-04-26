import { useState, useRef, useEffect, lazy, Suspense, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Maximize2, Minimize2 } from 'lucide-react';

type CommandOutput = {
  type: 'input' | 'output' | 'ascii' | 'error' | 'success';
  content: React.ReactNode;
};

const MatrixBackground = lazy(() =>
  import('./Matrixbackground').then((module) => ({ default: module.MatrixBackground }))
);

const TERMINAL_VERSION = '1.2.0';

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

const wrapText = (text: string, maxWidth: number = 66): string[] => {
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

const createBox = (title: string, content: string[], maxWidth: number = 66): string => {
  const wrappedContent: string[] = [];

  content.forEach((line) => {
    if (line.length <= maxWidth) {
      wrappedContent.push(line);
    } else {
      wrappedContent.push(...wrapText(line, maxWidth));
    }
  });

  const maxContentLength = Math.max(...wrappedContent.map((line) => line.length), title.length);
  const boxWidth = maxContentLength + 8;

  const top = `╭─ ${title} ${'─'.repeat(Math.max(0, boxWidth - title.length - 6))}╮`;
  const bottom = `╰${'─'.repeat(boxWidth - 2)}╯`;

  const lines = [top, `│${' '.repeat(boxWidth - 2)}│`];

  wrappedContent.forEach((line) => {
    lines.push(`│  ${line}${' '.repeat(Math.max(0, boxWidth - line.length - 4))} │`);
  });

  lines.push(`│${' '.repeat(boxWidth - 2)}│`, bottom);

  return lines.join('\n');
};

const PROJECTS = [
  {
    title: 'AI Governance Risk Assessment',
    description:
      'Developed an AI governance risk assessment using NIST AI RMF, NIST CSF 2.0, and ISO 27001. Identified AI-specific risks and defined audit-ready controls for bias, data protection, and third-party vendor risk.',
    tags: ['NIST AI RMF', 'ISO 27001', 'NIST CSF 2.0', 'GRC'],
  },
  {
    title: 'DER Cybersecurity Audit Program',
    description:
      'Designed a risk-based audit program for 200+ Distributed Energy Resources and Virtual Power Plants, incorporating COBIT-aligned control objectives and DOE/NARUC cybersecurity baselines.',
    tags: ['COBIT', 'NIST 800-53', 'Critical Infrastructure', 'Audit'],
  },
  {
    title: 'Threat Intelligence Automation',
    description:
      'Built Python and Splunk automation to triage and enrich 500+ daily security alerts. Produced MITRE ATT&CK-mapped reports on ransomware and phishing campaigns.',
    tags: ['Python', 'Splunk', 'MITRE ATT&CK', 'OSINT'],
  },
  {
    title: 'M365 Compliance Automation',
    description:
      'Designed 15+ compliance automation workflows using Power Automate and Microsoft Copilot to support access review tracking, evidence collection, and control status reporting.',
    tags: ['Power Automate', 'Azure AD', 'RBAC', 'Zero Trust'],
  },
];

const SKILLS = [
  { name: 'NIST CSF 2.0 / 800-53', level: 5 },
  { name: 'ISO/IEC 27001', level: 5 },
  { name: 'Third-Party Risk', level: 5 },
  { name: 'Audit Program Design', level: 4 },
  { name: 'Risk Quantification', level: 4 },
  { name: 'Zero Trust / IAM', level: 4 },
  { name: 'Azure AD / M365 Security', level: 4 },
  { name: 'MITRE ATT&CK', level: 4 },
  { name: 'Python / Splunk', level: 4 },
  { name: 'Threat Intelligence', level: 4 },
  { name: 'Incident Response', level: 3 },
  { name: 'COBIT / DOE/NARUC', level: 4 },
];

const EXPERIENCES = [
  {
    role: 'Cybersecurity GRC Analyst Intern',
    company: 'DoIT – Maryland Public Service Commission',
    period: 'Aug 2025 – Present',
    description:
      'Supporting statewide cybersecurity governance and regulatory oversight for 200+ DERs, VPPs, and DER Aggregators. Led third-party vendor risk assessments, conducted NIST SP 800-30 risk assessments identifying 12+ high-risk control gaps, and designed components of a COBIT-aligned audit program.',
  },
  {
    role: 'Technical Administrator',
    company: 'McKenzie Adams Financial Services',
    period: 'Jul 2025 – Nov 2025',
    description:
      'Administered Microsoft 365 and Azure AD security controls for 150+ users, aligned with NIST CSF, ISO/IEC 27001 Annex A, and COBIT. Executed RBAC validation and designed compliance automation workflows reducing manual effort by 10+ hours per week.',
  },
  {
    role: 'Cyber Threat Intelligence Intern',
    company: 'Cybertection',
    period: 'Mar 2025 – Jun 2025',
    description:
      'Conducted OSINT and dark-web threat hunting using SpiderFoot. Built Python and Splunk automation to triage 500+ daily alerts and produced MITRE ATT&CK-mapped reports on ransomware and phishing campaigns.',
  },
];

const ABOUT = {
  title: 'GRC & Cybersecurity Specialist',
  education: 'MS Cybersecurity, University of Maryland — GPA 4.0',
  description:
    'I specialize in cybersecurity governance, third-party risk, audit readiness, and critical infrastructure security. My work focuses on turning complex compliance requirements into clear, measurable, and audit-ready controls.',
};

export function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<CommandOutput[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobileKeyboardOpen, setIsMobileKeyboardOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const printOutput = (content: React.ReactNode, type: CommandOutput['type'] = 'output') => {
    setOutput((prev) => [...prev, { type, content }]);
  };

  const showHelp = () => {
    const helpText = createBox('Available Commands', [
      'about       Display a short profile summary',
      'experience  Show professional experience',
      'projects    Show cybersecurity and GRC projects',
      'skills      Display technical skills',
      'certs       Show certifications',
      'contact     Show contact information',
      'clear       Clear the terminal',
      '',
      'Tip: type a command and press Enter.',
    ]);

    printOutput(<div className="text-gray-300 whitespace-pre-wrap">{helpText}</div>);
  };

  useEffect(() => {
    setOutput([
      {
        type: 'ascii',
        content: (
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-8">
            <pre className="text-green-400 text-[8px] xs:text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre font-bold hidden sm:block">
              {titleBanner}
            </pre>
            <h1 className="text-green-400 text-xl sm:text-2xl md:text-3xl font-bold sm:hidden text-center">
              Terminal v{TERMINAL_VERSION}
            </h1>
          </div>
        ),
      },
      {
        type: 'success',
        content: (
          <div className="text-green-400 whitespace-pre-wrap">
            {createBox('Access Granted', [
              'Welcome to the terminal mode.',
              'Type help to see available commands.',
            ])}
          </div>
        ),
      },
    ]);

    const timer = setTimeout(() => {
      showHelp();
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    terminalContentRef.current?.scrollTo({
      top: terminalContentRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [output, isTyping]);

  const getAboutData = () =>
    createBox('About Sayee', [
      ABOUT.title,
      ABOUT.education,
      '',
      ABOUT.description,
    ]);

  const getProjectsData = () =>
    PROJECTS.map((project) =>
      createBox(project.title, [
        project.description,
        '',
        `Tags: ${project.tags.join(', ')}`,
      ])
    ).join('\n\n');

  const getExperienceData = () =>
    EXPERIENCES.map((experience) =>
      createBox(experience.company, [
        `Role: ${experience.role}`,
        `Period: ${experience.period}`,
        '',
        experience.description,
      ])
    ).join('\n\n');

  const getSkillsData = () =>
    createBox(
      'Technical Skills',
      SKILLS.map(
        (skill) =>
          `${skill.name.padEnd(30)} ${'■'.repeat(skill.level)}${'□'.repeat(5 - skill.level)}`
      )
    );

  const getCertsData = () =>
    createBox('Certifications', [
      'Google Cybersecurity Professional Certificate',
      'Cisco Cyber Threat Management',
      'Cisco Endpoint Security',
      'MITx Cybersecurity for Critical Urban Infrastructure',
      
    ]);

  const getContactData = () =>
    createBox('Contact Sayee :', [
      'Email:    sayeeb1@umbc.edu',
      'Phone:    +1 (667) 802-9890',
      'Location: United States',
      '',
      'GitHub:   github.com/goofy-hacker',
      'LinkedIn: linkedin.com/in/sayee-bandishte-5a697b207',
    ]);

  const commands = useMemo(
    () => ({
      about: () => printOutput(<div className="text-gray-300 whitespace-pre-wrap">{getAboutData()}</div>),
      experience: () =>
        printOutput(<div className="text-gray-300 whitespace-pre-wrap">{getExperienceData()}</div>),
      projects: () =>
        printOutput(<div className="text-gray-300 whitespace-pre-wrap">{getProjectsData()}</div>),
      skills: () => printOutput(<div className="text-gray-300 whitespace-pre-wrap">{getSkillsData()}</div>),
      certs: () => printOutput(<div className="text-gray-300 whitespace-pre-wrap">{getCertsData()}</div>),
      contact: () =>
        printOutput(<div className="text-gray-300 whitespace-pre-wrap">{getContactData()}</div>),
      help: showHelp,
      clear: () => setOutput([]),
    }),
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) return;

    printOutput(
      <div className="text-green-400">sayee@portfolio:~$ {command}</div>,
      'input'
    );

    setIsTyping(true);

    setTimeout(() => {
      if (command in commands) {
        commands[command as keyof typeof commands]();
      } else {
        printOutput(
          <div className="text-red-400">
            Command not found: {command}. Type <span className="font-bold">help</span> for available commands.
          </div>,
          'error'
        );
      }

      setIsTyping(false);
    }, 250);

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

      <div
        className={`w-full bg-[rgba(var(--bg-rgb),0.8)] border border-green-500/20 backdrop-blur-sm relative z-10 flex flex-col ${
          isMaximized ? 'fixed inset-0 m-0 max-w-none h-full rounded-none' : 'max-w-6xl rounded-lg'
        }`}
      >
        <div className="flex items-center justify-between p-2 bg-[rgba(var(--bg-rgb),0.5)] border-b border-green-500/20">
          <div className="flex items-center gap-2">
            <button
              aria-label="Close terminal"
              onClick={() => navigate('/')}
              className="group w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center rounded-full bg-red-500/50 hover:bg-red-500"
            >
              <X className="w-2 h-2 text-black opacity-75 group-hover:opacity-100 transition-opacity" />
            </button>

            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500/50" />

            <button
              aria-label={isMaximized ? 'Restore terminal' : 'Maximize terminal'}
              onClick={() => setIsMaximized((value) => !value)}
              className="group w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center rounded-full bg-green-500/50 hover:bg-green-500"
            >
              {isMaximized ? (
                <Minimize2 className="w-2 h-2 text-black opacity-75 group-hover:opacity-100 transition-opacity" />
              ) : (
                <Maximize2 className="w-2 h-2 text-black opacity-75 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-[10px] sm:text-xs text-gray-500">v{TERMINAL_VERSION}</span>
            <span className="text-[10px] sm:text-xs text-gray-500">sayee@portfolio:~</span>
          </div>
        </div>

        <div
          ref={terminalContentRef}
          className="flex-1 h-[60vh] sm:h-[70vh] md:h-[calc(100vh-12rem)] md:max-h-[700px] p-3 sm:p-6 font-typewriter text-xs sm:text-sm overflow-y-auto custom-scrollbar"
          onClick={() => inputRef.current?.focus()}
          style={{ height: isMobileKeyboardOpen ? '40vh' : undefined }}
        >
          {output.map((line, index) => (
            <div
              key={index}
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
              } whitespace-pre-wrap mb-4 break-words`}
            >
              {line.content}
            </div>
          ))}

          {isTyping && (
            <div className="text-green-400 animate-pulse mb-4">
              processing...
            </div>
          )}

          {!isTyping && (
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-green-400 text-xs sm:text-sm whitespace-nowrap">
                sayee@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
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
            <span className="text-[10px] sm:text-xs text-gray-500">
              Type <span className="text-green-400 font-bold">help</span> to see commands.
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500">
              about · experience · projects · skills · certs · contact
            </span>
          </div>
        </div>

        <div className="scan-lines hidden sm:block" />
      </div>
    </div>
  );
}

export default Terminal;