import Navbar from "./components/Navbar"
import HeroFabric from "./components/HeroFabric"
 import ColorCollection from "./components/ColorCollection"
 import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import Contacts from "./components/Contacts"
import Services from "./components/Services"
export default function App() {

  return (
    <div>

      {/* Navbar */}
      <Navbar />

      <section id="home">
        <HeroFabric />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="service">
        <Services />
      </section>

      <section id="collection">
        <ColorCollection />
      </section>

      <section id="contact">
        <Contacts />
      </section>
       <Footer />

    </div>
  )
}