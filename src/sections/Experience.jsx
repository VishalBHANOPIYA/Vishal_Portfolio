import { motion } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

const experience = [
  {
    year: "2026",
    title: "Frontend Intern",
    company: "IMC",
    desc: "Worked on frontend development using HTML, CSS, JavaScript and React — building responsive, interactive UI components.",
    color: "from-cyan-400 to-blue-500",
    dot: "bg-cyan-400",
  },
  {
    year: "2025",
    title: "Cyber Security Intern",
    company: "Elevate Labs",
    desc: "Worked on password security, vulnerability analysis and ethical hacking basics. Conducted penetration testing exercises.",
    color: "from-purple-400 to-pink-500",
    dot: "bg-purple-400",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 text-white relative overflow-hidden">

      <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="section-heading text-center"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto px-6">

        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/60 via-purple-400/40 to-transparent" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-6 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 border-[#03071e] shadow-lg z-10"
                style={{ background: `linear-gradient(135deg, #06b6d4, #a855f7)` }}
              />

              {/* Year badge */}
              <div className={`md:w-1/2 flex ${index % 2 !== 0 ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"} pl-16 md:pl-0`}>
                <span className="self-center px-4 py-1.5 rounded-full text-xs font-bold border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 tracking-widest">
                  {exp.year}
                </span>
              </div>

              {/* Card */}
              <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 !== 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6"
                >
                  {/* Accent top bar */}
                  <div className={`h-[2px] w-full bg-gradient-to-r ${exp.color} rounded-full mb-4`} />

                  <div className="flex items-center gap-2 mb-2">
                    <FaBriefcase className="text-cyan-400 text-sm" />
                    <span className="text-xs text-cyan-300 font-semibold tracking-wider uppercase">{exp.company}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}