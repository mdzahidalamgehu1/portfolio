import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const courses = [
  "Data Structures",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Web Development",
];

function Education() {
  return (
    <section id="education" className="py-24 px-5 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-medium mb-2">Education</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Academic <span className="text-blue-500">Background</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-3xl mb-6">
            <FaGraduationCap />
          </div>

          <h3 className="text-2xl font-bold">
            Bachelor of Computer Applications (BCA)
          </h3>

          <p className="text-blue-400 mt-2 mb-6">Graduate</p>

          <h4 className="text-lg font-semibold mb-4">Relevant Coursework</h4>

          <div className="grid sm:grid-cols-2 gap-3">
            {courses.map((course) => (
              <div
                key={course}
                className="px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-slate-300"
              >
                {course}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;