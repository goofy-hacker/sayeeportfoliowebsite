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
    tags: [
      "AI Governance",
      "NIST AI RMF",
      "NIST CSF 2.0",
      "ISO 27001",
      "Risk Controls"
    ],
    image: "",
    link: "#",
  },

  {
    id: 2,
    title: "Critical Infrastructure Cyber Risk Assessment",
    description:
      "Supported risk assessment work for critical infrastructure environments by identifying governance gaps, high-risk control areas, and stakeholder coordination needs. Focused on DERs, VPPs, audit controls, incident response governance, and cybersecurity oversight using NIST and DOE/NARUC-aligned guidance.",
    tags: [
      "Critical Infrastructure",
      "NIST 800-30",
      "DOE/NARUC",
      "Audit Readiness",
      "GRC"
    ],
    image: "",
    link: "#",
  },

  {
    id: 3,
    title: "Third-Party Risk & Compliance Review",
    description:
      "Created a structured third-party risk review approach for evaluating vendor security posture, access exposure, control ownership, and compliance evidence. The work emphasized risk scoring, documentation quality, remediation tracking, and executive-friendly reporting.",
    tags: [
      "TPRM",
      "Vendor Risk",
      "Risk Scoring",
      "Control Evidence",
      "Compliance"
    ],
    image: "",
    link: "#",
  },

  {
    id: 4,
    title: "M365 Access Governance & Automation",
    description:
      "Designed compliance automation workflows for access reviews, RBAC validation, evidence collection, and control status reporting across Microsoft 365 and Azure AD environments. Reduced manual compliance tracking effort while improving visibility into identity and access risks.",
    tags: [
      "M365 Security",
      "Azure AD",
      "RBAC",
      "Power Automate",
      "Zero Trust"
    ],
    image: "",
    link: "#",
  }
];

export const SKILLS: Skill[] = [
  { name: "NIST CSF 2.0", level: 5, category: "grc" },
  { name: "NIST SP 800-53", level: 5, category: "grc" },
  { name: "NIST SP 800-30", level: 5, category: "risk" },
  { name: "ISO/IEC 27001", level: 5, category: "compliance" },
  { name: "COBIT", level: 4, category: "grc" },
  { name: "DOE/NARUC Cybersecurity Baselines", level: 4, category: "grc" },
  { name: "NIST AI RMF", level: 4, category: "grc" },

  { name: "Enterprise Risk Management", level: 5, category: "risk" },
  { name: "Enterprise Risk Assessments", level: 5, category: "risk" },
  { name: "Risk Registers", level: 5, category: "risk" },
  { name: "Inherent & Residual Risk", level: 5, category: "risk" },
  { name: "Risk Treatment & Prioritization", level: 5, category: "risk" },
  { name: "Risk Quantification", level: 4, category: "risk" },
  { name: "Third-Party Risk Management", level: 5, category: "risk" },

  { name: "Control Gap Analysis", level: 5, category: "compliance" },
  { name: "Audit Readiness", level: 5, category: "compliance" },
  { name: "Risk-to-Control Mapping", level: 5, category: "compliance" },
  { name: "Evidence Mapping", level: 5, category: "compliance" },

  { name: "Zero Trust Governance", level: 4, category: "security" },
  { name: "IAM / RBAC", level: 4, category: "security" },
  { name: "Access Reviews", level: 4, category: "security" },
  { name: "Conditional Access", level: 4, category: "security" },

  { name: "Microsoft 365 Security", level: 4, category: "tools" },
  { name: "Azure AD / Entra ID", level: 4, category: "tools" },
  { name: "Power BI", level: 4, category: "tools" },
  { name: "Power Automate", level: 4, category: "tools" },
  { name: "Executive Risk Reporting", level: 5, category: "tools" },
  { name: "Risk Heat Maps & Mitigation Tracking", level: 5, category: "tools" },
  { name: "Python / SQL", level: 4, category: "tools" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Enterprise Risk Management Intern",
    company:
      "Commonwealth of Massachusetts\nExecutive Office of Technology Services and Security (EOTSS)",
    period: "Jul 2026 – Sep 2026",
    description:
      "Supported enterprise risk management across public-sector technology services by assessing cybersecurity, operational, compliance, and third-party risk scenarios. Maintained enterprise risk register entries covering risk statements, business impacts, existing controls, accountable owners, mitigation actions, and inherent and residual risk ratings. Mapped security and governance controls across NIST CSF 2.0, NIST SP 800-53, NIST SP 800-30, ISO/IEC 27001, and COBIT, while identifying control gaps and developing risk reports, heat maps, and mitigation trackers for stakeholder and leadership review."
  },

  {
    id: 2,
    role: "Cybersecurity GRC Analyst Intern",
    company: "Maryland Public Service Commission",
    period: "Aug 2025 – May 2026",
    description:
      "Supported cybersecurity governance and regulatory oversight for critical infrastructure and distributed energy environments. Contributed to third-party and vendor risk assessments, structured NIST SP 800-30 risk assessments, control gap analysis, audit program development, incident response governance, and risk prioritization aligned with NIST CSF 2.0, NIST SP 800-53, COBIT, DOE/NARUC Cybersecurity Baselines, and COMAR Title 20."
  },

  {
    id: 3,
    role: "Technical Administrator",
    company: "McKenzie Adams Financial Services",
    period: "Jul 2025 – Nov 2025",
    description:
      "Administered Microsoft 365 and Azure AD security controls across business functions, supporting access reviews, RBAC validation, identity governance, and compliance automation. Built workflows for access review tracking, evidence collection, and control status reporting while improving least-privilege enforcement, audit readiness, and control traceability."
  },

  {
    id: 4,
    role: "Cyber Threat Intelligence Intern",
    company: "Cybertection",
    period: "Mar 2025 – Jun 2025",
    description:
      "Conducted cyber threat intelligence research, OSINT analysis, alert triage, and MITRE ATT&CK-based reporting. Used Python and Splunk to support alert enrichment and produce risk-prioritized intelligence summaries covering ransomware, phishing, indicators of compromise, and emerging cyber threats."
  }
];

export const ABOUT = {
  name: "Sayee",
  title: "Enterprise Risk & GRC Cybersecurity Analyst",
  description:
    "Enterprise Risk Management · GRC · Cyber Risk · Compliance · AI Governance",
  longDescription:
    "Enterprise risk and cybersecurity GRC professional with public-sector experience supporting risk assessments, enterprise risk registers, third-party risk, control gap analysis, audit readiness, and cybersecurity governance. Experienced in applying NIST CSF 2.0, NIST SP 800-30, NIST SP 800-53, ISO/IEC 27001, COBIT, and DOE/NARUC guidance to translate technical findings into business-risk insights, remediation priorities, and leadership-focused risk reporting."
};