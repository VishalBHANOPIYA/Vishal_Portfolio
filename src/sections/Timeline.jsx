import { motion } from "framer-motion"

export default function Timeline(){

const timeline=[

{
year:"2023",
title:"Started B.Tech CSE",
desc:"Started Bachelor of Technology in Computer Science at Chameli Devi Group of Institutions, Indore."
},

{
year:"2025",
title:"Cyber Security Intern",
desc:"Completed Cyber Security Internship at Elevate Labs working on password security and vulnerability analysis."
},

{
year:"2025",
title:"Research Paper Published",
desc:"Published research paper 'TimeSync: Efficient Timetable Management' in IJERT."
},

{
year:"2026",
title:"Frontend Intern – IMC",
desc:"Worked as Frontend Intern with Indore Municipal Corporation building real-world web interfaces."
}

]

return(

<section id="timeline" className="py-32 text-white">

<h2 className="text-5xl font-bold text-cyan-400 text-center mb-20">
Career Journey
</h2>

<div className="relative max-w-4xl mx-auto">

{/* vertical line */}

<div className="absolute left-1/2 w-1 h-full bg-cyan-400 transform -translate-x-1/2"></div>

{timeline.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className={`mb-16 flex ${index%2===0?"justify-start":"justify-end"}`}
>

<div className="w-1/2 p-6 border border-cyan-400 rounded-xl bg-black/40 backdrop-blur-md">

<h3 className="text-xl font-bold text-cyan-400">
{item.year}
</h3>

<h4 className="text-lg mt-2">
{item.title}
</h4>

<p className="text-gray-400 mt-2">
{item.desc}
</p>

</div>

</motion.div>

))}

</div>

</section>

)

}