import { motion } from "framer-motion"
import { FaExternalLinkAlt, FaBookOpen } from "react-icons/fa"

export default function Research() {
  return (
    <section id="research" className="py-32 text-white relative overflow-hidden">

      <div className="absolute left-1/3 bottom-0 w-[400px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="section-heading text-center"
      >
        Research
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
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-500" />

          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 border border-purple-400/20 flex items-center justify-center flex-shrink-0">
              <FaBookOpen className="text-xl text-purple-400" />
            </div>
            <div>
              <span className="text-xs text-purple-300 font-semibold tracking-wider uppercase">Published Paper</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="px-2 py-0.5 text-xs rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 font-medium">
                  IJERT
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4 leading-snug">
            TimeSync: Efficient Timetable Management
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            This research focuses on optimizing academic timetable generation using automated scheduling techniques.
            The study explores conflict-free scheduling, classroom allocation and subject management to reduce manual
            work and improve institutional efficiency.
          </p>

          <a
            href="https://www.researchgate.net/publication/399694574_TimeSync_Efficient_Timetable_Management"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-xl hover:brightness-110 transition"
          >
            <FaExternalLinkAlt className="text-xs" />
            View Paper
          </a>
        </div>
      </motion.div>
    </section>
  )
}