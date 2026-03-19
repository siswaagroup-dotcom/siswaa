import { useEffect, useState } from "react"

function NavLink({ href, children, color }) {

  const [hover,setHover] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        position:"relative",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:3,
        fontFamily:"Courier New, monospace",
        fontSize:"0.7rem",
        letterSpacing:"0.35em",
        textTransform:"uppercase",
        textDecoration:"none",
        color:color
      }}
    >

      <span>{children}</span>

      <div
        style={{
          height:1,
          width:"100%",
          background:"currentColor",
          transform:hover ? "scaleX(1)" : "scaleX(0)",
          transformOrigin:"left",
          transition:"transform 0.3s"
        }}
      />

    </a>
  )
}

function MobileLink({ href, children, number, onClick }) {

  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"25px 0",
        borderBottom:"1px solid rgba(255,255,255,0.07)",
        textDecoration:"none"
      }}
    >

      <div style={{display:"flex",alignItems:"center",gap:20}}>

        <span
          style={{
            fontFamily:"Courier New",
            fontSize:".6rem",
            letterSpacing:".35em",
            color:"rgba(255,255,255,.3)"
          }}
        >
          {String(number).padStart(2,"0")}
        </span>

        <span
          style={{
            fontFamily:"Georgia",
            fontSize:"1.8rem",
            fontWeight:"bold",
            color:"#f5f2ee"
          }}
        >
          {children}
        </span>

      </div>

      <span style={{color:"rgba(255,255,255,.3)"}}>→</span>

    </a>
  )
}

export default function Navbar(){

  const [scrolled,setScrolled] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false)
  const [scrollPct,setScrollPct] = useState(0)
  const [isMobile,setIsMobile] = useState(false)

  const links = [
    { name:"Home", href:"#home" },
    { name:"About", href:"#about" },
    { name:"Service", href:"#service" },
    { name:"Contact", href:"#contact" }
  ]

  useEffect(()=>{

    const checkSize = () => setIsMobile(window.innerWidth < 1024)

    checkSize()

    window.addEventListener("resize",checkSize)

    return ()=>window.removeEventListener("resize",checkSize)

  },[])

  useEffect(()=>{

    const onScroll = () => {

      const pct =
        (window.scrollY /
        (document.body.scrollHeight - window.innerHeight))*100

      setScrollPct(pct)
      setScrolled(window.scrollY > 40)

    }

    window.addEventListener("scroll",onScroll)

    return ()=>window.removeEventListener("scroll",onScroll)

  },[])

  const textColor = scrolled || menuOpen ? "#1a1a1a" : "#ffffff"

  return (
    <>
      <nav
        style={{
          position:"fixed",
          top:0,
          left:0,
          right:0,
          zIndex:9999,
          background: scrolled ? "rgba(245,242,238,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          transition:"all 0.3s"
        }}
      >

        {/* progress line */}

        <div
          style={{
            position:"absolute",
            bottom:0,
            left:0,
            height:2,
            width:`${scrollPct}%`,
            background:"#fbbf24"
          }}
        />

        <div
          style={{
            maxWidth:1200,
            margin:"0 auto",
            padding:"0 30px",
            height:70,
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between"
          }}
        >

        <a
  href="#home"
  style={{
    fontFamily:"Georgia",
    fontWeight:"bold",
    letterSpacing:".2em",
    textDecoration:"none",
    color:textColor
  }}
>
  SIS<span style={{color:"#fbbf24"}}>WAA</span>
</a>

          {!isMobile && (
            <div style={{display:"flex",gap:40}}>
              {links.map((l,i)=>(
                <NavLink key={i} href={l.href} color={textColor}>
                  {l.name}
                </NavLink>
              ))}
            </div>
          )}

          {isMobile && (
            <button
              onClick={()=>setMenuOpen(!menuOpen)}
              style={{
                background:"none",
                border:"none",
                cursor:"pointer",
                display:"flex",
                flexDirection:"column",
                gap:5
              }}
            >

              <div style={{width:24,height:2,background:textColor}}/>
              <div style={{width:18,height:2,background:textColor}}/>
              <div style={{width:24,height:2,background:textColor}}/>

            </button>
          )}

        </div>

      </nav>

      {/* mobile menu */}

      <div
        style={{
          position:"fixed",
          inset:0,
          background:"#0f0f14",
          zIndex:9998,
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition:"transform 0.4s"
        }}
      >

        <div style={{padding:"140px 40px"}}>

          {links.map((l,i)=>(
            <MobileLink
              key={i}
              href={l.href}
              number={i+1}
              onClick={()=>setMenuOpen(false)}
            >
              {l.name}
            </MobileLink>
          ))}

        </div>

      </div>

    </>
  )
}