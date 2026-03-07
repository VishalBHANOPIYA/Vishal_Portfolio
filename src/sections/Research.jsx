import { motion } from "framer-motion"

export default function Research(){

return(

<section id="research" className="py-32 text-white text-center">

<h2 className="text-5xl font-bold text-cyan-400 mb-16">
Research
</h2>

<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="border border-cyan-400 p-10 rounded-xl max-w-3xl mx-auto bg-black/40 backdrop-blur-md"
>

<h3 className="text-2xl font-bold mb-3">
TimeSync: Efficient Timetable Management
</h3>

<p className="text-gray-400 mb-6">

Published in <span className="text-cyan-400">IJERT</span>.
This research focuses on optimizing academic timetable generation
using automated scheduling techniques. The study explores
conflict-free scheduling, classroom allocation and subject management
to reduce manual work and improve institutional efficiency.

</p>

<a
href="https://www.researchgate.net/publication/399694574_TimeSync_Efficient_Timetable_Management"
target="_blank"
rel="noopener noreferrer"
className="px-6 py-3 bg-cyan-400 text-black rounded-lg hover:opacity-80 transition"
>
View Paper
</a>

</motion.div>

</section>

)

}