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
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Internship & Full-Time Roles
          </div>

          <p className="text-blue-400 uppercase tracking-[4px] font-semibold mb-4">
            Full Stack MERN Developer
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Hi, I'm
            <br />

            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Md Zahid Alam
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-400 leading-8 max-w-xl">
            BCA graduate passionate about building scalable,
            responsive and production-ready web applications using
            MongoDB, Express.js, React.js and Node.js.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold flex items-center gap-3"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href={personalInfo.resume}
              download
              className="px-8 py-4 rounded-full border border-white/20 hover:border-blue-500 hover:bg-blue-600/20 transition flex items-center gap-3"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-blue-600 transition flex items-center justify-center text-xl"
            >
              <FaGithub />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-blue-600 transition flex items-center justify-center text-xl"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-5 mt-14">

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 text-center">
              <h2 className="text-3xl font-bold text-blue-400">
                2+
              </h2>

              <p className="text-slate-400 text-sm mt-2">
                Featured Projects
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 text-center">
              <h2 className="text-3xl font-bold text-blue-400">
                500+
              </h2>

              <p className="text-slate-400 text-sm mt-2">
                Coding Hours
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 text-center">
              <h2 className="text-3xl font-bold text-blue-400">
                MERN
              </h2>

              <p className="text-slate-400 text-sm mt-2">
                Stack Focus
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-3xl opacity-40 animate-pulse"></div>

            <div className="relative w-[380px] h-[380px] rounded-full p-[5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600">

              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">

                <img
                  src="/images/profile.png"
                  alt="Md Zahid Alam"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

            <div className="absolute bottom-10 right-4 px-5 py-3 rounded-full bg-slate-900 border border-green-500/40 text-green-400">
              ● Available
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;