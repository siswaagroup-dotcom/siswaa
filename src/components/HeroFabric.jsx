import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// ─── Needle ───────────────────────────────────────────────────────────────────
function Needle({ needleRef }) {
  return (
    <div
      ref={needleRef}
      style={{
        position: "fixed", zIndex: 9999, left: "50%", top: "120px",
        transform: "translate(-50%, -50%) rotate(0deg)",
        width: 56, height: 56, pointerEvents: "none",
        willChange: "transform, left, top",
        filter: "drop-shadow(0 0 6px rgba(251,191,36,0.9))",
      }}
    >
      <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
        <defs>
          <filter id="needleGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="needleGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="50%" stopColor="#f5d98c" />
            <stop offset="100%" stopColor="#c9a84c" />
          </linearGradient>
        </defs>
        <ellipse cx="24" cy="24" rx="2.8" ry="19" fill="url(#needleGrad)" filter="url(#needleGlow)" />
        <polygon points="24,44 21,39 27,39" fill="#f5d98c" filter="url(#needleGlow)" />
        <ellipse cx="24" cy="7" rx="3" ry="2" fill="#e2c77a" />
        <ellipse cx="24" cy="10" rx="2.2" ry="3.2" fill="#0a0a0f" stroke="#f5d98c" strokeWidth="1" />
        <path d="M24 6.5 Q28 4 30 7" fill="none" stroke="rgba(251,191,36,0.9)" strokeWidth="0.9" strokeLinecap="round" />
        <ellipse cx="22" cy="22" rx="0.6" ry="8" fill="rgba(255,255,255,0.25)" />
      </svg>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection({ sectionRef, titleRef, subtitleRef }) {
  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: "#0a0a0f" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(251,191,36,0.03) 2px, rgba(251,191,36,0.03) 4px), repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)`,
        backgroundSize: "20px 20px",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(251,191,36,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300/80 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Courier New', monospace" }}>
          <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
          New Collection 2026
        </div>

        <h1 ref={titleRef} className="font-black tracking-tighter mb-6 leading-none"
          style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
          <span className="hero-line block" style={{ overflow: "hidden" }}>
            <span className="hero-inner block text-white">Wear</span>
          </span>
          <span className="hero-line block" style={{ overflow: "hidden" }}>
            <span className="hero-inner block" style={{ color: "#fbbf24" }}>Your</span>
          </span>
          <span className="hero-line block" style={{ overflow: "hidden" }}>
            <span className="hero-inner block text-white">Identity</span>
          </span>
        </h1>

        <p ref={subtitleRef} className="text-lg sm:text-2xl mb-10 tracking-widest"
          style={{ fontFamily: "'Courier New', monospace", color: "rgba(255,255,255,0.5)", letterSpacing: "0.25em", opacity: 0 }}>
          PREMIUM · MINIMAL · TIMELESS
        </p>
      </div>

      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-amber-400/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-amber-400/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-amber-400/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-amber-400/20" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", letterSpacing: "0.3em" }}>
        <span>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}

// ─── Story ────────────────────────────────────────────────────────────────────
function StorySection({ storyRef }) {
  return (
    <section ref={storyRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#0d0d14" }}>
      {/* Diagonal wipe overlay — covers whole section, clips away on scroll */}
      <div className="story-wipe absolute inset-0" style={{ background: "#0d0d14", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", zIndex: 5 }} />

      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(251,191,36,0.06) 0%, transparent 50%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="story-left" style={{ opacity: 0, transform: "scale(0.75)" }}>
          <div style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(6rem, 20vw, 14rem)", color: "rgba(251,191,36,0.08)", lineHeight: 1, letterSpacing: "-0.05em", fontWeight: 900, textAlign: "center" }}>01</div>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.7rem", letterSpacing: "0.4em", color: "rgba(251,191,36,0.5)", textTransform: "uppercase", textAlign: "center", marginTop: "-2rem" }}>The Craft</div>
        </div>
        <div className="story-right space-y-6" style={{ opacity: 0, transform: "translateX(60px)" }}>
          <h2 className="font-bold text-white" style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.15 }}>
            Every thread tells<br /><span style={{ color: "#fbbf24" }}>a story.</span>
          </h2>
          <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 2 }}>
            Handpicked fabrics. Meticulous cuts.<br />Each piece crafted for those who wear<br />intention like a second skin.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="w-8 h-px bg-amber-400/40" />
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", letterSpacing: "0.4em", color: "rgba(251,191,36,0.4)" }}>EST. 2020</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-12">
        <div className="flex items-center gap-3 opacity-30">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{ width: i === 4 ? 6 : 3, height: i === 4 ? 6 : 3, background: i === 4 ? "#fbbf24" : "rgba(255,255,255,0.5)" }} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Products ─────────────────────────────────────────────────────────────────
function ProductsSection({ productsRef }) {
  const items = [
    { name: "The Obsidian", tag: "Minimalist", price: "₹599", image: "/minimal-front.png" },
    { name: "The Sovereign", tag: "Statement", price: "₹599", image: "/statement-front.png" },
    { name: "The Reverie", tag: "Limited", price: "₹599", image: "/reverie-front.png" },
  ]
  return (
    <section ref={productsRef} className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#f5f2ee" }}>
      {/* Right-to-left diagonal wipe */}
      <div className="products-wipe absolute inset-0" style={{ background: "#f5f2ee", clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", zIndex: 5 }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="mb-16" style={{ overflow: "hidden" }}>
          <div className="products-header" style={{ transform: "translateY(100%)" }}>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", letterSpacing: "0.5em", color: "rgba(0,0,0,0.5)", textTransform: "uppercase" }}>02 — Collection</span>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#1a1a1a", margin: 0 }}>The Edit.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="product-card group relative overflow-hidden cursor-pointer"
              style={{ border: "1px solid rgba(0,0,0,0.08)", background: "#ffffff", padding: "2rem", borderRadius: 10, opacity: 0, transform: "scale(0.85) translateY(50px)" }}>
              <div className="w-full mb-6 flex items-center justify-center" style={{ height: 260, background: "linear-gradient(135deg,#ffffff,#f3f3f3)", borderRadius: 8, padding: 10 }}>
                <img src={item.image} alt={item.name} style={{ width: "180px", objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))", transition: "transform 0.35s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
              </div>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.8rem", fontWeight: "bold", letterSpacing: "0.3em", color: "#008080", marginBottom: 8 }}>{item.tag}</div>
              <div style={{ fontFamily: "'Georgia', serif", fontSize: "1.2rem", color: "#1a1a1a", marginBottom: 10 }}>{item.name}</div>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: ".8rem", color: "rgba(0,0,0,0.6)" }}>{item.price}</div>
              <div className="absolute bottom-0 left-0 h-px bg-amber-400 transition-all duration-500 opacity-0 group-hover:opacity-100" style={{ width: "100%" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final ────────────────────────────────────────────────────────────────────
function FinalSection({ finalRef }) {
  return (
    <section ref={finalRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#080810" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(251,191,36,0.12) 0%, transparent 60%)" }} />

      {/* Cinematic letterbox bars */}
      <div className="final-bar-top absolute top-0 left-0 right-0" style={{ height: 100, background: "#080810", transform: "translateY(-100%)", zIndex: 10 }} />
      <div className="final-bar-bot absolute bottom-0 left-0 right-0" style={{ height: 100, background: "#080810", transform: "translateY(100%)", zIndex: 10 }} />

      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-40">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="absolute h-px w-full" style={{ top: `${i * 18}%`, background: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(251,191,36,${0.3 - i * 0.04}) 10px, rgba(251,191,36,${0.3 - i * 0.04}) 14px)` }} />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="final-eyebrow" style={{ fontFamily: "'Courier New', monospace", fontSize: "0.9rem", letterSpacing: "0.5em", color: "rgba(251,191,36,0.4)", textTransform: "uppercase", marginBottom: "1.5rem", opacity: 0 }}>
          The Final Stitch
        </div>
        <h2 className="font-black text-white mb-8" style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
          {[["Made for the", "white"], ["Ones Who", "#fbbf24"], ["Stand Out.", "white"]].map(([line, color], i) => (
            <span key={i} className="final-line block" style={{ overflow: "hidden" }}>
              <span className="final-inner block" style={{ transform: "translateY(110%)", color }}>{line}</span>
            </span>
          ))}
        </h2>
        <div className="final-stitch mt-24 flex items-center justify-center gap-2" style={{ opacity: 0 }}>
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} style={{ width: i % 3 === 1 ? 14 : 6, height: 1, background: "#fbbf24" }} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function HeroFabric() {
  const wrapperRef = useRef(null)
  const needleRef = useRef(null)
  const heroSectionRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroSubtitleRef = useRef(null)
  const storySectionRef = useRef(null)
  const productsSectionRef = useRef(null)
  const finalSectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── 1. Hero: masked line-by-line reveal ──────────────────────────────
      const heroInners = heroTitleRef.current?.querySelectorAll(".hero-inner")
      if (heroInners?.length) {
        gsap.from(heroInners, { yPercent: 110, duration: 1.3, stagger: 0.2, ease: "expo.out", delay: 0.3 })
      }
      gsap.to(heroSubtitleRef.current, { opacity: 1, duration: 1, delay: 1.1, ease: "power2.out" })

      // ── 2. Needle ────────────────────────────────────────────────────────
      const needle = needleRef.current
      const waypoints = [
        { p: 0.00, x: 50, y: 15 }, { p: 0.06, x: 72, y: 30 }, { p: 0.12, x: 28, y: 45 },
        { p: 0.18, x: 60, y: 60 }, { p: 0.25, x: 78, y: 25 }, { p: 0.32, x: 22, y: 40 },
        { p: 0.40, x: 55, y: 55 }, { p: 0.48, x: 80, y: 30 }, { p: 0.56, x: 20, y: 50 },
        { p: 0.64, x: 65, y: 35 }, { p: 0.72, x: 35, y: 65 }, { p: 0.80, x: 70, y: 45 },
        { p: 0.88, x: 30, y: 30 }, { p: 0.95, x: 55, y: 55 }, { p: 1.00, x: 50, y: 70 },
      ]
      const ss = t => t * t * (3 - 2 * t)
      const updateNeedle = () => {
        const maxScroll = document.body.scrollHeight - window.innerHeight
        const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
        let seg = 0
        for (let i = 0; i < waypoints.length - 1; i++) { if (progress >= waypoints[i].p) seg = i }
        const a = waypoints[seg], b = waypoints[Math.min(seg + 1, waypoints.length - 1)]
        const range = b.p - a.p
        const t = ss(range > 0 ? Math.max(0, Math.min(1, (progress - a.p) / range)) : 1)
        const x = a.x + (b.x - a.x) * t, y = a.y + (b.y - a.y) * t
        const angle = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI - 90
        if (needle) { needle.style.left = `${x}vw`; needle.style.top = `${y}vh`; needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)` }
      }
      updateNeedle()
      window.addEventListener("scroll", updateNeedle, { passive: true })
      gsap.to(needle, { filter: "drop-shadow(0 0 14px rgba(251,191,36,1))", duration: 1.4, repeat: -1, yoyo: true, ease: "sine.inOut" })

      // ── 3. Story: wipe overlay clips away diagonally ─────────────────────
      // The dark cover clips from full → gone using polygon, revealing content beneath
      const storyWipe = storySectionRef.current?.querySelector(".story-wipe")
      if (storyWipe) {
        gsap.to(storyWipe, {
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          duration: 1.4, ease: "expo.inOut",
          scrollTrigger: { trigger: storySectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        })
      }
      // Content scales in underneath
      const storyLeft = storySectionRef.current?.querySelector(".story-left")
      const storyRight = storySectionRef.current?.querySelector(".story-right")
      if (storyLeft) {
        gsap.to(storyLeft, { opacity: 1, scale: 1, duration: 1.1, ease: "expo.out", delay: 0.4,
          scrollTrigger: { trigger: storySectionRef.current, start: "top 80%" } })
      }
      if (storyRight) {
        gsap.to(storyRight, { opacity: 1, x: 0, duration: 1.1, ease: "expo.out", delay: 0.55,
          scrollTrigger: { trigger: storySectionRef.current, start: "top 80%" } })
      }

      // ── 4. Products: wipe right-to-left + header mask + card scale-pop ───
      const productsWipe = productsSectionRef.current?.querySelector(".products-wipe")
      if (productsWipe) {
        gsap.to(productsWipe, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.5, ease: "expo.inOut",
          scrollTrigger: { trigger: productsSectionRef.current, start: "top 85%", toggleActions: "play none none none" },
        })
      }
      const productsHeader = productsSectionRef.current?.querySelector(".products-header")
      if (productsHeader) {
        gsap.to(productsHeader, { y: 0, duration: 1.1, ease: "expo.out", delay: 0.5,
          scrollTrigger: { trigger: productsSectionRef.current, start: "top 80%" } })
      }
      const cards = productsSectionRef.current?.querySelectorAll(".product-card")
      if (cards?.length) {
        gsap.to(cards, {
          opacity: 1, scale: 1, y: 0,
          stagger: 0.14, duration: 0.85, ease: "back.out(1.6)", delay: 0.7,
          scrollTrigger: { trigger: productsSectionRef.current, start: "top 75%" },
        })
      }

      // ── 5. Final: cinematic letterbox → bars retract → text reveals ──────
      const barTop = finalSectionRef.current?.querySelector(".final-bar-top")
      const barBot = finalSectionRef.current?.querySelector(".final-bar-bot")
      const eyebrow = finalSectionRef.current?.querySelector(".final-eyebrow")
      const finalInners = finalSectionRef.current?.querySelectorAll(".final-inner")
      const stitch = finalSectionRef.current?.querySelector(".final-stitch")

      const finalTl = gsap.timeline({ scrollTrigger: { trigger: finalSectionRef.current, start: "top 78%" } })
      // Bars slam in
      if (barTop) finalTl.to(barTop, { y: 0, duration: 0.5, ease: "power4.out" }, 0)
      if (barBot) finalTl.to(barBot, { y: 0, duration: 0.5, ease: "power4.out" }, 0)
      // Bars slide away
      if (barTop) finalTl.to(barTop, { y: "-100%", duration: 0.7, ease: "power3.inOut" }, 0.6)
      if (barBot) finalTl.to(barBot, { y: "100%", duration: 0.7, ease: "power3.inOut" }, 0.6)
      // Eyebrow
      if (eyebrow) finalTl.to(eyebrow, { opacity: 1, duration: 0.5 }, 1.1)
      // Text lines unmask
      if (finalInners?.length) finalTl.to(finalInners, { y: 0, stagger: 0.18, duration: 1, ease: "expo.out" }, 1.3)
      // Stitch
      if (stitch) finalTl.to(stitch, { opacity: 0.3, duration: 0.8 }, 2.1)

      return () => window.removeEventListener("scroll", updateNeedle)
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef} style={{ position: "relative", background: "#0a0a0f" }}>
      {/* Fixed thread overlay */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 15, overflow: "hidden" }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}>
          <defs>
            <filter id="threadGlowFixed">
              <feGaussianBlur stdDeviation="0.3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path d="M 50 0 C 80 8,20 16,50 24 C 80 32,20 40,50 48 C 80 56,20 64,50 72 C 80 80,20 88,50 96 C 65 100,50 100,50 100"
            fill="none" stroke="rgba(251,191,36,0.3)" strokeWidth="0.15" strokeDasharray="1 2" filter="url(#threadGlowFixed)" />
        </svg>
      </div>

      <Needle needleRef={needleRef} />
      <HeroSection sectionRef={heroSectionRef} titleRef={heroTitleRef} subtitleRef={heroSubtitleRef} />
      <StorySection storyRef={storySectionRef} />
      <ProductsSection productsRef={productsSectionRef} />
      <FinalSection finalRef={finalSectionRef} />
    </div>
  )
}