import { useEffect, useRef } from "react"

export default function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animId
    let mouse = { x: null, y: null }

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    // Create particles
    const COUNT = 80
    const particles = Array.from({ length: COUNT }, () => ({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      vx:  (Math.random() - 0.5) * 0.4,
      vy:  (Math.random() - 0.5) * 0.4,
      r:   Math.random() * 1.5 + 0.5,
    }))

    const LINK_DIST   = 140
    const MOUSE_DIST  = 180

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      // Draw links between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(6,182,212,${alpha})`
            ctx.lineWidth   = 0.6
            ctx.stroke()
          }
        }

        // Link particles near mouse
        if (mouse.x !== null) {
          const dx   = particles[i].x - mouse.x
          const dy   = particles[i].y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_DIST) {
            const alpha = (1 - dist / MOUSE_DIST) * 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`
            ctx.lineWidth   = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw particles (dots)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(6,182,212,0.7)"
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <>
      {/* Pure dark background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -10, background: "#03071e" }}
      />

      {/* Subtle dot grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -9,
          backgroundImage: "radial-gradient(rgba(6,182,212,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Constellation canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -8 }}
      />

      {/* Edge gradient blobs — very subtle */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -7 }}>
        <div style={{
          position: "absolute", top: "-150px", left: "-150px",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-200px", right: "-200px",
          width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)",
        }} />
      </div>
    </>
  )
}