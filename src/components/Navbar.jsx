import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Impact', to: '/impact' },
  { label: 'Partners', to: '/partners' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] bg-white border-b border-[#D5DEED] flex items-center justify-between px-[5vw] transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_24px_rgba(10,38,71,0.10)]' : ''
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 no-underline">
        <div className="w-10 h-10 bg-navy rounded-[3px] flex items-center justify-center shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="5" r="2" fill="#B8902A" />
            <path d="M12 9c-2.5 0-4.5 1.5-4.5 3.5V17.5l1.5-1.5V13c0-.8.9-1.5 3-1.5s3 .7 3 1.5v3l1.5 1.5V12.5C16.5 10.5 14.5 9 12 9z" fill="white" />
            <path d="M9.5 17.5L8 22h1.5l1.5-3.5h2L14.5 22H16l-1.5-4.5H9.5z" fill="white" opacity=".65" />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-serif text-[1.1rem] font-bold text-navy tracking-[0.04em]">YDDF</span>
          <span className="text-[0.6rem] font-semibold tracking-[0.1em] uppercase text-[#607080]">Gusii Region, Kenya</span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-5 list-none">
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className={`text-[0.88rem] font-semibold tracking-[0.01em] no-underline transition-colors duration-200 pb-[2px] border-b-2 ${
                isActive(to)
                  ? 'text-navy border-gold'
                  : 'text-[#374B5E] border-transparent hover:text-navy hover:border-gold'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/contact"
            className="bg-gold text-white text-[0.88rem] font-semibold px-5 py-2 rounded-[4px] no-underline transition-colors duration-200 hover:bg-gold-light"
          >
            Donate
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-0"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-[22px] h-[2px] bg-[#0D1B2A] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-[22px] h-[2px] bg-[#0D1B2A] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-[22px] h-[2px] bg-[#0D1B2A] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-[#D5DEED] px-[5vw] py-6 flex flex-col gap-4 z-50 shadow-lg">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`text-[0.9rem] font-semibold no-underline transition-colors ${
                isActive(to) ? 'text-navy' : 'text-[#374B5E] hover:text-navy'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-gold text-white text-[0.88rem] font-semibold px-5 py-2 rounded-[4px] no-underline text-center hover:bg-gold-light"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  )
}
