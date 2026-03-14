import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function ServiceItem({ title, icon, refProp }) {
  return (
    <div
      ref={refProp}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        opacity: 0
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(251,191,36,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem"
        }}
      >
        {icon}
      </div>

      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.95rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.85)"
        }}
      >
        {title}
      </span>
    </div>
  )
}

export default function Services() {

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  const item1 = useRef(null)
  const item2 = useRef(null)
  const item3 = useRef(null)
  const item4 = useRef(null)

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(titleRef.current,{
        y:80,
        opacity:0,
        duration:1,
        scrollTrigger:{
          trigger:sectionRef.current,
          start:"top 80%"
        }
      })

      gsap.from(subtitleRef.current,{
        y:30,
        opacity:0,
        duration:1,
        delay:.2,
        scrollTrigger:{
          trigger:sectionRef.current,
          start:"top 80%"
        }
      })

      gsap.to(
        [item1.current,item2.current,item3.current,item4.current],
        {
          opacity:1,
          y:0,
          stagger:.2,
          duration:.6,
          scrollTrigger:{
            trigger:sectionRef.current,
            start:"top 70%"
          }
        }
      )

    },sectionRef)

    return ()=>ctx.revert()

  },[])

  return (

    <div
      ref={sectionRef}
      style={{
        background:"#080810",
        padding:"140px 20px"
      }}
    >

      <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>

        <h2
          ref={titleRef}
          style={{
            fontFamily:"Georgia, serif",
            fontSize:"clamp(3rem,5vw,4rem)",
            color:"#f5f2ee",
            marginBottom:20
          }}
        >
          Our Services
        </h2>

        <p
          ref={subtitleRef}
          style={{
            fontFamily:"Courier New, monospace",
            fontSize:"1rem",
            color:"rgba(255,255,255,0.55)",
            lineHeight:2,
            marginBottom:60
          }}
        >
          We create stylish, comfortable and premium quality t-shirts
          designed for everyday wear.
        </p>

        <div
          style={{
            display:"grid",
            gap:24,
            justifyContent:"center"
          }}
        >

          <ServiceItem refProp={item1} icon="👕" title="Premium Cotton T-Shirts"/>
          <ServiceItem refProp={item2} icon="🎨" title="Unique Graphic Designs"/>
          <ServiceItem refProp={item3} icon="🧵" title="High Quality Stitching"/>
          <ServiceItem refProp={item4} icon="✨" title="Modern Street Style"/>

        </div>

      </div>

    </div>
  )
}