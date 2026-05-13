const navCols = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About YDDF', href: '#about' },
      { label: 'Our Programs', href: '#programs' },
      { label: 'Impact', href: '#impact' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Economic Empowerment', href: '#programs' },
      { label: 'Digital Skills & Innovation', href: '#programs' },
      { label: 'Policy Advocacy', href: '#programs' },
      { label: 'Awareness Campaigns', href: '#programs' },
    ],
  },
  {
    heading: 'Organisation',
    links: [
      { label: 'Gusii Region, Nyanza, Kenya', href: null },
      { label: '+254 793 510201', href: 'tel:+254793510201' },
      { label: 'yddf94odongo@gmail.com', href: 'mailto:yddf94odongo@gmail.com' },
      { label: 'Registered CBO', href: null },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/55 pt-16 pb-7 px-[5vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
        {/* Brand */}
        <div>
          <a href="#home" className="inline-flex items-center gap-3 no-underline mb-4">
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
          </a>
          <p className="text-[0.84rem] leading-[1.8] max-w-[260px]">
            Empowering Youth with Disabilities Through Technology, Advocacy & Opportunity in the
            Gusii region of Kenya.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-5 bg-gold text-white text-[0.82rem] font-semibold px-4 py-2 rounded-[4px] no-underline transition-colors hover:bg-gold-light"
          >
            Donate to YDDF
          </a>
        </div>

        {navCols.map(({ heading, links }) => (
          <div key={heading}>
            <h4 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-white/35 mb-4 font-sans">
              {heading}
            </h4>
            <ul className="list-none flex flex-col gap-[6px]">
              {links.map(({ label, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="text-[0.84rem] text-white/45 no-underline transition-colors hover:text-gold-light"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-[0.84rem] text-white/35">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
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
