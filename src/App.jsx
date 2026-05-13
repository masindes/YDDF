import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Impact from './pages/Impact'
import Partners from './pages/Partners'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center px-[5vw]">
      <div className="text-center">
        <span className="block font-serif text-[6rem] font-bold text-[#D5DEED] leading-none mb-4">404</span>
        <h1 className="font-serif text-navy font-bold text-[1.8rem] mb-3">Page Not Found</h1>
        <p className="text-[#607080] mb-6">The page you are looking for does not exist.</p>
        <a href="/" className="inline-flex items-center gap-2 bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline hover:bg-navy-mid transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
