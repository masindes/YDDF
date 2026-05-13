export default function Hero() {
  return (
    <section
      id="home"
      className="bg-navy pt-[130px] pb-[90px] px-[5vw] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-gradient-to-r from-transparent to-white/[0.025] pointer-events-none" />

      {/* Left — main copy */}
      <div className="relative z-10">
        <span className="block text-gold-light tracking-[0.18em] text-[0.7rem] font-bold uppercase mb-5">
          Gusii Region &nbsp;&middot;&nbsp; Nyanza, Kenya
        </span>

        <h1 className="font-serif text-white font-bold leading-[1.15] mb-5">
          Empowering Youth<br />
          with <em className="italic text-gold-light not-italic" style={{ fontStyle: 'italic' }}>Disabilities</em><br />
          to Thrive
        </h1>

        <p className="text-white/60 text-[1.05rem] leading-[1.85] max-w-[480px] mb-8">
          A youth-led Community-Based Organization advancing inclusion and empowerment of young
          persons with disabilities through advocacy, skills development, and economic empowerment
          across the Gusii region.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-white text-[0.9rem] font-semibold px-7 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-gold-light hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(184,144,42,0.3)]"
          >
            Support Our Work
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/50 text-[0.9rem] font-semibold px-7 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-white hover:text-navy"
          >
            About YDDF
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-10 pt-8 border-t border-white/[0.12]">
          {[
            { num: '4', label: 'Core Programs' },
            { num: 'CBO', label: 'Registered Org' },
            { num: '100%', label: 'Community-Driven' },
          ].map(({ num, label }) => (
            <div key={label}>
              <span className="block font-serif text-[2rem] font-bold text-gold-light">{num}</span>
              <span className="text-[0.72rem] font-semibold tracking-[0.07em] uppercase text-white/45">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — org profile card */}
      <div className="hidden lg:block bg-white/[0.05] border border-white/10 rounded-[6px] p-10 relative z-10">
        <h3 className="text-white/60 text-[0.78rem] font-bold tracking-[0.15em] uppercase mb-7 font-sans">
          Organization Profile
        </h3>

        {[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-4 h-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            ),
            label: 'Location',
            value: 'Gusii Region, Nyanza Province, Kenya',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-4 h-4">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
            ),
            label: 'Type',
            value: 'Community-Based Organization (CBO)',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-4 h-4">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            ),
            label: 'Focus',
            value: 'Technology, Advocacy & Economic Empowerment',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-4 h-4">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            ),
            label: 'Target Group',
            value: 'Youth with Disabilities in Gusii Region',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-4 h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            ),
            label: 'Email',
            value: 'yddf94odongo@gmail.com',
          },
        ].map(({ icon, label, value }, i, arr) => (
          <div
            key={label}
            className={`flex items-start gap-4 py-4 ${i < arr.length - 1 ? 'border-b border-white/[0.07]' : ''}`}
          >
            <div className="w-9 h-9 rounded-[4px] bg-gold/[0.15] flex items-center justify-center shrink-0">
              {icon}
            </div>
            <div>
              <span className="block text-[0.68rem] font-bold tracking-[0.08em] uppercase text-white/35 mb-[3px]">
                {label}
              </span>
              <span className="text-[0.88rem] text-white/75 font-medium">{value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
