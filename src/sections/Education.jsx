import { motion } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"

export default function Education() {
  return (
    <section id="education" className="py-32 text-white relative overflow-hidden">

      <div className="absolute right-1/4 top-10 w-[400px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="section-heading text-center"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6"
      >
        <div className="glass-card p-8 relative overflow-hidden">

          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500" />

          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-3xl text-cyan-400" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="text-xl font-bold text-white">
                  Chameli Devi Group of Institutions
                </h3>
                <span className="px-3 py-1 text-xs font-semibold rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 tracking-wide">
                  2023 – 2027
                </span>
              </div>

              <p className="text-cyan-300 font-semibold mb-1">
                B.Tech – Computer Science &amp; Engineering
              </p>

              <p className="text-gray-400 text-sm mb-4">
                Indore, Madhya Pradesh
              </p>

              <div className="border-t border-white/5 pt-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "OOP", "Computer Architecture", "DBMS", "Operating Systems", "Algorithms"].map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 text-xs rounded-full border border-purple-400/20 bg-purple-400/5 text-purple-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}