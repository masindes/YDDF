import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'

const programs = [
  {
    num: '01', to: '/programs',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    title: 'Economic Empowerment',
    desc: 'Vocational training, microfinance access, and income-generating activities enabling financial independence and sustainable livelihoods.',
  },
  {
    num: '02', to: '/programs',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title: 'Digital Skills & Innovation',
    desc: 'Accessible technology training programs equipping individuals with disabilities to participate fully in the digital economy.',
  },
  {
    num: '03', to: '/programs',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: 'Policy Advocacy & Leadership',
    desc: 'Engaging government, schools, and public institutions to build system-wide inclusive policies and practices.',
  },
  {
    num: '04', to: '/programs',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Awareness & Inclusion Campaigns',
    desc: 'Community outreach, workshops, and public campaigns to eliminate stigma across the Gusii region.',
  },
]

const values = [
  { name: 'Inclusivity', desc: 'A society that welcomes and accommodates everyone, regardless of ability.' },
  { name: 'Equality', desc: 'Every person deserves the same rights, dignity, and access to opportunity.' },
  { name: 'Empowerment', desc: 'Equipping individuals with skills and confidence to take charge of their futures.' },
  { name: 'Community', desc: 'Building strong, supportive networks that uplift the entire Gusii region.' },
  { name: 'Transparency', desc: 'Operating with integrity and accountability in all that we do.' },
  { name: 'Innovation', desc: 'Leveraging technology and creative approaches to solve disability challenges.' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy pt-[130px] pb-[90px] px-[5vw] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-gradient-to-r from-transparent to-white/[0.025] pointer-events-none" />
        <div className="relative z-10">
          <span className="block text-gold-light tracking-[0.18em] text-[0.7rem] font-bold uppercase mb-5">
            Gusii Region &nbsp;&middot;&nbsp; Nyanza, Kenya
          </span>
          <h1 className="font-serif text-white font-bold leading-[1.15] mb-5">
            Empowering Youth<br />
            with <em className="italic text-gold-light">Disabilities</em><br />
            to Thrive
          </h1>
          <p className="text-white/60 text-[1.05rem] leading-[1.85] max-w-[480px] mb-8">
            A youth-led Community-Based Organization advancing inclusion and empowerment of young
            persons with disabilities through advocacy, skills development, and economic empowerment.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-white text-[0.9rem] font-semibold px-7 py-3 rounded-[4px] no-underline hover:bg-gold-light hover:-translate-y-px transition-all duration-200">
              Support Our Work
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 bg-transparent text-white border border-white/50 text-[0.9rem] font-semibold px-7 py-3 rounded-[4px] no-underline hover:bg-white hover:text-navy transition-all duration-200">
              About YDDF
            </Link>
          </div>
          <div className="flex gap-10 mt-10 pt-8 border-t border-white/[0.12]">
            {[['4', 'Core Programs'], ['CBO', 'Registered Org'], ['100%', 'Community-Driven']].map(([num, label]) => (
              <div key={label}>
                <span className="block font-serif text-[2rem] font-bold text-gold-light">{num}</span>
                <span className="text-[0.72rem] font-semibold tracking-[0.07em] uppercase text-white/45">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile card — desktop only */}
        <div className="hidden lg:block bg-white/[0.05] border border-white/10 rounded-[6px] p-10 relative z-10">
          <h3 className="text-white/60 text-[0.78rem] font-bold tracking-[0.15em] uppercase mb-7 font-sans">Organization Profile</h3>
          {[
            { label: 'Location', value: 'Gusii Region, Nyanza Province, Kenya' },
            { label: 'Type', value: 'Community-Based Organization (CBO)' },
            { label: 'Focus', value: 'Technology, Advocacy & Economic Empowerment' },
            { label: 'Target Group', value: 'Youth with Disabilities in Gusii Region' },
            { label: 'Email', value: 'yddf94odongo@gmail.com' },
          ].map(({ label, value }, i, arr) => (
            <div key={label} className={`flex items-start gap-4 py-4 ${i < arr.length - 1 ? 'border-b border-white/[0.07]' : ''}`}>
              <div className="w-9 h-9 rounded-[4px] bg-gold/[0.15] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <span className="block text-[0.68rem] font-bold tracking-[0.08em] uppercase text-white/35 mb-[3px]">{label}</span>
                <span className="text-[0.88rem] text-white/75 font-medium">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO WE ARE STRIP ── */}
      <section className="bg-[#F7F9FC] py-20 px-[5vw] border-b border-[#D5DEED]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Who We Are</span>
            <h2 className="font-serif text-navy font-bold mb-3">A Beacon of Hope in the Gusii Region</h2>
            <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-6" />
            <p className="text-[#374B5E] leading-[1.85] text-[0.97rem] mb-4">
              YDDF is rooted in the Gusii region of Kenya, founded on the principles of inclusivity,
              equality, and opportunity for every young person with a disability.
            </p>
            <p className="text-[#374B5E] leading-[1.85] text-[0.97rem]">
              We ensure every individual, regardless of ability, has access to the tools, resources,
              and opportunities needed to thrive. Our programs are investments in people, in
              communities, and in Kenya's future.
            </p>
            <div className="flex gap-3 flex-wrap mt-6">
              <Link to="/about" className="inline-flex items-center gap-2 bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline hover:bg-navy-mid hover:-translate-y-px transition-all duration-200">Our Full Story</Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-transparent text-navy border-[1.5px] border-navy text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline hover:bg-navy hover:text-white transition-all duration-200">Get In Touch</Link>
            </div>
          </div>
          <div className="border border-[#D5DEED] rounded-[6px] overflow-hidden">
            {[
              { k: 'Type', v: 'Community-Based Organization (CBO)' },
              { k: 'Location', v: 'Gusii Region, Nyanza, Kenya' },
              { k: 'Focus', v: 'Technology, Advocacy & Empowerment' },
              { k: 'Target Group', v: 'Youth with Disabilities in Gusii region' },
              { k: 'Vision', v: 'Inclusive, equitable, and prosperous community for all' },
            ].map(({ k, v }, i) => (
              <div key={k} className={`grid grid-cols-[130px_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7F9FC]'} ${i < 4 ? 'border-b border-[#D5DEED]' : ''}`}>
                <span className="px-4 py-3 text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#607080] border-r border-[#D5DEED]">{k}</span>
                <span className="px-4 py-3 text-[0.88rem] font-semibold text-navy">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ── */}
      <section className="bg-white py-[90px] px-[5vw]">
        <div className="mb-12">
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">What We Do</span>
          <h2 className="font-serif text-navy font-bold mb-3">Our Services & Programs</h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-4" />
          <p className="text-[#607080] text-[1.05rem] max-w-[600px]">
            Four programs designed to address the barriers facing youth with disabilities in the Gusii region.
          </p>
        </div>
        <div className="hidden lg:grid grid-cols-4 border border-[#D5DEED] rounded-[6px] overflow-hidden">
          {programs.map((p, i) => (
            <Link key={p.num} to={p.to}
              className={`bg-white px-8 py-10 relative group no-underline transition-colors duration-200 hover:bg-[#F7F9FC] ${i < programs.length - 1 ? 'border-r border-[#D5DEED]' : ''}`}
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              <span className="block font-serif text-[3rem] font-bold text-[#D5DEED] leading-none mb-3">{p.num}</span>
              <div className="w-12 h-12 rounded-[4px] bg-navy flex items-center justify-center mb-5">{p.icon}</div>
              <div className="text-[1rem] font-bold text-navy mb-2 font-serif">{p.title}</div>
              <p className="text-[0.85rem] text-[#607080] leading-[1.75]">{p.desc}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-[0.75rem] font-bold text-navy tracking-[0.06em] uppercase">
                View Program
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          ))}
        </div>
        {/* Mobile stacked */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {programs.map((p) => (
            <Link key={p.num} to={p.to} className="bg-[#F7F9FC] border border-[#D5DEED] rounded-[6px] p-6 no-underline hover:border-navy transition-colors duration-200 group">
              <div className="w-11 h-11 rounded-[4px] bg-navy flex items-center justify-center mb-4">{p.icon}</div>
              <div className="font-serif text-navy font-bold text-[1rem] mb-2">{p.title}</div>
              <p className="text-[0.85rem] text-[#607080] leading-[1.75]">{p.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/programs" className="inline-flex items-center gap-2 bg-navy text-white text-[0.9rem] font-semibold px-8 py-3 rounded-[4px] no-underline hover:bg-navy-mid hover:-translate-y-px transition-all duration-200">
            View All Programs
          </Link>
        </div>
      </section>

      {/* ── VALUES ── */}
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
            <div key={v.name} className="bg-navy p-8 hover:bg-navy-mid transition-colors duration-200">
              <div className="w-11 h-11 rounded-[4px] bg-gold/[0.15] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div className="font-serif text-white font-bold text-[1rem] mb-2">{v.name}</div>
              <p className="text-[0.83rem] text-white/45 leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMPACT TEASER ── */}
      <section className="bg-white py-[90px] px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Why It Matters</span>
            <h2 className="font-serif text-navy font-bold mb-3">Addressing Real Gaps in the Community</h2>
            <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-6" />
            <p className="text-[#374B5E] leading-[1.85] mb-4">
              Youth with disabilities in the Gusii region face compounding barriers: inaccessible
              education, unemployment, social stigma, and a lack of assistive technology.
            </p>
            <blockquote className="border-l-[3px] border-gold pl-6 py-4 bg-[#FBF5E6] my-6">
              <p className="font-serif text-navy text-[1.05rem] italic leading-[1.75]">
                "Disability is not inability. With the right support and opportunities, every young
                person can contribute meaningfully to their community and economy."
              </p>
            </blockquote>
            <Link to="/impact" className="inline-flex items-center gap-2 bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline hover:bg-navy-mid hover:-translate-y-px transition-all duration-200">
              See Our Impact
            </Link>
          </div>
          <div>
            <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[#607080] mb-7 font-sans">Challenges Facing Youth With Disabilities</h3>
            <div className="flex flex-col gap-6">
              {[
                { label: 'Unemployment among youth with disabilities', pct: 72, color: 'bg-navy' },
                { label: 'Lack of access to digital tools and training', pct: 68, color: 'bg-gold' },
                { label: 'Incomplete secondary education', pct: 61, color: 'bg-forest' },
                { label: 'No access to assistive devices', pct: 55, color: 'bg-navy-mid' },
              ].map(({ label, pct, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-[0.8rem] font-bold text-[#374B5E] mb-2">
                    <span>{label}</span><span>{pct}%</span>
                  </div>
                  <div className="h-[6px] bg-[#EDF1F6] rounded-[3px] overflow-hidden">
                    <div className={`h-full ${color} rounded-[3px]`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CtaBanner
        heading="Partner With YDDF"
        body="Join us in creating lasting change for youth with disabilities in the Gusii region. Your support funds real programs that transform lives."
        primaryLabel="Make a Donation"
        primaryTo="/contact"
        secondaryLabel="Become a Partner"
        secondaryTo="/partners"
      />
    </>
  )
}
