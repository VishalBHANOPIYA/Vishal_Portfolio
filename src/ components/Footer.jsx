import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer(){

return(

<footer className="py-12 text-center text-gray-400 border-t border-cyan-400">

<p className="text-lg mb-4">
© 2026 Vishal Bhanopiya
</p>

<div className="flex justify-center gap-8 text-2xl">

<a
href="https://github.com/VishalBHANOPIYA"
target="_blank"
className="hover:text-cyan-400 transition"
>
<FaGithub/>
</a>

<a
href="https://linkedin.com/in/vishal-bhanopiya"
target="_blank"
className="hover:text-cyan-400 transition"
>
<FaLinkedin/>
</a>

<a
href="mailto:vishbhanopiya@gmail.com"
className="hover:text-cyan-400 transition"
>
<FaEnvelope/>
</a>

</div>

<p className="mt-6 text-sm">
Built with React • Three.js • TailwindCSS
</p>

</footer>

)

}