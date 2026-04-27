import React from 'react';
import { ABOUT } from '../data/portfolio';
import { Network, Terminal, Fingerprint, HardDrive, ShieldCheck, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="bg-black py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl text-center">

              <div className="mb-8 inline-block rounded-full bg-matrix-900/30 px-5 py-2">
                <span className="text-matrix-400 text-lg font-typewriter tracking-wider">
                  ~whoami~
                </span>
              </div>

              <h2 className="mb-6 text-5xl font-typewriter text-matrix-400 md:text-6xl tracking-tight">
                {ABOUT.title}
              </h2>

              <p className="text-xl md:text-2xl leading-relaxed text-matrix-300 tracking-wide max-w-3xl mx-auto font-typewriter">
                {ABOUT.longDescription}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="bg-black py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex flex-col items-center">

            <div className="w-full max-w-6xl">

              <h3 className="text-3xl font-typewriter text-matrix-400 mb-8 border-b border-matrix-700 pb-3 tracking-wider">
                $ grc_ai_and_risk_engineering
              </h3>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                {[
                  {
                    icon: <ShieldCheck size={26} />,
                    title: "governance_frameworks",
                    items: ["NIST CSF 2.0, 800-53", "ISO 27001", "COBIT, DOE-NARUC"]
                  },
                  {
                    icon: <Fingerprint size={26} />,
                    title: "risk_compliance",
                    items: ["Third-Party Risk", "Risk Assessments", "Audit Readiness"]
                  },
                  {
                    icon: <Brain size={26} />,
                    title: "ai_ml_governance",
                    items: ["AI Risk Insights", "ML Risk Scoring", "Control Gap Analytics"]
                  },
                  {
                    icon: <Terminal size={26} />,
                    title: "grc_engineering",
                    items: ["Control Mapping", "Evidence Automation", "Compliance Workflows"]
                  },
                  {
                    icon: <Network size={26} />,
                    title: "security_domains",
                    items: ["Critical Infrastructure", "Zero Trust, IAM", "Incident Governance"]
                  },
                  {
                    icon: <HardDrive size={26} />,
                    title: "tools_platforms",
                    items: ["Power BI, Power Automate", "Azure AD, M365", "Python Automation"]
                  }
                ].map((category, index) => (

                  <div
                    key={index}
                    className="rounded-xl bg-black/50 p-6 shadow-sm ring-1 ring-matrix-900 hover:ring-matrix-400 transition-all"
                  >

                    <div className="mb-4 inline-flex rounded-lg bg-matrix-900/30 p-3 text-matrix-400">
                      {category.icon}
                    </div>

                    <h3 className="mb-4 text-xl font-typewriter text-matrix-400 tracking-wider">
                      &gt; {category.title}
                    </h3>

                    <ul className="text-matrix-300 space-y-2.5 font-typewriter text-base">
                      {category.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start hover:text-matrix-400 transition-colors"
                        >
                          <span className="text-matrix-400 mr-2">$</span> {item}
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;