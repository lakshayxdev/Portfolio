
import Reveal from "./Reveal";

const education = [
  {
    id: 1,
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Bhagwan Parshuram Institute of Technology",
    location: "Rohini, Delhi",
    duration: "2023 – 2027",
    score: "8.44 GPA",
  },
  {
    id: 2,
    degree: "Class 12th (CBSE)",
    institution: "Convent of Gagan Bharti School",
    location: "Uttam Nagar, New Delhi",
    duration: "2022-2023",
    score: "81%",
  },
  {
    id: 3,
    degree: "Class 10th (CBSE)",
    institution: "Convent of Gagan Bharti School",
    location: "Uttam Nagar, New Delhi",
    duration: "2020-2021",
    score: "78.8%",
  },
];

function GraduationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="m2 10 10-6 10 6-10 6-10-6Z" />
      <path d="M6 12.5v5c3.5 2.5 8.5 2.5 12 0v-5M22 10v6" />
    </svg>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-bg px-5 py-24 text-text transition-colors duration-300 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Academic background
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Education.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-muted">
            The academic foundation behind my software development journey.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.12}
              className="h-full"
            >
              <article className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <GraduationIcon />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight">
                  {item.degree}
                </h3>

                <p className="mt-3 font-medium text-accent">
                  {item.institution}
                </p>

                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
                  <span>{item.location}</span>
                  <span aria-hidden="true">•</span>
                  <span>{item.duration}</span>
                </div>

                {item.score && (
                  <p className="mt-4 text-sm text-text">
                    Score : {" "}
                    <span className="text-accent">{item.score}</span>
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
