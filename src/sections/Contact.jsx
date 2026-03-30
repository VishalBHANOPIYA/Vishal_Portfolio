import { motion } from "framer-motion"
import { useState } from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa"

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate send
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-32 text-white relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="section-heading text-center"
      >
        Get In Touch
      </motion.h2>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-400 leading-relaxed">
            I'm currently open to exciting new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:vishal@example.com"
              className="flex items-center gap-4 p-4 glass-card group"
            >
              <FaEnvelope className="text-cyan-400 text-xl group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <p className="text-gray-200 text-sm font-medium">vishal@example.com</p>
              </div>
            </a>

            <a
              href="https://github.com/VishalBHANOPIYA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-card group"
            >
              <FaGithub className="text-cyan-400 text-xl group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-gray-500 mb-0.5">GitHub</p>
                <p className="text-gray-200 text-sm font-medium">VishalBHANOPIYA</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/vishal-bhanopiya-9a9b642a9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-card group"
            >
              <FaLinkedin className="text-cyan-400 text-xl group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                <p className="text-gray-200 text-sm font-medium">vishal-bhanopiya</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-5"
        >
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-1.5 block">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-1.5 block">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-1.5 block">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="What's on your mind?"
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="glow-btn w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold rounded-xl hover:brightness-110 transition disabled:opacity-50"
          >
            {sent ? (
              <>✅ Message Sent!</>
            ) : (
              <><FaPaperPlane /> Send Message</>
            )}
          </motion.button>
        </motion.form>

      </div>
    </section>
  )
}