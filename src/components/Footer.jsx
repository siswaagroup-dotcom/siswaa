export default function Footer() {

  return (

    <footer
      style={{
        background: "#0f0f14",
        color: "#f5f2ee",
        padding: "90px 20px 40px"
      }}
    >

      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 60
        }}
      >

        {/* Brand */}

        <div>

          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.3rem",
              letterSpacing: ".15em",
              marginBottom: 15
            }}
          >
            SA<span style={{color:"#fbbf24"}}>•</span>SA
          </div>

          <p
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: ".75rem",
              lineHeight: 1.9,
              opacity: .6
            }}
          >
            Premium everyday t-shirts designed for comfort,
            durability and timeless minimal style.
          </p>

        </div>


        {/* Navigation */}

        <div>

          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: ".65rem",
              letterSpacing: ".4em",
              marginBottom: 20,
              opacity: .6
            }}
          >
            NAVIGATION
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              fontFamily: "Georgia, serif",
              fontSize: "1rem"
            }}
          >
            <a href="#home" style={{color:"#f5f2ee",textDecoration:"none"}}>Home</a>
            <a href="#about" style={{color:"#f5f2ee",textDecoration:"none"}}>About</a>
            <a href="#service" style={{color:"#f5f2ee",textDecoration:"none"}}>Service</a>
            <a href="#contact" style={{color:"#f5f2ee",textDecoration:"none"}}>Contact</a>
          </div>

        </div>


        {/* Contact */}

        <div id="contact">

          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: ".65rem",
              letterSpacing: ".4em",
              marginBottom: 20,
              opacity: .6
            }}
          >
            CONTACT
          </div>

          <p
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: ".75rem",
              lineHeight: 2
            }}
          >
            7376233746<br/>
            9555675596
          </p>

        </div>


        {/* GST */}

        <div>

          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: ".65rem",
              letterSpacing: ".4em",
              marginBottom: 20,
              opacity: .6
            }}
          >
            BUSINESS
          </div>

          <p
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: ".75rem",
              lineHeight: 2
            }}
          >
            GST No<br/>
            09GCGPS9987C1ZP
          </p>

        </div>

      </div>


      {/* Bottom */}

      <div
        style={{
          maxWidth: 1200,
          margin: "70px auto 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 20,
          textAlign: "center",
          fontFamily: "'Courier New', monospace",
          fontSize: ".6rem",
          letterSpacing: ".2em",
          opacity: .5
        }}
      >

        © {new Date().getFullYear()} UrbanTee — Crafted for Everyday Comfort

      </div>

    </footer>

  )
}