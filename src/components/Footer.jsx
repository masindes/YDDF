import { Link } from 'react-router-dom'

const navCols = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About YDDF', to: '/about' },
      { label: 'Our Programs', to: '/programs' },
      { label: 'Impact', to: '/impact' },
      { label: 'Partners', to: '/partners' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Economic Empowerment', to: '/programs' },
      { label: 'Digital Skills & Innovation', to: '/programs' },
      { label: 'Policy Advocacy', to: '/programs' },
      { label: 'Awareness Campaigns', to: '/programs' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/55 pt-16 pb-7 px-[5vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3 no-underline mb-4">
            <div className="w-10 h-10 rounded-[3px] bg-white/[0.08] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="5" r="2" fill="#D4AA4A" />
                <path d="M12 9c-2.5 0-4.5 1.5-4.5 3.5V17l1.5-1.5V13c0-.8.9-1.5 3-1.5s3 .7 3 1.5v2.5L16.5 17V12.5C16.5 10.5 14.5 9 12 9z" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-[1.05rem] font-bold text-gold-light tracking-[0.04em]">YDDF</span>
              <span className="text-[0.6rem] font-semibold tracking-[0.1em] uppercase text-white/30">Gusii Region, Kenya</span>
            </div>
          </Link>
          <p className="text-[0.84rem] leading-[1.8] max-w-[260px] mb-5">
            Empowering Youth with Disabilities Through Technology, Advocacy & Opportunity in the Gusii region of Kenya.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-white text-[0.82rem] font-semibold px-4 py-2 rounded-[4px] no-underline transition-colors hover:bg-gold-light">
            Donate to YDDF
          </Link>
        </div>

        {navCols.map(({ heading, links }) => (
          <div key={heading}>
            <h4 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-white/35 mb-4 font-sans">{heading}</h4>
            <ul className="list-none flex flex-col gap-[6px]">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-[0.84rem] text-white/45 no-underline transition-colors hover:text-gold-light">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h4 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-white/35 mb-4 font-sans">Contact</h4>
          <ul className="list-none flex flex-col gap-2">
            <li><span className="text-[0.84rem] text-white/35">Gusii Region, Nyanza, Kenya</span></li>
            <li><a href="tel:+254793510201" className="text-[0.84rem] text-white/45 no-underline hover:text-gold-light transition-colors">+254 793 510201</a></li>
            <li><a href="mailto:yddf94odongo@gmail.com" className="text-[0.84rem] text-white/45 no-underline hover:text-gold-light transition-colors">yddf94odongo@gmail.com</a></li>
            <li><span className="text-[0.84rem] text-white/35">Registered CBO, Kenya</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.08] pt-5 flex flex-wrap justify-between items-center gap-2">
        <span className="text-[0.76rem] text-white/25">
          &copy; {new Date().getFullYear()} Youths With Disability Development Forum (YDDF) &nbsp;&middot;&nbsp;
          Registered Community-Based Organization &nbsp;&middot;&nbsp; Gusii Region, Kenya
        </span>
        <span className="text-[0.76rem] text-white/25 italic font-serif">Disability is not inability.</span>
      </div>
    </footer>
  )
}
