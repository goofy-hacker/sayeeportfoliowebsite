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
  level: number;
  category: 'grc' | 'risk' | 'compliance' | 'security' | 'tools';
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
    title: "AI Governance & Risk Control Mapping",
    description:
      "Built an AI governance risk assessment model focused on responsible AI, data protection, bias, third-party AI tools, and audit readiness. Mapped AI risks to NIST AI RMF, NIST CSF 2.0, ISO 27001, and control evidence requirements to help organizations evaluate AI adoption more safely.",
    tags: ["AI Governance", "NIST AI RMF", "NIST CSF 2.0", "ISO 27001", "Risk Controls"],
    image: "",
    link: "#",
  },
  {
    id: 2,
    title: "Critical Infrastructure Cyber Risk Assessment",
    description:
      "Supported risk assessment work for critical infrastructure environments by identifying governance gaps, high-risk control areas, and stakeholder coordination needs. Focused on DERs, VPPs, audit controls, incident response governance, and cybersecurity oversight using NIST and DOE/NARUC-aligned guidance.",
    tags: ["Critical Infrastructure", "NIST 800-30", "DOE/NARUC", "Audit Readiness", "GRC"],
    image: "",
    link: "#",
  },
  {
    id: 3,
    title: "Third-Party Risk & Compliance Review",
    description:
      "Created a structured third-party risk review approach for evaluating vendor security posture, access exposure, control ownership, and compliance evidence. The work emphasized risk scoring, documentation quality, remediation tracking, and executive-friendly reporting.",
    tags: ["TPRM", "Vendor Risk", "Risk Scoring", "Control Evidence", "Compliance"],
    image: "",
    link: "#",
  },
  {
    id: 4,
    title: "M365 Access Governance & Automation",
    description:
      "Designed compliance automation workflows for access reviews, RBAC validation, evidence collection, and control status reporting across Microsoft 365 and Azure AD environments. Reduced manual compliance tracking effort while improving visibility into identity and access risks.",
    tags: ["M365 Security", "Azure AD", "RBAC", "Power Automate", "Zero Trust"],
    image: "",
    link: "#",
  }
];

export const SKILLS: Skill[] = [
  { name: "NIST CSF 2.0 / 800-53", level: 5, category: "grc" },
  { name: "NIST AI RMF", level: 4, category: "grc" },
  { name: "ISO/IEC 27001", level: 5, category: "compliance" },
  { name: "Third-Party Risk Management", level: 5, category: "risk" },
  { name: "Audit Readiness & Control Mapping", level: 5, category: "compliance" },
  { name: "Risk Assessment / Risk Register", level: 5, category: "risk" },
  { name: "AI Governance & Responsible AI", level: 4, category: "grc" },
  { name: "Zero Trust / IAM / RBAC", level: 4, category: "security" },
  { name: "Azure AD / M365 Security", level: 4, category: "tools" },
  { name: "Power BI / Power Automate", level: 4, category: "tools" },
  { name: "Python / SQL", level: 4, category: "tools" },
  { name: "COBIT / DOE/NARUC", level: 4, category: "grc" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Cybersecurity GRC Analyst Intern",
    company: "DoIT – Maryland Public Service Commission",
    period: "Aug 2025 – Present",
    description:
      "Supporting cybersecurity governance and regulatory oversight for critical infrastructure and distributed energy environments. Contributing to risk assessments, third-party risk reviews, control gap analysis, incident response governance documentation, and audit program development aligned with NIST, COBIT, DOE/NARUC, and COMAR-related cybersecurity expectations."
  },
  {
    id: 2,
    role: "Technical Administrator",
    company: "McKenzie Adams Financial Services",
    period: "Jul 2025 – Nov 2025",
    description:
      "Administered Microsoft 365 and Azure AD security controls for business users, supporting access reviews, RBAC validation, identity governance, and compliance automation. Built workflows to improve evidence collection, reduce manual tracking, and support audit readiness across security and compliance processes."
  },
  {
    id: 3,
    role: "Cyber Threat Intelligence Intern",
    company: "Cybertection",
    period: "Mar 2025 – Jun 2025",
    description:
      "Conducted threat intelligence research, OSINT analysis, alert triage support, and MITRE ATT&CK-based reporting. Used Python and Splunk to support security alert enrichment and produce risk-prioritized intelligence summaries for ransomware, phishing, and emerging cyber threats."
  }
];

export const ABOUT = {
  name: "Sayee",
  title: "GRC & AI Governance Cybersecurity Specialist",
  description: "GRC Analyst · AI Risk · Compliance · Critical Infrastructure Security",
  longDescription:
    "Cybersecurity GRC Analyst supporting governance, risk, and compliance initiatives in public sector and critical infrastructure environments. Focused on AI governance, third-party risk, and audit readiness, with experience translating NIST, ISO 27001, and DOE/NARUC frameworks into practical controls and risk-driven security outcomes."
};