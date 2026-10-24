
import Reveal from "./Reveal";
const highlights = [
  "Building REST APIs and backend services",
  "Working with MongoDB, Redis and databases",
  "Implementing authentication and rate limiting",
  "Developing responsive React applications",
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-bg px-5 py-24 text-text sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        {/* Left content */}
        <Reveal>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              About me
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering with purpose.
            </h2>

            <p className="mt-6 leading-8 text-muted">
              I'm a software developer focused on building useful, reliable
              applications. I enjoy understanding how systems work behind the
              scenes, improving performance, and turning ideas into real products.
            </p>

            <p className="mt-4 leading-8 text-muted">
              My interests span full-stack development, backend architecture,
              database optimization, and data structures and algorithms.
            </p>
          </div>
        </Reveal>

        {/* Right card */}
        <Reveal delay={0.15} className="h-full">
          <div className="h-full rounded-2xl border-2 border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold">
              What I work with
            </h3>

            <div className="mt-6 space-y-5">
              {highlights.map((item, index) => (
                <Reveal key={item} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 text-xs text-accent">
                      0{index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-muted">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
