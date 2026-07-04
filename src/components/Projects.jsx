import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="py-24 px-5 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`grid lg:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-blue-500/50 transition ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl group">
                <div className="flex items-center gap-2 px-5 py-3 bg-slate-800 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>

                  <div className="ml-5 text-xs text-slate-400 truncate">
                    {project.live}
                  </div>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div>
                {project.featured && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold mb-4">
                     Featured Project
                  </span>
                )}

                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 my-6">
                  <div className="text-center rounded-xl bg-slate-950 p-3">
                    <h3 className="text-blue-400 font-bold">100%</h3>
                    <p className="text-xs text-slate-400">Responsive</p>
                  </div>

                  <div className="text-center rounded-xl bg-slate-950 p-3">
                    <h3 className="text-blue-400 font-bold">REST</h3>
                    <p className="text-xs text-slate-400">APIs</p>
                  </div>

                  <div className="text-center rounded-xl bg-slate-950 p-3">
                    <h3 className="text-blue-400 font-bold">Secure</h3>
                    <p className="text-xs text-slate-400">Auth</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-blue-600 transition font-medium"
                  >
                    <FaGithub />
                    GitHub Repository
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;