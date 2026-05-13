const challenges = [
  { label: 'Unemployment among youth with disabilities', pct: 72, color: 'bg-navy' },
  { label: 'Lack of access to digital tools and training', pct: 68, color: 'bg-gold' },
  { label: 'Incomplete secondary education', pct: 61, color: 'bg-forest' },
  { label: 'No access to assistive devices', pct: 55, color: 'bg-navy-mid' },
]

const impacts = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Economic Empowerment',
    desc: 'Youth with disabilities empowered economically and socially through vocational training, microfinance access, and income-generating activities.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Digital Access',
    desc: 'Increased access to digital opportunities enabling youth with disabilities to participate in the digital economy and online job markets.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Policy Advocacy',
    desc: 'Strengthened advocacy for inclusive policies at local and regional government level, driving systemic change for persons with disabilities.',
  },
]

export default function Impact() {
  return (
    <section id="impact" className="bg-white py-[90px] px-[5vw]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Left — why it matters */}
        <div>
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Why It Matters</span>
          <h2 className="font-serif text-navy font-bold mb-3">Addressing Real Gaps in the Community</h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-6" />

          <p className="text-[#374B5E] leading-[1.85] text-[0.97rem] mb-4">
            Youth with disabilities in the Gusii region face compounding barriers: inaccessible
            education, unemployment, social stigma, and a lack of assistive technology. YDDF directly
            addresses these gaps by placing young people at the centre of every program.
          </p>

          <blockquote className="border-l-[3px] border-gold pl-6 py-4 bg-[#FBF5E6] my-6">
            <p className="font-serif text-navy text-[1.05rem] italic leading-[1.75]">
              "Disability is not inability. With the right support, digital skills, and opportunities,
              every young person can contribute meaningfully to their community and economy."
            </p>
          </blockquote>

          <p className="text-[#374B5E] leading-[1.85] text-[0.97rem] mb-6">
            Disability inclusion is essential for sustainable development — YDDF ensures no one is
            left behind. Our programs are investments in people, communities, and Kenya's future.
          </p>

          <a
            href="#programs"
            className="inline-flex items-center gap-2 bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-navy-mid hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(10,38,71,0.25)]"
          >
            Explore Our Programs
          </a>
        </div>

        {/* Right — challenges */}
        <div>
          <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[#607080] mb-7 font-sans">
            Challenges Facing Youth With Disabilities
          </h3>
          <div className="flex flex-col gap-6 mb-8">
            {challenges.map(({ label, pct, color }) => (
              <div key={label}>
                <div className="flex justify-between text-[0.8rem] font-bold text-[#374B5E] mb-2">
                  <span>{label}</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-[6px] bg-[#EDF1F6] rounded-[3px] overflow-hidden">
                  <div className={`h-full ${color} rounded-[3px]`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[0.76rem] text-[#607080]">
            Estimates based on regional disability surveys. YDDF programs directly target each of
            these gaps.
          </p>
        </div>
      </div>

      {/* Impact cards */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Our Impact</span>
          <h2 className="font-serif text-navy font-bold mb-3">What We Have Achieved</h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {impacts.map((item) => (
            <div
              key={item.title}
              className="bg-[#F7F9FC] border border-[#D5DEED] rounded-[6px] p-8 transition-all duration-200 hover:border-navy hover:shadow-[0_4px_20px_rgba(10,38,71,0.07)]"
            >
              <div className="w-11 h-11 rounded-[4px] bg-navy flex items-center justify-center mb-5">
                <div className="[&>svg]:stroke-gold">{item.icon}</div>
              </div>
              <h4 className="font-serif text-navy font-bold text-[1rem] mb-2">{item.title}</h4>
              <p className="text-[0.88rem] text-[#374B5E] leading-[1.75]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
