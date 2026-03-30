import { motion } from "framer-motion"

export default function GithubStats() {
  return (
    <section id="github" className="py-32 text-white text-center relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        GitHub Stats
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-8 max-w-4xl mx-auto px-6"
      >
        {/* Profile Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-3 w-full max-w-3xl"
        >
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=VishalBHANOPIYA&theme=tokyonight"
            className="rounded-lg w-full"
            alt="GitHub Profile Details"
          />
        </motion.div>

        {/* Bottom row — two cards side by side */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-3"
          >
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=VishalBHANOPIYA&theme=tokyonight"
              className="rounded-lg w-full"
              alt="Top Languages"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-3"
          >
            <img
              src="https://streak-stats.demolab.com?user=VishalBHANOPIYA&theme=tokyonight&hide_border=true"
              className="rounded-lg w-full"
              alt="GitHub Streak"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}