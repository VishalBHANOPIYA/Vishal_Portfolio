import { motion } from "framer-motion"

export default function Education(){

return(

<section id="education" className="py-32 text-white text-center">

<h2 className="text-5xl font-bold text-cyan-400 mb-16">
Education
</h2>

<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="border border-cyan-400 p-10 rounded-xl max-w-3xl mx-auto bg-black/40 backdrop-blur-md"
>

<h3 className="text-2xl font-bold mb-2">
Chameli Devi Group of Institutions
</h3>

<p className="text-cyan-400 mb-2">
B.Tech – Computer Science & Engineering
</p>

<p className="text-gray-400 mb-6">
2023 – 2027 | Indore, Madhya Pradesh
</p>

<p className="text-gray-300">

Relevant Coursework: Data Structures, Object-Oriented Programming,
Computer Organization & Architecture.

</p>

</motion.div>

</section>

)

}