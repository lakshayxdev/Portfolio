import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-surface text-text shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
    >
      <FaArrowUp size={18} />
    </button>
  );
}