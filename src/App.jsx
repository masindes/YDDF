import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Values from './components/Values'
import Impact from './components/Impact'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Values />
        <Impact />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
