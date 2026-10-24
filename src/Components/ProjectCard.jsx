import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiReactrouter,
  SiRedis,
  SiMongoose,
  SiJsonwebtokens,
  SiHtml5,
  SiPostgresql,
  SiNextdotjs,
  SiGithub,
} from "react-icons/si";
import { useState } from 'react';


const techIcons = {
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Vite": SiVite,
  "React Router": SiReactrouter,
  "Redis": SiRedis,
  "Mongoose": SiMongoose,
  "JWT": SiJsonwebtokens,
  "HTML": SiHtml5,
  "HTML5": SiHtml5,
  "PostgreSQL": SiPostgresql,
  "Next.js": SiNextdotjs,
  "GitHub": SiGithub,
};



export default function ProjectCard({
  title,
  description=[],
  image,
  technologies = [],
  status = "Completed",
  liveUrl,
  githubUrl,
  detailsUrl,
}) {

  const [expanded, setExpanded] = useState(false);

  const visibleDescriptions=expanded ? description : description.slice(0,2);


  return (
    <article className="group overflow-hidden rounded-[24px] border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/5">

      {/* Project screenshot */}
      <a
        href={liveUrl || detailsUrl || "#projects"}
        target={liveUrl || detailsUrl ? "_blank" : undefined}
        rel={liveUrl || detailsUrl ? "noreferrer" : undefined}
        className="block overflow-hidden bg-surface-hover"
      >
        <img
          src={image}
          alt={`${title} project preview`}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
        />
      </a>

      {/* Project information */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-text mb-3">
            {title}
          </h3>

          <div className="flex shrink-0 items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${title}`}
                className="text-muted transition hover:text-accent"
              >
                <Globe size={19} />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} GitHub repository`}
                className="text-muted transition hover:text-accent"
              >
                <SiGithub size={19} />
              </a>
            )}
          </div>
        </div>

        {/* Project description */}
<div className="space-y-3">
  {visibleDescriptions.map((point, index) => (
    <div key={index} className="flex items-start gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />

      <p className="text-[15px] leading-7 ">
        {point}
      </p>
    </div>
  ))}
</div>

{description.length > 2 && (
  <button
    onClick={() => setExpanded((prev) => !prev)}
    className="mt-4 inline-flex items-center gap-2 text-sm font-medium cursor-pointer"
  >
    {expanded ? "View less" : "View more"}

    {expanded ? (
      <ChevronUp size={16} />
    ) : (
      <ChevronDown size={16} />
    )}
  </button>
)}

        {/* Technology icons */}
<div className="mt-6">
  <div className="flex flex-wrap items-center ">
    {technologies.map((tech) => {
      const Icon = techIcons[tech];

      if (!Icon) return null;

      return (
        <div
          key={tech}
          title={tech}
          aria-label={tech}
          className="flex h-9 w-9 items-center justify-center text-muted transition-all duration-200 hover:-translate-y-1 hover:text-accent"
        >
          <Icon size={22} aria-hidden="true" />
        </div>
      );
    })}
  </div>
</div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-4 sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {status}
        </span>
      </div>
    </article>
  );
}