import { useState, useEffect } from "react"

import Navbar from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/ components/Navbar.jsx"
import Footer from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/ components/Footer.jsx"
import Loader from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/ components/Loader.jsx"
import CursorTrail from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/ components/CursorTrail.jsx"
import Background3D from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/ components/Background3D.jsx"
import ParticlesBackground from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/ components/ParticlesBackground.jsx"
import ScrollBar from "/home/vish/ Vishal-portfolio/vishal-portfolio/src/ components/ScrollBar.jsx"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import GithubGraph from "./sections/GithubGraph"
import Experience from "./sections/Experience"
import Research from "./sections/Research"
import Contact from "./sections/Contact"
import GithubStats from "./sections/GithubStats"
import Education from "./sections/Education"
import Timeline from "./sections/Timeline"



function App(){

const [loading,setLoading]=useState(true)

useEffect(()=>{

setTimeout(()=>{
setLoading(false)
},2000)

},[])

if(loading){
return <Loader/>
}

return(

<>

<ParticlesBackground/>

<Background3D/>

<Navbar/>

<Hero/>

<Skills/>

<Education/>

<Timeline/>

<Projects/>

<GithubGraph/>

<GithubStats/>

<Experience/>

<Research/>

<Contact/>

<Footer/>

<CursorTrail/>

<ScrollBar/>



</>

)

}

export default App