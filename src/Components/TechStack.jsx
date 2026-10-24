
import {
  Code2,
  Monitor,
  Server,
  ShieldCheck,
  Database,
  Wrench,
} from "lucide-react";

import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiJsonwebtokens,
  SiTypescript,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";
import Reveal from "./Reveal";
const techMap = {
  "C/C++": { icon: SiCplusplus, color: "#659AD2" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  SQL: { icon: Database, color: "#38BDF8" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },

  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: FaCss3Alt, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "React.js": { icon: SiReact, color: "#61DAFB" },

  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  "REST APIs": { icon: Code2, color: "#A78BFA" },
  "LLM API Integration": { icon: Code2, color: "#C084FC" },

  JWT: { icon: SiJsonwebtokens, color: "#D63AFF" },
  "OAuth 2.0": { icon: ShieldCheck, color: "#60A5FA" },
  RBAC: { icon: ShieldCheck, color: "#34D399" },

  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Redis: { icon: SiRedis, color: "#FF4438" },

  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  Render: { icon: SiRender, color: "#46E3B7" },
};

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    accent: "#A78BFA",
    skills: ["C/C++", "JavaScript", "SQL", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    accent: "#60A5FA",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "React.js"],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "#34D399",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "LLM API Integration",
    ],
  },
  {
    title: "Authentication & Security",
    icon: ShieldCheck,
    accent: "#F59E0B",
    skills: ["JWT", "OAuth 2.0", "RBAC"],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "#F87171",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools",
    icon: Wrench,
    accent: "#22D3EE",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
];

export default function SkillsSection() {
  return (
    <section id="stack" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-9">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Technical Expertise
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Technical Skills
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
            My development stack, from programming languages
            and frontend interfaces to backend systems and infrastructure.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const CategoryIcon = group.icon;

            return (
              <Reveal
                key={group.title}
                delay={index * 0.1}
                className="h-full"
              >
                <article className="group h-full rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-black/10 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        color: group.accent,
                        backgroundColor: `${group.accent}12`,
                        borderColor: `${group.accent}30`,
                      }}
                    >
                      <CategoryIcon size={20} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-base font-semibold tracking-tight text-text">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const tech = techMap[skill];
                      if (!tech) return null;

                      const TechIcon = tech.icon;

                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/70 px-3 py-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:border-white/20 hover:text-text"
                        >
                          <TechIcon
                            size={16}
                            style={{ color: tech.color }}
                            aria-hidden="true"
                          />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
