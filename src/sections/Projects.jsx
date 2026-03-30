import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import ProjectModal from "../components/ProjectModal.jsx"

import dashboard from "../assets/projects/dashboard.png"
import overview from "../assets/projects/overview.png"

const projects = [
  {
    title: "BirthdayPro",
    emoji: "🎂",
    desc: "Full-stack Flask application for managing birthdays with WhatsApp reminders, CSV import, analytics dashboard and automated scheduling.",
    images: [dashboard, overview],
    github: "#",
    demo: "#",
    tech: ["Python", "Flask", "MySQL", "Twilio", "APScheduler"],
    features: [
      "WhatsApp birthday reminders",
      "CSV birthday import",
      "Analytics dashboard",
      "Automated scheduler",
    ],
    accentColor: "from-cyan-400 to-blue-500",
  },
  {
    title: "Fasal Hustle",
    emoji: "🌿",
    desc: "Plant disease detection web application using machine learning to help farmers identify crop issues quickly.",
    images: [],
    github: "#",
    demo: "#",
    tech: ["Python", "Flask", "Machine Learning"],
    features: [
      "Plant disease detection",
      "Image upload & prediction",
      "Real-time results",
    ],
    accentColor: "from-green-400 to-teal-500",
  },
  {
    title: "Password Strength Analyzer",
    emoji: "🔐",
    desc: "Advanced cybersecurity tool for analyzing password entropy, strength, and generating secure wordlists.",
    images: [],
    github: "#",
    demo: "#",
    tech: ["Python", "Security", "Cryptography"],
    features: [
      "Password strength analysis",
      "Entropy calculation",
      "Secure wordlist generator",
    ],
    accentColor: "from-red-400 to-orange-500",
  },
  {
    title: "Chaitanya",
    emoji: "🧠",
    desc: "Mental health support web platform designed to provide resources, emotional support, and interactive tools.",
    images: [],
    github: "#",
    demo: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Mental health resources",
      "User support tools",
      "Interactive UI",
    ],
    accentColor: "from-purple-400 to-pink-500",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-32 text-white text-center relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.12}
            glareColor="#06b6d4"
            scale={1.02}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
          >
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() => setSelectedProject(p)}
              className="glass-card p-7 text-left cursor-pointer h-full relative overflow-hidden group"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${p.accentColor} opacity-80`} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{p.emoji}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
              </div>

              {/* Images */}
              {p.images.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {p.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="rounded-lg object-cover h-28 w-full hover:scale-105 transition-transform duration-300"
                      alt=""
                    />
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 hover:border-cyan-400/70 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className="text-gray-500 text-xs space-y-1 mb-6">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-cyan-400 text-xs">▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="glow-btn flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black text-sm font-semibold rounded-lg hover:brightness-110 transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="glow-btn flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-400/30 text-sm font-semibold rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}