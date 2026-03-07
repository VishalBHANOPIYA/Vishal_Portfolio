import { useEffect, useState } from "react"

export default function ScrollBar(){

const [scroll,setScroll]=useState(0)

useEffect(()=>{

const handleScroll=()=>{

const totalHeight=
document.documentElement.scrollHeight-
document.documentElement.clientHeight

const progress=
(window.scrollY/totalHeight)*100

setScroll(progress)

}

window.addEventListener("scroll",handleScroll)

return()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<div
style={{
position:"fixed",
top:0,
left:0,
height:"4px",
width:scroll+"%",
background:"#06b6d4",
zIndex:100
}}
/>

)

}