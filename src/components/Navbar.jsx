import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks, personalInfo } from "../data/portfolioData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowNavbar(!(currentScrollY > lastScrollY && currentScrollY > 120));
      setLastScrollY(currentScrollY);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
          setActiveSection(link.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      }`}
    >
      <div className="rounded-full bg-slate-950/75 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-950/30 px-5 py-3 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-blue-500/40 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition duration-300">
            <img
              src="/images/logo.png"
              alt="Md Zahid Alam Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="hidden sm:block text-lg font-bold text-white">
            Md Zahid
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm transition ${
                activeSection === link.name
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeSection === link.name && (
                <span className="absolute inset-0 rounded-full bg-blue-600/20 border border-blue-500/30"></span>
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.resume}
            download="Md_Zahid_Alam_Resume.pdf"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white text-xl"
          aria-label="Open Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-3xl bg-slate-950/90 backdrop-blur-xl border border-white/10 p-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-2xl transition ${
                activeSection === link.name
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href={personalInfo.resume}
            download="Md_Zahid_Alam_Resume.pdf"
            className="block text-center px-4 py-3 rounded-2xl bg-blue-600 text-white font-semibold"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;