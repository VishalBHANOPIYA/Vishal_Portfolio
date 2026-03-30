import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa"
import { motion } from "framer-motion"

const socials = [
  { icon: <FaGithub />,   href: "https://github.com/VishalBHANOPIYA",              label: "GitHub"   },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/vishal-bhanopiya-9a9b642a9", label: "LinkedIn" },
  { icon: <FaEnvelope />, href: "mailto:vishbhanopiya@gmail.com",                   label: "Email"    },
]

export default function Footer() {
  return (
    <footer className="relative mt-10 pt-16 pb-8 text-gray-400 overflow-hidden">

      {/* Top glowing divider */}
      <div className="section-divider mb-12" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        {/* Logo */}
        <p className="text-2xl font-extrabold gradient-text tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          VISH
        </p>

        {/* Tagline */}
        <p className="text-sm text-gray-500 max-w-sm mx-auto">
          Building things with code, one project at a time. Open to collaborations and opportunities.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-6">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-lg text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/5 pt-6 text-xs text-gray-600 flex flex-wrap justify-center gap-1">
          <span>© 2026 Vishal Bhanopiya.</span>
          <span>Built with</span>
          <FaHeart className="text-red-500 inline mx-0.5 self-center" />
          <span>using React, Three.js &amp; TailwindCSS.</span>
        </div>
      </motion.div>
    </footer>
  )
}