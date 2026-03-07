import { useState } from "react"

export default function Cursor(){

const [pos,setPos]=useState({x:0,y:0})

window.addEventListener("mousemove",(e)=>{
setPos({x:e.clientX,y:e.clientY})
})

return(

<div
style={{
position:"fixed",
top:pos.y,
left:pos.x,
width:"15px",
height:"15px",
background:"#00ffff",
borderRadius:"50%",
pointerEvents:"none",
transform:"translate(-50%,-50%)",
zIndex:999
}}
/>

)

}