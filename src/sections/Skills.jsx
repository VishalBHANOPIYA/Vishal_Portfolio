import { FaPython, FaReact, FaGit, FaJava } from "react-icons/fa"
import { SiCplusplus, SiJavascript, SiFlask, SiMysql, SiTailwindcss, SiDocker } from "react-icons/si"
import { MdSecurity } from "react-icons/md"
import { motion } from "framer-motion"

const skills = [
  { name: "Python",       icon: <FaPython />,       color: "text-yellow-400", glow: "rgba(250,204,21,0.4)" },
  { name: "C++",          icon: <SiCplusplus />,    color: "text-blue-400",   glow: "rgba(96,165,250,0.4)" },
  { name: "JavaScript",   icon: <SiJavascript />,   color: "text-yellow-300", glow: "rgba(253,224,71,0.4)" },
  { name: "React",        icon: <FaReact />,         color: "text-cyan-400",   glow: "rgba(34,211,238,0.4)" },
  { name: "Flask",        icon: <SiFlask />,         color: "text-gray-200",   glow: "rgba(255,255,255,0.2)" },
  { name: "Cybersecurity",icon: <MdSecurity />,      color: "text-red-400",    glow: "rgba(248,113,113,0.4)" },
  { name: "Git",          icon: <FaGit />,           color: "text-orange-400", glow: "rgba(251,146,60,0.4)" },
  { name: "MySQL",        icon: <SiMysql />,         color: "text-blue-300",   glow: "rgba(147,197,253,0.4)" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />,   color: "text-teal-400",   glow: "rgba(45,212,191,0.4)" },
  { name: "Java",         icon: <FaJava />,          color: "text-red-300",    glow: "rgba(252,165,165,0.4)" },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show:   { opacity: 1, y: 0,  scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 } },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 text-center text-white relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-5xl mx-auto px-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: `0 0 24px ${skill.glow}`,
              borderColor: "rgba(6,182,212,0.7)",
            }}
            className="glass-card p-6 flex flex-col items-center gap-3 cursor-default group"
          >
            <div
              className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg`}
            >
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-300 tracking-wide group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}