import { motion } from "framer-motion"

export default function Navbar(){

return(

<nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 bg-black/30 backdrop-blur-md text-white z-50">

<motion.h1
initial={{opacity:0}}
animate={{opacity:1}}
className="text-2xl font-bold text-cyan-400"
>
VISH
</motion.h1>

<ul className="flex gap-8 text-lg">

<li>
<a href="#hero" className="hover:text-cyan-400 transition">
Home
</a>
</li>

<li>
<a href="#skills" className="hover:text-cyan-400 transition">
Skills
</a>
</li>

<li>
<a href="#projects" className="hover:text-cyan-400 transition">
Projects
</a>
</li>

<li>
<a href="#contact" className="hover:text-cyan-400 transition">
Contact
</a>
</li>

</ul>

</nav>

)

}