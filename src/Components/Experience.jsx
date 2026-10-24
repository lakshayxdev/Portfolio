import Reveal from "./Reveal";
const timeline = [
  {
    id:1,
    period: "June 2026 – July 2026",
    title: "Summer Intern",
    organization: "DRDO – Solid State Physics Laboratory (SSPL)",
    subtitle: "Aerial Object Detection Workflow Analysis",
    category: "Research Internship",
    description: [
      <>
        Analyzed the end-to-end <strong>YOLOv8-based aerial object detection
        pipeline</strong>, tracing image, video, and webcam inputs through
        detection, threat classification, and alert generation.
      </>,
      <>
        Evaluated model performance using <strong>precision (88.7%)</strong>,
        <strong> recall (85.0%)</strong>, and <strong>mAP@50 (90.5%)</strong>,
        examining class-level results and potential domain gaps.
      </>,
      <>
        Investigated system workflow consistency across
        <strong> SAFE, MONITOR, and SUSPICIOUS</strong> classifications,
        CSV logging, snapshot capture, and webhook-based alerts.
      </>,
    ],
    tags: [
      "YOLOv8",
      "Object Detection",
      "Model Evaluation",
      "Workflow Analysis",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-bg px-5 py-24 text-text sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Professional Experience
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience & <span className="text-muted">Impact.</span>
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Practical experience analyzing computer vision workflows,
          model performance, and system-level alert pipelines.
        </p>

        <div className="mt-12 max-w-full space-y-5">
          {timeline.map((item) => (
            <Reveal key={item.id} delay={item*0.12}>
            <article
              key={item.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-black/10 sm:p-8"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-1 text-xs font-medium text-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
                    {item.organization}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-text">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm italic text-muted">
                    {item.subtitle}
                  </p>
                </div>

                <span className="shrink-0 rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-muted sm:text-sm">
                  {item.period}
                </span>
              </div>

              {/* Responsibilities and achievements */}
              <ul className="mt-7 space-y-4">
                {item.description.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-7 text-muted sm:text-[15px]"
                  >
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technical skills */}
              <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
