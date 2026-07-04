import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="py-24 px-5 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold uppercase tracking-wider">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Skills & <span className="text-blue-500">Tools</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies I use to build modern, responsive and scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl overflow-hidden hover:border-blue-500/60 transition"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {group.category}
                </h3>

                <div className="space-y-4">
                  {group.items.map((skill, i) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="flex items-center justify-between rounded-2xl bg-slate-950/70 border border-white/10 p-4 hover:border-blue-500/40 transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-2xl">
                            <Icon />
                          </div>

                          <span className="text-slate-300 font-medium">
                            {skill.name}
                          </span>
                        </div>

                        <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#38bdf8]"></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;