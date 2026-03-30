import { motion } from "framer-motion"

export default function Loader(){

return(

<div className="fixed inset-0 flex items-center justify-center bg-black z-50">

<motion.h1
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
className="text-4xl text-cyan-400 font-bold"
>

Loading Portfolio...

</motion.h1>

</div>

)

}