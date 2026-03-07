import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { useState } from "react"

import ProjectModal from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/ components/ProjectModal.jsx"

import dashboard from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/assets/projects/dashboard.png"
import overview from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/assets/projects/overview.png"

export default function Projects(){

const [selectedProject,setSelectedProject]=useState(null)

const projects=[

{
title:"BirthdayPro",
desc:"Full-stack Flask application for managing birthdays with WhatsApp reminders, CSV import, analytics dashboard and automated scheduling.",
images:[dashboard,overview],
github:"#",
demo:"#",
tech:["Python","Flask","MySQL","Twilio","APScheduler"],
features:[
"WhatsApp birthday reminders",
"CSV birthday import",
"Analytics dashboard",
"Automated scheduler"
]
},

{
title:"Fasal Hustle",
desc:"Plant disease detection web application using machine learning.",
images:[],
github:"#",
demo:"#",
tech:["Python","Flask","Machine Learning"],
features:[
"Plant disease detection",
"Image upload",
"Prediction system"
]
},

{
title:"Password Strength Analyzer",
desc:"Cybersecurity tool for analyzing password strength and generating secure wordlists.",
images:[],
github:"#",
demo:"#",
tech:["Python","Security"],
features:[
"Password strength analysis",
"Entropy calculation",
"Wordlist generator"
]
},

{
title:"Chaitanya",
desc:"Mental health support web platform designed to provide resources and emotional support.",
images:[],
github:"#",
demo:"#",
tech:["HTML","CSS","JavaScript"],
features:[
"Mental health resources",
"User support tools",
"Interactive UI"
]
}

]

return(

<section id="projects" className="py-32 text-white text-center">

<h2 className="text-5xl font-bold text-cyan-400 mb-16">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

{projects.map((p,index)=>(

<Tilt
key={index}
glareEnable={true}
glareMaxOpacity={0.3}
scale={1.05}
>

<motion.div
whileHover={{scale:1.03}}
onClick={()=>setSelectedProject(p)}
className="cursor-pointer border border-cyan-400 p-8 rounded-xl bg-black/40 backdrop-blur-md"
>

{/* Images */}

{p.images.length>0 &&(

<div className="grid grid-cols-2 gap-3 mb-4">

{p.images.map((img,i)=>(

<img
key={i}
src={img}
className="rounded-lg hover:scale-105 transition"
/>

))}

</div>

)}

<h3 className="text-2xl font-bold mb-4">
{p.title}
</h3>

<p className="text-gray-300">
{p.desc}
</p>

{/* Tech Stack */}

<div className="flex flex-wrap gap-2 mt-4 justify-center">

{p.tech.map((t,i)=>(

<span
key={i}
className="px-3 py-1 text-sm border border-cyan-400 rounded-full"
>
{t}
</span>

))}

</div>

{/* Features */}

<ul className="text-gray-400 text-sm mt-4 space-y-1">

{p.features.map((f,i)=>(

<li key={i}>
• {f}
</li>

))}

</ul>

{/* Buttons */}

<div className="mt-6 flex gap-4 justify-center">

<a
href={p.github}
target="_blank"
className="px-4 py-2 bg-cyan-400 text-black rounded-lg hover:opacity-80"
>
GitHub
</a>

<a
href={p.demo}
target="_blank"
className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
>
Live Demo
</a>

</div>

</motion.div>

</Tilt>

))}

</div>

<ProjectModal
project={selectedProject}
onClose={()=>setSelectedProject(null)}
/>

</section>

)

}