import { useEffect, useState } from "react";
import avtaar from "../assets/avtaar.png";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    github: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 7L2 7" />
      </>
    ),
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    down: <path d="m7 10 5 5 5-5" />,
    copy: (
      <>
        <rect x="8" y="8" width="13" height="13" rx="2" />
        <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={common.fill}
      stroke={common.stroke}
      strokeWidth={common.strokeWidth}
      strokeLinecap={common.strokeLinecap}
      strokeLinejoin={common.strokeLinejoin}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function Home() {
  const [time, setTime] = useState("");
  const githubUrl = "https://github.com/lakshayxdev";
  const linkedinUrl = "https://www.linkedin.com/in/lakshay-23b08b2b1/";

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      id="home"
      className="relative isolate flex min-h-[calc(100vh-76px)] items-center overflow-hidden bg-bg text-text transition-colors duration-300"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[30%] top-[-260px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(var(--text) 0.7px, transparent 0.7px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      {/* Main hero layout */}
      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(440px,0.92fr)] lg:gap-4 xl:gap-8">

          {/* LEFT COLUMN */}
          <div className="relative z-10 min-w-0">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-medium tracking-wide text-muted sm:text-sm">
                Available for opportunities
              </span>
            </div>

            {/* Introduction */}
            <div className="mb-6">
              <p className="mb-1 text-lg text-muted">
                Hello there, I'm
              </p>

              <h1 className="text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                Lakshay<span className="text-accent">.</span>
              </h1>

              <p className="mt-2 text-sm text-muted">
                Software Developer
              </p>
            </div>

            {/* Main headline */}
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-text sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              I build software that
              <span className="text-accent">
                {" "}solves real problems.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Software developer focused on backend engineering, scalable APIs,
              database performance, and building clean, reliable products. I enjoy
              turning complex problems into simple, useful experiences.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projec"
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                My Work
                <FaArrowDownLong name="arrow" className="h-4 w-4" />
              </a>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
                Let's Connect
              </button>
            </div>

            {/* Social links and local time */}
            <div className="mt-8 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:border-accent hover:text-accent"
                >
                  <FaGithub name="github" />
                </a>

                <a
                  href={linkedinUrl}
                  aria-label="Send email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:border-accent hover:text-accent"
                >
                  <FaLinkedinIn name="mail" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                <span>Based in India</span>
                <span className="text-border">/</span>
                <span>IST {time || "--:--"}</span>
              </div>
            </div>

            <a
              href="#projects"
              className="mt-7 inline-flex items-center gap-2 text-xs tracking-wide text-muted transition-colors hover:text-accent"
            >
              Explore my work
              <Icon name="down" className="h-4 w-4" />
            </a>
          </div>

          {/* RIGHT COLUMN: Larger avatar */}
          <div className="relative mx-auto flex w-full max-w-[680px] items-center justify-center lg:mx-0 lg:-ml-10 lg:-translate-y-8 lg:max-w-none xl:-ml-14 xl:-translate-y-10">

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px] sm:h-[480px] sm:w-[480px] lg:h-[560px] lg:w-[560px]"
            />

            <div
              aria-hidden="true"
              className="absolute h-[82%] w-[82%] rounded-full border border-accent/10"
            />

            <div
              aria-hidden="true"
              className="absolute h-[98%] w-[98%] rounded-full border border-border/60"
            />

            {/* Avatar image */}
            <div className="relative z-10 w-full">
              <img
                src={avtaar}
                alt="Illustration of a developer working at a laptop"
                className="relative left-[-3%] mx-auto h-auto max-h-[760px] w-[112%] max-w-none object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.035]"
              />

                    <div className="absolute right-0 top-5 rounded-xl border border-border bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-md sm:right-0 sm:top-10 lg:right-1 lg:top-12">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-text">
                    Always building
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}