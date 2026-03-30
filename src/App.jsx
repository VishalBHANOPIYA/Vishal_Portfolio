import { useState, useEffect } from "react"

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Loader from "./components/Loader.jsx"
import CursorTrail from "./components/CursorTrail.jsx"

import ParticlesBackground from "./components/ParticlesBackground.jsx"
import ScrollBar from "./components/ScrollBar.jsx"
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