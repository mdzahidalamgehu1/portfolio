import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { navLinks, personalInfo } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 px-5 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Md Zahid Alam Logo"
                className="w-14 h-14 rounded-full object-cover border border-blue-500/40"
              />

              <span className="text-2xl font-bold text-white">
                Md Zahid Alam
              </span>
            </a>
                        <p className="text-slate-400 mt-4">
              Full Stack MERN Developer passionate about building modern web
              applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-slate-500">
          © 2026 Md Zahid Alam. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;