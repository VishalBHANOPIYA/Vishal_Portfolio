export default function Contact(){

return(

<section id="contact" className="py-32 text-center text-white">

<h2 className="text-5xl font-bold text-cyan-400 mb-16">
Contact Me
</h2>

<form className="max-w-xl mx-auto space-y-6">

<input
type="text"
placeholder="Your Name"
className="w-full p-4 bg-black border border-cyan-400 rounded-lg"
/>

<input
type="email"
placeholder="Your Email"
className="w-full p-4 bg-black border border-cyan-400 rounded-lg"
/>

<textarea
placeholder="Your Message"
className="w-full p-4 bg-black border border-cyan-400 rounded-lg"
/>

<button className="px-8 py-3 bg-cyan-400 text-black rounded-lg">
Send Message
</button>

</form>

</section>

)

}