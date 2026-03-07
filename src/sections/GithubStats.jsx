export default function GithubStats(){

return(

<section
id="github"
className="py-32 text-white text-center relative z-10"
>

<h2 className="text-5xl font-bold text-cyan-400 mb-16">
GitHub Stats
</h2>

<div className="flex flex-col items-center gap-10 max-w-4xl mx-auto">

<img
src="https://github-readme-stats.vercel.app/api?username=VishalBHANOPIYA&show_icons=true&theme=tokyonight&hide_border=true"
className="rounded-xl"
/>

<img
src="https://github-readme-stats.vercel.app/api/top-langs/?username=VishalBHANOPIYA&layout=compact&theme=tokyonight&hide_border=true"
/>

<img
src="https://streak-stats.demolab.com?user=VishalBHANOPIYA&theme=tokyonight&hide_border=true"
/>

</div>

</section>

)

}