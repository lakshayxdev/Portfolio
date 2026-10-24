import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Stats from "./Components/Stats";
import About from "./Components/About";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import BackToTop from "./Components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Navbar />
      <Home />
      <Stats />
      <About />
      <Education />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />

      <Footer />

      <BackToTop />
    </div>
  );
}
