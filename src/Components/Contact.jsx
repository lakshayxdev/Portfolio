import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  const email = "lakshayp95@gmail.com";

  return (
    <section id="contact" className="scroll-mt-24 bg-bg px-5 py-24 text-text sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-7 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-[90px]"
          />

          <div className="relative max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Let's connect
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Have an opportunity or an interesting problem?
            </h2>
            <p className="mt-5 leading-8 text-muted">
              I'm open to software development internships and entry-level
              opportunities where I can contribute, learn and build meaningful
              products.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
  href="mailto:lakshayp95@gmail.com?subject=Portfolio%20Contact"
  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
>
  Send Me an Email
  <MdOutlineEmail size={18} />
</a>
              <a
                href="https://www.linkedin.com/in/lakshay-23b08b2b1/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                Connect on LinkedIn <span aria-hidden="true">
                  <FaLinkedin size={18}/>
                </span>
              </a>
            </div>

            <p className="mt-6 break-all text-sm text-muted">{email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
