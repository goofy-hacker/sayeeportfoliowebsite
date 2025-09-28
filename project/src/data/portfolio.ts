// Portfolio data
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'offensive' | 'defensive' | 'tools' | 'other';
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Secure Auth System",
    description: "Implemented a zero-trust authentication system with multi-factor authentication, JWT tokens, and role-based access control.",
    tags: ["OAuth 2.0", "JWT", "Zero Trust", "MFA"],
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    id: 2,
    title: "CTF Platform",
    description: "Developed a Capture The Flag platform featuring various categories including web exploitation, cryptography, and reverse engineering.",
    tags: ["CTF", "Pentest", "Docker", "WebSec"],
    image: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    id: 3,
    title: "Threat Detection System",
    description: "Built an AI-powered threat detection system using machine learning to identify and respond to potential security breaches.",
    tags: ["ML", "SIEM", "Python", "TensorFlow"],
    image: "https://images.pexels.com/photos/5380803/pexels-photo-5380803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    id: 4,
    title: "Security Dashboard",
    description: "Created a real-time security monitoring dashboard with vulnerability assessment and incident response tracking.",
    tags: ["React", "D3.js", "WebSocket", "Analytics"],
    image: "https://images.pexels.com/photos/5380635/pexels-photo-5380635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  }
];

export const SKILLS: Skill[] = [
  { name: "Penetration Testing", level: 5, category: "offensive" },
  { name: "Network Security", level: 4, category: "defensive" },
  { name: "Cryptography", level: 4, category: "tools" },
  { name: "Malware Analysis", level: 5, category: "offensive" },
  { name: "Incident Response", level: 3, category: "defensive" },
  { name: "SIEM Tools", level: 5, category: "tools" },
  { name: "Forensics", level: 3, category: "defensive" },
  { name: "Web Security", level: 4, category: "offensive" },
  { name: "Cloud Security", level: 4, category: "defensive" },
  { name: "Reverse Engineering", level: 4, category: "offensive" },
  { name: "Security Automation", level: 5, category: "tools" },
  { name: "Threat Hunting", level: 3, category: "defensive" },
];

export const EXPERIENCES: Experience[] = [
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
    description: "Conducted OSINT-based threat hunting using SpiderFoot, cutting IOC detection time by 40% through dark web monitoring. Built Python/Splunk automation to process 500+ daily alerts, enabling real-time SOC risk prioritization. Produced MITRE-mapped threat reports on ransomware/phishing TTPs, boosting analyst response speed 25%."
  },
  {
    id: 4,
    role: "Graduate Intern",
    company: "GradSec - University of Maryland Baltimore County",
    period: "April 2025 - Present",
    description: "Built and maintained GradSec's website and Discord bots using Python/JavaScript. Managed secure deployment and maintenance of club resources on AWS. Worked in cross-functional teams using Git and project management tools."
  }
];

export const ABOUT = {
  name: "Sayee",
  title: "Cybersecurity Engineer and Enthusiast",
  description: "Cybersecurity Specialist & AI Security Researcher",
  longDescription: "I'm a security specialist skilled in threat intelligence, vulnerability assessment, and secure AI systems, with hands-on expertise in tools like Burp Suite and Metasploit, plus programming in Python. Certified by Cisco, PwC, and Mastercard, I specialize in penetration testing, compliance frameworks (NIST/ISO/GDPR), and developing AI-powered security solutions with proven results. As a published researcher and conference speaker, I bridge cutting-edge AI with practical cybersecurity implementations to build robust defenses."
};