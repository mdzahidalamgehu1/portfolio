import { motion } from "framer-motion";
import { achievements } from "../data/portfolioData";

function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-wider">
            Highlights
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My <span className="text-blue-500">Achievements</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A quick overview of my learning journey, hands-on development
            experience and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:border-blue-500 transition-all"
            >
              <h3 className="text-5xl font-bold text-blue-500">
                {item.value}
              </h3>

              <p className="mt-4 text-slate-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;