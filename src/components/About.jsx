import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaDatabase, FaRocket } from "react-icons/fa";

const stats = [
  { icon: FaCode, value: "2+", label: "Full Stack Projects" },
  { icon: FaLaptopCode, value: "500+", label: "Coding Hours" },
  { icon: FaDatabase, value: "10+", label: "Technologies" },
  { icon: FaRocket, value: "MERN", label: "Stack Focus" },
];

function About() {
  return (
    <section id="about" className="py-24 px-5 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 font-medium mb-2">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Who <span className="text-blue-500">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold mb-5">
              BCA Graduate & MERN Developer
            </h3>

            <p className="text-slate-400 leading-relaxed mb-5">
              I am a BCA graduate passionate about building scalable web
              applications using the MERN stack. I enjoy transforming ideas into
              real-world digital products and continuously improving my skills
              in modern web development.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My interests include backend architecture, frontend experiences,
              REST APIs, databases, authentication systems and creating
              responsive user-friendly applications.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-2xl mb-4">
                    <Icon />
                  </div>

                  <h4 className="text-3xl font-bold text-white">
                    {item.value}
                  </h4>

                  <p className="text-slate-400 mt-1">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;