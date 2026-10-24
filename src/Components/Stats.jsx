import Reveal from "./Reveal";
const stats = [
  {
    id:1,
    value: "8+",
    label: "Projects Built",
    description: "Ideas turned into applications",
    icon: "layers",
  },
  {
    id:2,
    value: "300+",
    label: "DSA Problems",
    description: "Across coding platforms",
    icon: "code",
  },
  {
    id:3,
    value: "600+",
    label: "GitHub Contributions",
    description: "Consistent development activity",
    icon: "git",
  },
  {
    id:4,
    value: "Full Stack",
    label: "Development Expertise",
    description: "Frontend to backend",
    icon: "stack",
  },
];

function StatIcon({ name }) {
  const paths = {
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    code: (
      <>
        <path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16" />
      </>
    ),
    git: (
      <>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <circle cx="6" cy="18" r="2" />
        <path d="M6 8v8M8 6h3a5 5 0 0 1 5 5v5" />
      </>
    ),
    stack: (
      <>
        <rect x="4" y="4" width="16" height="5" rx="1.5" />
        <rect x="4" y="11" width="16" height="5" rx="1.5" />
        <path d="M8 6.5h.01M8 13.5h.01M4 19h16" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-bg px-5 py-12 text-text transition-colors duration-300 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.id} delay={stat*0.12}>
            <article
              key={stat.label}
              className="group rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-hover sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                  <StatIcon name={stat.icon} />
                </div>
              </div>

              <h3 className="mt-6 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                {stat.value}
                <span className="text-accent">
                  {stat.value === "MERN" ? "" : ""}
                </span>
              </h3>

              <p className="mt-2 text-sm font-medium text-text">
                {stat.label}
              </p>

              <p className="mt-2 text-xs leading-5 text-muted">
                {stat.description}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
