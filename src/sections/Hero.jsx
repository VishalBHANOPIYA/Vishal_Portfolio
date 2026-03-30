import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa"

import profile from "../assets/passport.png"

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-grid h-screen flex items-center justify-center text-white px-6 relative overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center gap-14 z-10">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-lg opacity-60 scale-110 pulse-halo" />
          <img
            src={profile}
            alt="Vishal Bhanopiya"
            className="relative w-48 h-48 rounded-full border-4 border-cyan-400/70 object-cover float-anim"
          />

        </motion.div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">



          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 gradient-text"
          >
            Vishal Bhanopiya
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-300 mb-2 min-h-[2rem]"
          >
            <TypeAnimation
              sequence={[
                "Python Developer", 1800,
                "Web Developer", 1800,
                "Cybersecurity Enthusiast", 1800,
                "ML/AI Explorer", 1800,
              ]}
              speed={55}
              repeat={Infinity}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-400 text-sm mb-10 max-w-sm mx-auto md:mx-0"
          >
            CSE student passionate about building impactful software — from web apps to intelligent systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="https://github.com/VishalBHANOPIYA"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-xl hover:brightness-110 transition"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/vishal-bhanopiya-9a9b642a9"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn flex items-center gap-2 px-6 py-3 bg-white/5 border border-cyan-400/40 backdrop-blur-md text-white font-semibold rounded-xl hover:border-cyan-400 hover:bg-cyan-400/10 transition"
            >
              <FaLinkedin className="text-lg text-cyan-400" />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download
              className="glow-btn flex items-center gap-2 px-6 py-3 bg-white/5 border border-purple-400/40 backdrop-blur-md text-white font-semibold rounded-xl hover:border-purple-400 hover:bg-purple-400/10 transition"
            >
              <FaDownload className="text-lg text-purple-400" />
              Resume
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}