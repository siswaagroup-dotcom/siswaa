import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function ChapterTag({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "1.1rem",
          fontWeight: "bold",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          color: "rgba(0,0,0,0.3)",
        }}
      >
        {String(number).padStart(2, "0")} — {label}
      </span>

      <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.1)" }} />
    </div>
  )
}

function ImageCard({ src, alt, label }) {
  return (
    <div
      style={{
        width: 280,
        background: "#e8e4df",
        padding: 12,
        boxShadow: "0 30px 80px rgba(0,0,0,0.14)"
      }}
    >

      <div
        style={{
          height: 360,
          overflow: "hidden",
          position: "relative"
        }}
      >

        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10
        }}
      >
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.5
          }}
        >
          {label}
        </span>

      </div>

    </div>
  )
}

export default function AboutUs() {

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  const valuesRef = useRef(null)

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

      gsap.from(bodyRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: .2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      })

      gsap.from(valuesRef.current.children, {
        opacity: 0,
        y: 40,
        stagger: .15,
        duration: .8,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%"
        }
      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  const values = [
    {
      label: "Premium Quality",
      desc: "Every t-shirt is crafted using high quality cotton and durable stitching."
    },
    {
      label: "Modern Design",
      desc: "Clean and minimal designs inspired by modern streetwear culture."
    },
    {
      label: "Comfort First",
      desc: "Our pieces are designed for everyday comfort and effortless style."
    },
    {
      label: "Growing Brand",
      desc: "We are constantly creating new collections for the next generation of fashion."
    }
  ]

  const images = [
    { src: "/model1.png", label: "Street Style" },
    { src: "/model2.png", label: "Minimal Wear" },
    { src: "/model3.png", label: "New Collection" }
  ]

  return (

    <section
      ref={sectionRef}
      id="about"
      style={{
        background: "#f5f2ee",
        padding: "120px 20px"
      }}
    >

      <div
        style={{
          maxWidth: 1200,
          margin: "auto"
        }}
      >

        <ChapterTag number={3} label="About Us" />

        <h2
          ref={titleRef}
          style={{
            fontFamily: "Georgia,serif",
            fontSize: "clamp(3rem,6vw,5rem)",
            marginBottom: 30
          }}
        >
          A Brand Built For
          <br/>
          Everyday Style
        </h2>

        <p
          ref={bodyRef}
          style={{
            fontFamily: "'Courier New', monospace",
            lineHeight: 2,
            maxWidth: 650,
            opacity: .6
          }}
        >
          Our brand was created with a simple mission — to design
          t-shirts that combine comfort, minimal style and modern
          streetwear identity.

          <br/><br/>

          SISWAA Fashion was founded by <b>Atul Singh Bhadouria</b> and
          <b> Abhishek Sharma</b>, with the vision of building a brand
          that reflects confidence, simplicity and everyday fashion.

          <br/><br/>

          Each piece reflects our belief that clothing should feel
          effortless, comfortable and timeless.
        </p>

      </div>

      {/* Image Row */}

      <div
        style={{
          maxWidth: 1200,
          margin: "80px auto",
          display: "flex",
          gap: 30,
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >

        {images.map((img, i) => (
          <ImageCard key={i} src={img.src} label={img.label} />
        ))}

      </div>

      {/* Values */}

      <div
        ref={valuesRef}
        style={{
          maxWidth: 1200,
          margin: "100px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 40
        }}
      >

        {values.map((v, i) => (

          <div key={i}>

            <div
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: ".8rem",
                letterSpacing: ".4em",
                opacity: .4,
                marginBottom: 12
              }}
            >
              0{i + 1}
            </div>

            <h3
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "1.3rem",
                marginBottom: 10
              }}
            >
              {v.label}
            </h3>

            <p
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: ".9rem",
                lineHeight: 1.8,
                opacity: .6
              }}
            >
              {v.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}