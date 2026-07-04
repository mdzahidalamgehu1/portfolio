import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloudUploadAlt } from "react-icons/fa";

const timeline = [
  {
    icon: FaCode,
    title: "Frontend Development",
    subtitle: "React.js, JavaScript, Responsive UI",
    points: [
      "Built responsive user interfaces.",
      "Created reusable React components.",
      "Improved UI/UX with modern layouts.",
    ],
  },
  {
    icon: FaServer,
    title: "Backend Development",
    subtitle: "Node.js, Express.js, REST APIs",
    points: [
      "Developed RESTful APIs.",
      "Implemented authentication and authorization.",
      "Handled server-side validation and errors.",
    ],
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    subtitle: "MongoDB, Mongoose, MySQL",
    points: [
      "Designed MongoDB schemas.",
      "Worked with relational data using ObjectIds.",
      "Performed CRUD operations efficiently.",
    ],
  },
  {
    icon: FaCloudUploadAlt,
    title: "Deployment & Projects",
    subtitle: "Render, GitHub, Production Apps",
    points: [
      "Deployed full-stack projects online.",
      "Managed code using Git and GitHub.",
      "Built StayNext and Zerodha Clone projects.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-5 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-24 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold uppercase tracking-wider">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Developer <span className="text-blue-500">Timeline</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div className="ml-12 md:ml-0">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl hover:border-blue-500/60 transition">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-2xl mb-5">
                        <Icon />
                      </div>

                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-blue-400 mt-1 mb-5">{item.subtitle}</p>

                      <ul className="space-y-3">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-3 text-slate-400">
                            <span className="mt-2 w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 border-4 border-slate-950 shadow-[0_0_25px_#2563eb]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;