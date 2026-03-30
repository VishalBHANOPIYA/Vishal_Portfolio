import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"

function Box(){

const mesh = useRef()

useFrame((state)=>{

mesh.current.rotation.x += 0.01
mesh.current.rotation.y += 0.01

mesh.current.position.x = state.mouse.x * 2
mesh.current.position.y = state.mouse.y * 2

})

return(

<mesh ref={mesh} position={[2,0,0]}>

<boxGeometry args={[2,2,2]} />

<meshStandardMaterial color="#06b6d4"/>

</mesh>

)

}

function SphereShape(){

const mesh = useRef()

useFrame((state)=>{

mesh.current.rotation.y += 0.01

mesh.current.position.x = state.mouse.x * -2
mesh.current.position.y = state.mouse.y * -2

})

return(

<mesh ref={mesh} position={[-3,0,0]}>

<sphereGeometry args={[1.5,32,32]}/>

<meshStandardMaterial color="#9333ea"/>

</mesh>

)

}

export default function Background3D(){

return(

<Canvas
style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100vh",
zIndex:-10
}}
>

<ambientLight intensity={0.6}/>

<directionalLight position={[5,5,5]}/>

<Box/>

<SphereShape/>

<OrbitControls enableZoom={false}/>

</Canvas>

)

}