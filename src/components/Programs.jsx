const programs = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    tag: 'Economic Empowerment',
    title: 'Economic Empowerment & Entrepreneurship',
    desc: 'We champion financial independence by facilitating access to vocational training, microfinance opportunities, and income-generating activities. Through strategic partnerships, we help individuals and their families achieve sustainable livelihoods.',
    outcomes: ['Vocational training', 'Microfinance access', 'Business mentorship', 'Income-generating activities', 'Savings group facilitation'],
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    tag: 'Digital Skills',
    title: 'Digital Skills & Innovation',
    desc: 'Recognizing that technology is central to education, employment, and entrepreneurship today, we provide tailored digital skills training programs specially designed to be accessible and effective for individuals with disabilities.',
    outcomes: ['Accessible computer training', 'Internet & communication', 'Online freelancing', 'Adaptive technology', 'Digital literacy certification'],
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    tag: 'Policy & Leadership',
    title: 'Policy Advocacy & Leadership Development',
    desc: 'Our advocacy work engages local government, schools, healthcare providers, and the wider public — building a system-wide culture of inclusion that extends beyond individual awareness to institutional and policy change.',
    outcomes: ['Policy engagement', 'Government liaison', 'Leadership training', 'Rights advocacy', 'Community workshops'],
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    tag: 'Awareness & Inclusion',
    title: 'Awareness & Inclusion Campaigns',
    desc: 'We actively raise awareness about disability-related issues through community outreach programs, targeted workshops, and public campaigns — fostering understanding and acceptance to eliminate stigma across the Gusii region.',
    outcomes: ['Public awareness campaigns', 'Stigma reduction', 'School outreach', 'Media engagement', 'Inclusive event programming'],
  },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#1A6B45" strokeWidth="2.5" className="w-[11px] h-[11px] shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-[90px] px-[5vw]">
      <div className="mb-12">
        <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">What We Do</span>
        <h2 className="font-serif text-navy font-bold mb-3">Our Four Core Programs</h2>
        <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-4" />
        <p className="text-[#607080] text-[1.05rem] max-w-[600px]">
          Four interconnected programs designed to systematically address the barriers facing youth
          with disabilities in the Gusii region.
        </p>
      </div>

      {/* Desktop 4-column grid */}
      <div className="hidden lg:grid grid-cols-4 border border-[#D5DEED] rounded-[6px] overflow-hidden">
        {programs.map((p, i) => (
          <div
            key={p.num}
            className={`bg-white px-8 py-10 relative group cursor-default transition-colors duration-200 hover:bg-[#F7F9FC] ${
              i < programs.length - 1 ? 'border-r border-[#D5DEED]' : ''
            }`}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            <span className="block font-serif text-[3rem] font-bold text-[#D5DEED] leading-none mb-3">{p.num}</span>
            <div className="w-12 h-12 rounded-[4px] bg-navy flex items-center justify-center mb-5">{p.icon}</div>
            <div className="text-[1rem] font-bold text-navy mb-2 font-serif">{p.title}</div>
            <p className="text-[0.85rem] text-[#607080] leading-[1.75] mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.outcomes.map((o) => (
                <span key={o} className="flex items-center gap-1 px-3 py-1 rounded-[3px] text-[0.72rem] font-semibold bg-[#EDF1F6] text-[#374B5E] border border-[#D5DEED]">
                  <CheckIcon /> {o}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile stacked list */}
      <div className="lg:hidden flex flex-col divide-y divide-[#D5DEED] border border-[#D5DEED] rounded-[6px] overflow-hidden">
        {programs.map((p) => (
          <div key={p.num} className="bg-white p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-[4px] bg-navy flex items-center justify-center shrink-0">{p.icon}</div>
              <div>
                <span className="block text-[0.65rem] font-bold tracking-[0.1em] uppercase text-gold mb-[2px]">{p.tag}</span>
                <div className="font-serif text-navy font-bold text-[1rem]">{p.title}</div>
              </div>
            </div>
            <p className="text-[0.88rem] text-[#607080] leading-[1.75] mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.outcomes.map((o) => (
                <span key={o} className="flex items-center gap-1 px-3 py-1 rounded-[3px] text-[0.72rem] font-semibold bg-[#EDF1F6] text-[#374B5E] border border-[#D5DEED]">
                  <CheckIcon /> {o}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
