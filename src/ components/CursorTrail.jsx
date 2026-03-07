import { useState, useEffect } from "react"

export default function CursorTrail(){

const [pos,setPos]=useState({x:0,y:0})

useEffect(()=>{

const move=(e)=>{
setPos({x:e.clientX,y:e.clientY})
}

window.addEventListener("mousemove",move)

return()=>{
window.removeEventListener("mousemove",move)
}

},[])

return(

<div
style={{
position:"fixed",
top:pos.y,
left:pos.x,
width:"15px",
height:"15px",
background:"#06b6d4",
borderRadius:"50%",
pointerEvents:"none",
transform:"translate(-50%,-50%)",
zIndex:999
}}
/>

)

}