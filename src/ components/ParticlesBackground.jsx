import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background:{ color:"#020617" },
        particles:{
          number:{ value:60 },
          color:{ value:"#00ffff" },
          links:{
            enable:true,
            color:"#00ffff",
            distance:150
          },
          move:{ enable:true, speed:2 }
        }
      }}
      style={{
        position:"fixed",
        top:0,
        zIndex:-2
      }}
    />
  )
}