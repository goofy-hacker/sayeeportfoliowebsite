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
    title: "AI Governance Risk Assessment",
    description: "Developed an AI governance risk assessment using NIST AI RMF, NIST CSF 2.0, and ISO 27001. Identified AI-specific risks and defined audit-ready controls for bias, data protection, and third-party vendor risk.",
    tags: ["NIST AI RMF", "ISO 27001", "NIST CSF 2.0", "GRC"],
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    id: 2,
    title: "DER Cybersecurity Audit Program",
    description: "Designed a risk-based audit program for 200+ Distributed Energy Resources and Virtual Power Plants, incorporating COBIT-aligned control objectives and checks for privacy, secure communications, and coordination with Electric Distribution Companies.",
    tags: ["COBIT", "NIST 800-53", "Critical Infrastructure", "Audit"],
    image: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    id: 3,
    title: "Threat Intelligence Automation",
    description: "Built Python and Splunk automation to triage and enrich 500+ daily security alerts, producing a risk-prioritized alert queue. Reduced analyst triage effort by 15% and produced MITRE ATT&CK-mapped reports on ransomware and phishing campaigns.",
    tags: ["Python", "Splunk", "MITRE ATT&CK", "OSINT"],
    image: "https://images.pexels.com/photos/5380803/pexels-photo-5380803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    id: 4,
    title: "M365 Compliance Automation",
    description: "Designed and implemented 15+ compliance automation workflows using Power Automate and Microsoft Copilot to support access review tracking, evidence collection, and control status reporting — reducing manual compliance effort by 10+ hours per week.",
    tags: ["Power Automate", "Azure AD", "RBAC", "Zero Trust"],
    image: "https://images.pexels.com/photos/5380635/pexels-photo-5380635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  }
];

export const SKILLS: Skill[] = [
  { name: "NIST CSF 2.0 / 800-53", level: 5, category: "tools" },
  { name: "ISO/IEC 27001", level: 5, category: "tools" },
  { name: "Third-Party Risk (TPRM)", level: 5, category: "defensive" },
  { name: "Audit Program Design", level: 4, category: "defensive" },
  { name: "Risk Quantification", level: 4, category: "defensive" },
  { name: "Zero Trust / IAM", level: 4, category: "defensive" },
  { name: "Azure AD / M365 Security", level: 4, category: "tools" },
  { name: "MITRE ATT&CK", level: 4, category: "offensive" },
  { name: "Python / Splunk", level: 4, category: "tools" },
  { name: "Threat Intelligence", level: 4, category: "offensive" },
  { name: "Incident Response", level: 3, category: "defensive" },
  { name: "COBIT / DOE/NARUC", level: 4, category: "tools" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Cybersecurity GRC Analyst Intern",
    company: "DoIT – Maryland Public Service Commission",
    period: "Aug 2025 – Present",
    description: "Supporting statewide cybersecurity governance and regulatory oversight for 200+ Distributed Energy Resources (DERs), VPPs, and DER Aggregators. Led third-party vendor risk assessments, conducted NIST SP 800-30 risk assessments across three critical infrastructure domains identifying 12+ high-risk control gaps, and designed components of a COBIT-aligned audit program. Contributed to incident response governance documentation, improving cross-stakeholder coordination efficiency by 30%."
  },
  {
    id: 2,
    role: "Technical Administrator",
    company: "McKenzie Adams Financial Services",
    period: "Jul 2025 – Nov 2025",
    description: "Administered Microsoft 365 and Azure AD security controls for 150+ users across 10+ business functions, aligned with NIST CSF, ISO/IEC 27001 Annex A, and COBIT. Executed quarterly access reviews and RBAC validation, remediating 35% of excess permissions. Designed 15+ compliance automation workflows using Power Automate, reducing manual compliance effort by 10+ hours per week."
  },
  {
    id: 3,
    role: "Cyber Threat Intelligence Intern",
    company: "Cybertection",
    period: "Mar 2025 – Jun 2025",
    description: "Conducted OSINT and dark-web threat hunting using SpiderFoot, reducing IOC detection time by 40%. Built Python and Splunk automation to triage and enrich 500+ daily security alerts. Produced MITRE ATT&CK-mapped intelligence reports on ransomware and phishing campaigns, improving SOC response speed by 25%."
  }
];

export const ABOUT = {
  name: "Sayee",
  title: "GRC & Cybersecurity Specialist",
  description: "GRC Analyst · Risk & Compliance · Critical Infrastructure Security",
  longDescription: "MS Cybersecurity student at University of Maryland (GPA 4.0) specializing in regulatory governance, third-party risk, and audit readiness for critical infrastructure. I have hands-on experience implementing NIST CSF 2.0, NIST 800-53/800-30, ISO 27001, and DOE/NARUC cybersecurity frameworks — turning complex compliance requirements into clear, audit-ready controls."
};