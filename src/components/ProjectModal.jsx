export default function ProjectModal({project,onClose}){

if(!project) return null

return(

<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

<div className="bg-[#020617] p-10 rounded-xl max-w-2xl border border-cyan-400">

<h2 className="text-3xl text-cyan-400 mb-4">
{project.title}
</h2>

<p className="text-gray-300 mb-6">
{project.desc}
</p>

{/* Images */}

{project.images?.length>0 &&(

<div className="grid grid-cols-2 gap-4 mb-6">

{project.images.map((img,i)=>(

<img
key={i}
src={img}
className="rounded-lg"
/>

))}

</div>

)}

{/* Tech stack */}

<div className="flex flex-wrap gap-2 mb-6">

{project.tech?.map((t,i)=>(

<span
key={i}
className="px-3 py-1 text-sm border border-cyan-400 rounded-full"
>
{t}
</span>

))}

</div>

{/* Features */}

<ul className="text-gray-400 mb-6 space-y-1">

{project.features?.map((f,i)=>(

<li key={i}>
• {f}
</li>

))}

</ul>

<div className="flex gap-4">

<a
href={project.github}
target="_blank"
className="px-4 py-2 bg-cyan-400 text-black rounded-lg"
>
GitHub
</a>

<a
href={project.demo}
target="_blank"
className="px-4 py-2 border border-cyan-400 rounded-lg"
>
Live Demo
</a>

</div>

<button
onClick={onClose}
className="mt-6 text-red-400"
>
Close
</button>

</div>

</div>

)

}