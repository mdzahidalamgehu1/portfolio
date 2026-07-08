import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-28 pb-16 px-5"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-xs sm:text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Internship & Full-Time Roles
          </div>

          <p className="text-blue-400 uppercase tracking-[3px] font-semibold mb-3 text-xs sm:text-sm">
            Full Stack MERN Developer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Md Zahid Alam
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-400 leading-7 max-w-xl mx-auto lg:mx-0">
            BCA graduate passionate about building scalable, responsive and
            production-ready web applications using MongoDB, Express.js,
            React.js and Node.js.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-3"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href={personalInfo.resume}
              download="Md_Zahid_Alam_Resume.pdf"
              className="px-7 py-3 rounded-full border border-white/20 hover:border-blue-500 hover:bg-blue-600/20 transition flex items-center justify-center gap-3"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-blue-600 transition flex items-center justify-center text-xl"
            >
              <FaGithub />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-blue-600 transition flex items-center justify-center text-xl"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-xl mx-auto lg:mx-0">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
              <h2 className="text-2xl font-bold text-blue-400">2+</h2>
              <p className="text-slate-400 text-xs mt-1">Featured Projects</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
              <h2 className="text-2xl font-bold text-blue-400">500+</h2>
              <p className="text-slate-400 text-xs mt-1">Coding Hours</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
              <h2 className="text-2xl font-bold text-blue-400">MERN</h2>
              <p className="text-slate-400 text-xs mt-1">Stack Focus</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-first lg:order-last"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-3xl opacity-40 animate-pulse"></div>

            <div className="relative w-full h-full rounded-full p-[4px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <img
                  src="/images/profile.jpg"
                  alt="Md Zahid Alam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-4 right-0 sm:right-3 px-4 py-2 rounded-full bg-slate-900 border border-green-500/40 text-green-400 text-xs sm:text-sm">
              ● Available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;