const partnerTypes = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Government Partners',
    desc: 'We engage county and national governments to mainstream disability inclusion in public policy and service delivery.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'International Donors',
    desc: 'We partner with NGOs, development agencies, and foundations to mobilize resources and scale inclusive solutions across the region.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: 'Private Sector',
    desc: 'Corporate partners provide funding, mentorship, and job placement opportunities for youth with disabilities completing our programs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Community Networks',
    desc: 'Local organizations, schools, and faith communities amplify our reach and help deliver grassroots programs to every corner of the Gusii region.',
  },
]

export default function Partners() {
  return (
    <section id="partners" className="bg-[#F7F9FC] py-[90px] px-[5vw] border-t border-[#D5DEED]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left — text */}
        <div>
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Partner With Us</span>
          <h2 className="font-serif text-navy font-bold mb-3">Together, We Create Lasting Change</h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-6" />
          <p className="text-[#374B5E] leading-[1.85] text-[0.97rem] mb-4">
            We collaborate with governments, donors, and private sector partners to scale inclusive
            solutions that transform the lives of youth with disabilities in the Gusii region and
            beyond.
          </p>
          <p className="text-[#374B5E] leading-[1.85] text-[0.97rem] mb-6">
            Disability inclusion is essential for sustainable development — together we ensure no one
            is left behind. Whether through funding, expertise, or advocacy, your partnership creates
            real impact.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-navy-mid hover:-translate-y-px"
            >
              Become a Partner
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-gold-light hover:-translate-y-px"
            >
              Make a Donation
            </a>
          </div>
        </div>

        {/* Right — partner types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {partnerTypes.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-[#D5DEED] rounded-[6px] p-6 transition-all duration-200 hover:border-navy hover:shadow-[0_4px_20px_rgba(10,38,71,0.07)]"
            >
              <div className="w-11 h-11 rounded-[4px] bg-navy/[0.07] flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h4 className="font-serif text-navy font-bold text-[0.95rem] mb-2">{p.title}</h4>
              <p className="text-[0.83rem] text-[#607080] leading-[1.7]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
