const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    name: 'Inclusivity',
    desc: 'A society that welcomes and accommodates everyone, regardless of ability.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    name: 'Equality',
    desc: 'Every person deserves the same rights, dignity, and access to opportunity.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    name: 'Empowerment',
    desc: 'Equipping individuals with skills and confidence to take charge of their futures.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    name: 'Community',
    desc: 'Building strong, supportive networks that uplift the entire Gusii region.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    name: 'Transparency',
    desc: 'Operating with integrity and accountability in all that we do.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    name: 'Innovation',
    desc: 'Leveraging technology and creative approaches to solve disability challenges.',
  },
]

export default function Values() {
  return (
    <section className="bg-navy py-[90px] px-[5vw]">
      <div className="text-center mb-12">
        <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold-light mb-3">Core Values</span>
        <h2 className="font-serif text-white font-bold mb-3">The Principles That Guide Us</h2>
        <div className="w-12 h-[3px] bg-gold-light rounded-[2px] mx-auto mb-4" />
        <p className="text-white/50 text-[1.05rem] max-w-[600px] mx-auto">
          Six foundational values that shape every decision, program, and interaction at YDDF.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-[6px] overflow-hidden">
        {values.map((v) => (
          <div key={v.name} className="bg-navy p-8 transition-colors duration-200 hover:bg-navy-mid">
            <div className="w-11 h-11 rounded-[4px] bg-gold/[0.15] flex items-center justify-center mb-5">
              {v.icon}
            </div>
            <div className="font-serif text-white font-bold text-[1rem] mb-2">{v.name}</div>
            <p className="text-[0.83rem] text-white/45 leading-[1.7]">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
