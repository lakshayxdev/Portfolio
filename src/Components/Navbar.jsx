
import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
    >
      <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      {open ? (
        <path d="m18 6-12 12M6 6l12 12" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function Navbar() {
  const [isLight, setIsLight] = useState(
    () => document.documentElement.classList.contains("light")
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 text-text backdrop-blur-xl transition-colors duration-300">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-surface text-sm font-bold tracking-tight text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-surface-hover">
            L
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-text">
              Lakshay.dev
            </p>
            <p className="mt-1 text-xs text-muted">
              Software Developer
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsLight((current) => !current)}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            title={`Switch to ${isLight ? "dark" : "light"} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition-all duration-200 hover:border-accent hover:text-accent"
          >
            {isLight ? <MoonIcon /> : <SunIcon />}
          </button>

          <a
            href="/Lakshay's Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-text transition-all duration-200 hover:border-accent hover:text-accent sm:flex"
          >
            Resume
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text md:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-bg px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-3 text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
            >
              View resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
