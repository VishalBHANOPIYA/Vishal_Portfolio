import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { label: "Home",     href: "#hero"     },
    { label: "Skills",   href: "#skills"   },
    { label: "Projects", href: "#projects" },
    { label: "GitHub",   href: "#github"   },
    { label: "Contact",  href: "#contact"  },
  ]

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-10 py-4 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(6,182,212,0.08)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-extrabold gradient-text tracking-widest select-none"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        VISH
      </motion.a>

      {/* Nav Links */}
      <ul className="flex gap-8 text-sm font-medium tracking-wide">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
            >
              {link.label}
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}