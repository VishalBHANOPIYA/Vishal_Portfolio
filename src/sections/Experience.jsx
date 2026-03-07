import { motion } from "framer-motion"

export default function Experience(){

const experience=[

{
year:"2026",
title:"Frontend Intern - IMC",
desc:"Worked on frontend development using HTML, CSS and JavaScript , React "
},

{
year:"2025",
title:"Cyber Security Intern - Elevate Labs",
desc:"Worked on password security, vulnerability analysis and ethical hacking basics."
}

]

return(

<section id="experience" className="py-32 text-white text-center">

<h2 className="text-5xl font-bold text-cyan-400 mb-20">
Experience
</h2>

<div className="max-w-3xl mx-auto space-y-10">

{experience.map((exp,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="border border-cyan-400 p-8 rounded-xl bg-black/40 backdrop-blur-md"
>

<h3 className="text-2xl font-bold">{exp.title}</h3>

<p className="text-cyan-300">{exp.year}</p>

<p className="text-gray-300 mt-2">{exp.desc}</p>

</motion.div>

))}

</div>

</section>

)

}