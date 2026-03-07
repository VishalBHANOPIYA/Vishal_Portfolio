import { FaPython, FaReact, FaGit } from "react-icons/fa"
import { SiCplusplus, SiJavascript, SiFlask, SiMysql } from "react-icons/si"
import { MdSecurity } from "react-icons/md"
import { motion } from "framer-motion"

export default function Skills(){
const skills=[

{ name:"Python", icon:<FaPython/> },
{ name:"C++", icon:<SiCplusplus/> },
{ name:"JavaScript", icon:<SiJavascript/> },
{ name:"React", icon:<FaReact/> },
{ name:"Flask", icon:<SiFlask/> },
{ name:"Cybersecurity", icon:<MdSecurity/> },
{ name:"Git", icon:<FaGit/> },
{ name:"MySQL", icon:<SiMysql/> }

]

return(

<motion.section
id="skills"
className="py-32 text-center text-white"
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<h2 className="text-5xl font-bold text-cyan-400 mb-16">
Skills
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
{skills.map((skill,index)=>(

<motion.div
key={index}
whileHover={{scale:1.1}}
className="border border-cyan-400 p-6 rounded-lg flex flex-col items-center gap-3"
>

<div className="text-3xl text-cyan-400">
{skill.icon}
</div>

<span>
{skill.name}
</span>

</motion.div>

))}

</div>

</motion.section>

)

}