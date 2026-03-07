import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

import profile from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/assets/passport.png"

export default function Hero(){

return(

<section
id="hero"
className="hero-grid h-screen flex items-center justify-center text-white px-6"
>

<div className="flex flex-col md:flex-row items-center gap-12">

{/* Profile Image */}

<motion.img
src={profile}
initial={{scale:0.9}}
animate={{scale:[0.9,1,0.9]}}
transition={{duration:4,repeat:Infinity}}
className="w-48 h-48 rounded-full border-4 border-cyan-400 shadow-[0_0_35px_#06b6d4]"
/>

{/* Text Section */}

<div className="text-center md:text-left">

<motion.h1
initial={{opacity:0,y:-50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-6xl font-bold text-cyan-400 drop-shadow-[0_0_25px_#06b6d4]"
>
Vishal Bhanopiya
</motion.h1>

{/* Typing Animation */}

<div className="text-xl mt-6 text-gray-300">

<TypeAnimation
sequence={[
"Python Developer",
1500,
"Web Developer",
1500,
"Cybersecurity Enthusiast",
1500
]}
speed={50}
repeat={Infinity}
/>

</div>

{/* Buttons */}

<div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start">

<a
href="https://github.com/VishalBHANOPIYA"
target="_blank"
className="px-6 py-3 bg-cyan-400 text-black rounded-lg hover:opacity-80"
>
GitHub
</a>

<a
href="https://linkedin.com/in/vishal-bhanopiya-9a9b642a9"
target="_blank"
rel="noopener noreferrer"
className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
>
LinkedIn
</a>

<a
href="/resume.pdf"
download
className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
>
Download Resume
</a>

</div>


</div>

</div>

</section>

)

}