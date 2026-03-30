import { motion } from "framer-motion"

export default function GithubGraph() {
  return (
    <section className="py-20 text-center text-white relative overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        GitHub Contributions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="glass-card max-w-4xl mx-auto px-6 py-10 animated-border"
      >
        <img
          src="https://ghchart.rshah.org/06b6d4/VishalBHANOPIYA"
          className="mx-auto w-full rounded-lg"
          alt="GitHub Contribution Graph"
        />
      </motion.div>
    </section>
  )
}