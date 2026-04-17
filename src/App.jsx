import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CesarCastroCV() {
  const experience = [
    {
      role: "Technical Team Lead",
      company: "Cikume Software",
      period: "April 2019 – Present",
      location: "Remote",
      bullets: [
        "Led the design and development of 3 modern React, Next.js, and Angular applications, using Redux for state management and Jest for testing.",
        "Built and maintained backend services with Node.js, Express, and RESTful APIs for scalable integrations.",
        "Facilitated sprint planning and task distribution across a 10-person engineering team.",
        "Bridged technical and non-technical stakeholders to align delivery with business goals.",
        "Conducted code reviews, mentored junior developers, and reinforced maintainable, secure, testable coding practices.",
        "Integrated GraphQL and Hasura to streamline data access workflows.",
        "Improved scalability and performance through architectural refinements and solid documentation.",
      ],
      tech: [
        "React",
        "Next.js",
        "Angular",
        "Redux",
        "Jest",
        "Node.js",
        "NestJS",
        "GraphQL",
        "Hasura",
        "PostgreSQL",
        "Tailwind CSS",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Paradise Solutions",
      period: "Sept 2016 – April 2019",
      location: "El Salvador",
      bullets: [
        "Maintained and enhanced high-traffic international travel websites.",
        "Implemented front-end improvements using HTML5, CSS3, JavaScript, and jQuery.",
        "Tested and fixed bugs to keep websites reliable and efficient.",
        "Supported SEO and social media optimization to improve engagement.",
        "Provided system administration and desktop IT support for internal teams.",
      ],
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "WordPress",
        "Bootstrap",
        "MySQL",
      ],
    },
    {
      role: "Web Developer",
      company: "Webboxinteractive",
      period: "Dec 2007 – Sept 2016",
      location: "El Salvador",
      bullets: [
        "Developed e-commerce and corporate websites using JavaScript, Node.js, Laravel, CodeIgniter, and WordPress.",
        "Administered RedHat Linux servers, including user access, firewalls, and mail services.",
        "Worked with US-based stakeholders to implement server-side changes and updates.",
        "Provided multi-platform email support and maintained websites through regular updates.",
        "Built responsive UI layouts with Bootstrap and custom CSS components.",
      ],
      tech: [
        "JavaScript",
        "Node.js",
        "Laravel",
        "CodeIgniter",
        "WordPress",
        "PHP",
        "MySQL",
        "Bootstrap",
        "Linux",
      ],
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      items: [
        "React",
        "Angular",
        "Next.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "jQuery",
      ],
    },
    {
      title: "Backend",
      items: ["Node.js", "NestJS", "PHP", "Laravel", "CodeIgniter", "Java"],
    },
    {
      title: "Data & APIs",
      items: ["PostgreSQL", "MySQL", "GraphQL", "Hasura", "RESTful APIs"],
    },
    {
      title: "DevOps & Systems",
      items: [
        "Git",
        "Docker",
        "Kubernetes",
        "Linux Server Administration",
        "Apache",
        "DNS",
        "Agile Methodologies",
      ],
    },
    {
      title: "Leadership",
      items: [
        "Team Leadership",
        "Mentorship",
        "Code Reviews",
        "Architecture",
        "Cross-functional Collaboration",
        "Technical Documentation",
      ],
    },
  ];

  const highlights = [
    "10+ years building enterprise and business-critical web applications",
    "Team lead experience across full-stack projects and agile delivery",
    "Strong mix of frontend engineering, backend architecture, and Linux/server administration",
    "Comfortable translating business needs into technical solutions",
  ];

  const profileLinks = {
    github: "https://github.com/ce-castro",
    linkedin: "https://www.linkedin.com/in/cesar-castro-984362b1/",
    resume: "/Cesar-Castro-Resume.pdf",
  };

  const [expandedJobs, setExpandedJobs] = useState(new Set());
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeSection, setActiveSection] = useState("top");

  const toggleJob = (jobKey) => {
    const newExpanded = new Set(expandedJobs);
    if (newExpanded.has(jobKey)) {
      newExpanded.delete(jobKey);
    } else {
      newExpanded.add(jobKey);
    }
    setExpandedJobs(newExpanded);
  };

  const filteredExperience = selectedSkill
    ? experience.filter((job) => job.tech.includes(selectedSkill))
    : experience;

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-3 md:px-10">
          <div className="flex items-center gap-4 overflow-x-auto text-sm">
            {["top", "experience", "skills"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                className={`whitespace-nowrap capitalize px-3 py-2 rounded-lg transition ${
                  activeSection === section
                    ? "text-sky-400 bg-slate-800"
                    : "text-slate-400 hover:text-sky-300"
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        <header className="grid gap-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl md:grid-cols-[1.5fr_0.9fr] animate-fade-in">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-sky-400">
              Personal Resume Site
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Cesar Castro
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Experienced Software Engineer with 10+ years of experience leading
              engineering teams and delivering enterprise-grade web applications
              across frontend, backend, APIs, and infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:ce.castro@outlook.es"
                className="rounded-2xl bg-sky-500 px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/30"
              >
                Email Me
              </a>
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300 hover:shadow-lg"
              >
                GitHub
              </a>
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300 hover:shadow-lg"
              >
                LinkedIn
              </a>
              <a
                href={profileLinks.resume}
                download
                className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300 hover:shadow-lg"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-lg font-semibold text-slate-100">
              Quick Snapshot
            </h2>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div>
                <p className="text-slate-500">Email</p>
                <p className="mt-1 break-all text-base text-slate-100">
                  ce.castro@outlook.es
                </p>
              </div>
              <div>
                <p className="text-slate-500">Focus</p>
                <p className="mt-1 text-base text-slate-100">
                  Full-Stack Engineering, Technical Leadership, Web Architecture
                </p>
              </div>
              <div>
                <p className="text-slate-500">Core Strengths</p>
                <p className="mt-1 text-base text-slate-100">
                  React, Angular, Node.js, GraphQL, WordPress, Linux, Docker
                </p>
              </div>
              <div>
                <p className="text-slate-500">Location</p>
                <p className="mt-1 text-base text-slate-100">El Salvador</p>
              </div>
              <div>
                <p className="text-slate-500">Profiles</p>
                <div className="mt-2 flex flex-wrap gap-3 text-base">
                  <a
                    href={profileLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:text-sky-200 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:text-sky-200 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4 animate-fade-in">
          {highlights.map((item, idx) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 cursor-pointer hover:scale-[1.02]"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <p className="text-sm leading-7 text-slate-300">{item}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] animate-fade-in">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 shadow-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">
              About
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Professional Summary
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Proven track record in full-stack development, architectural
              planning, and cross-functional collaboration. Highly skilled in
              mentoring developers, conducting code reviews, implementing
              scalable solutions, and driving agile development practices.
              Strong technical depth across frontend and backend technologies,
              server infrastructure, and DevOps workflows.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 shadow-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">
              Education
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Background</h2>
            <div className="mt-4 space-y-4 text-slate-300">
              <div>
                <p className="font-medium text-slate-100">
                  Computer Science Engineering
                </p>
                <p>Universidad de El Salvador</p>
                <p className="text-sm text-slate-400">2001 – 2008</p>
              </div>
              <div>
                <p className="font-medium text-slate-100">Languages</p>
                <p>English – Advanced level</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-12">
          <div className="mb-6 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">
              Career
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Professional Experience
            </h2>
            {selectedSkill && (
              <div className="mt-4 flex items-center gap-3">
                <p className="text-sm text-slate-400">Filtered by:</p>
                <div className="flex items-center gap-2 rounded-full border border-sky-500 bg-sky-500/10 px-3 py-1">
                  <span className="text-sky-300 font-medium">
                    {selectedSkill}
                  </span>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="ml-1 text-sky-300 hover:text-sky-200 font-bold"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
            <p className="mt-2 text-sm text-slate-400">
              💡 Click on a job to expand details, then click skills to filter
            </p>
          </div>

          <div className="space-y-6">
            {filteredExperience.length > 0 ? (
              filteredExperience.map((job, idx) => {
                const jobKey = `${job.company}-${job.role}`;
                const isExpanded = expandedJobs.has(jobKey);

                return (
                  <article
                    key={jobKey}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-7 shadow-xl transition hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 cursor-pointer overflow-hidden animate-fade-in"
                    onClick={() => toggleJob(jobKey)}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-100">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-lg text-sky-300">
                          {job.company}
                        </p>
                        <p className="mt-2 text-sm text-slate-400">
                          {job.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl border border-slate-700 px-4 py-2 text-sm text-slate-300">
                          {job.period}
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Expandable content */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isExpanded ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="mt-6 space-y-3 text-slate-300">
                        {job.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 leading-7">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.tech.map((item) => (
                          <button
                            key={item}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSkill(
                                selectedSkill === item ? null : item,
                              );
                            }}
                            className={`rounded-full px-3 py-1 text-sm transition ${
                              selectedSkill === item
                                ? "border-sky-400 bg-sky-500/20 text-sky-300"
                                : "border border-slate-700 bg-slate-800 text-slate-200 hover:border-sky-400 hover:text-sky-300"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Preview when collapsed */}
                    {!isExpanded && (
                      <p className="mt-4 text-sm text-slate-400">
                        {job.bullets[0]}...
                      </p>
                    )}
                  </article>
                );
              })
            ) : (
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 text-center">
                <p className="text-slate-400">
                  No experience found with {selectedSkill}. Click to reset
                  filter.
                </p>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="mt-4 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
                >
                  Clear Filter
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="skills" className="mt-12">
          <div className="mb-6 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Technical Toolkit</h2>
            <p className="mt-2 text-sm text-slate-400">
              Click any skill to filter experience by technology
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, idx) => (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-slate-100">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <button
                      key={item}
                      onClick={() =>
                        setSelectedSkill(selectedSkill === item ? null : item)
                      }
                      className={`rounded-full px-3 py-1 text-sm transition ${
                        selectedSkill === item
                          ? "border-sky-400 bg-sky-500/20 text-sky-300"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-sky-300"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 animate-fade-in">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-sky-500/10 via-slate-900 to-slate-900 p-8 shadow-2xl transition hover:border-sky-500/50">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-400"></p>
            <h2 className="mt-3 text-3xl font-semibold">Get in touch</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              I’m open to opportunities involving full-stack development,
              frontend engineering, technical leadership, and scalable web
              platforms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:ce.castro@outlook.es"
                className="rounded-2xl bg-sky-500 px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/30"
              >
                Email Me
              </a>
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                GitHub
              </a>
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                LinkedIn
              </a>
              <a
                href={profileLinks.resume}
                download
                className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
