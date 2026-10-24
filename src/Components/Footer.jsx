
export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-5 py-7 text-text sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="font-semibold tracking-wide transition-colors hover:text-accent">
          Lakshay<span className="text-accent">.dev</span>
        </a>

        <p className="text-muted">
          Built with React, Tailwind CSS & curiosity.
        </p>

      </div>
    </footer>
  );
}
