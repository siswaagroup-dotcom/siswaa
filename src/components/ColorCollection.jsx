import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const COLORS = [
  {
    id: "black",
    label: "Black",
    hex: "#000000",
    text: "#111111",
    src: "/black-front.png",
    tag: "Bestseller"
  },
  {
    id: "white",
    label: "White",
    hex: "#ffffff",
    text: "#111111",
    src: "/white-front.png",
    tag: "Classic"
  },
  {
    id: "red",
    label: "Red",
    hex: "#e53935",
    text: "#111111",
    src: "/red-front.png",
    tag: "Limited"
  },
  {
    id: "blue",
    label: "Blue",
    hex: "#1e4db7",
    text: "#111111",
    src: "/blue-front.png",
    tag: "New"
  },
  {
    id: "lavender",
    label: "Lavender",
    hex: "#726885",
    text: "#111111",
    src: "/lavender-front.png",
    tag: "Seasonal"
  },
  {
    id: "sage",
    label: "Sage",
    hex: "#9aa69a",
    text: "#111111",
    src: "/sage-front.png",
    tag: "Eco"
  }
]

function Swatch({ color, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6
      }}
    >
      <div
        style={{
          width: active ? 44 : 32,
          height: active ? 44 : 32,
          borderRadius: "50%",
          background: color.hex,
          border: color.hex === "#ffffff" ? "1px solid #ddd" : "none",
          boxShadow: active
            ? `0 0 0 3px white,0 0 0 5px ${color.hex}`
            : `0 4px 12px ${color.hex}55`,
          transition: "all .35s"
        }}
      />

      <span
        style={{
          fontFamily: "'Courier New',monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          opacity: active ? 1 : 0.4
        }}
      >
        {color.label}
      </span>
    </button>
  )
}

export default function ColorCollection() {

  const [activeIdx, setActiveIdx] = useState(0)

  const sectionRef = useRef(null)
  const tshirtRef = useRef(null)
  const titleRef = useRef(null)

  const active = COLORS[activeIdx]

  const switchColor = (idx) => {

    if (idx === activeIdx) return

    gsap.to(tshirtRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: .25,
      onComplete: () => {

        setActiveIdx(idx)

        gsap.fromTo(
          tshirtRef.current,
          { scale: .9, opacity: 0 },
          { scale: 1, opacity: 1, duration: .35 }
        )

      }
    })
  }

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      })

      gsap.from(tshirtRef.current, {
        scale: .7,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (

    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#f3f3f3",
        color: "#111"
      }}
    >

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "auto",
          padding: "80px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center"
        }}
      >

        {/* Left Shirt */}
        <div style={{ textAlign: "center" }}>
          <img
            ref={tshirtRef}
            src={active.src}
            alt={active.label}
            style={{
              width: "min(320px,80%)",
              filter: `drop-shadow(0 40px 70px ${active.hex}55)`
            }}
          />
        </div>

        {/* Right Content */}
        <div>

          <h2
            ref={titleRef}
            style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(2.5rem,5vw,4rem)",
              marginBottom: 20
            }}
          >
            Choose Your Color
          </h2>

          <div
            style={{
              fontFamily: "'Courier New',monospace",
              letterSpacing: ".3em",
              textTransform: "uppercase",
              fontSize: ".6rem",
              opacity: .6,
              marginBottom: 12
            }}
          >
            {active.tag}
          </div>

          <div
            style={{
              fontSize: "1.8rem",
              fontFamily: "Georgia,serif",
              marginBottom: 30
            }}
          >
            {active.label}
          </div>

          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap"
            }}
          >
            {COLORS.map((color, i) => (
              <Swatch
                key={color.id}
                color={color}
                active={i === activeIdx}
                onClick={() => switchColor(i)}
              />
            ))}
          </div>

          <div
            style={{
              marginTop: 40,
              fontFamily: "'Courier New',monospace",
              fontSize: ".65rem",
              letterSpacing: ".2em",
              opacity: .6,
              lineHeight: 2
            }}
          >
            280 GSM Premium Cotton<br/>
            Unisex Fit<br/>
            Pre-washed Fabric<br/>
            Designed for Daily Wear
          </div>

        </div>

      </div>

    </section>

  )
}