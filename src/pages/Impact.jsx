import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'

const challenges = [
  { label: 'Unemployment among youth with disabilities', pct: 72, color: 'bg-navy' },
  { label: 'Lack of access to digital tools and training', pct: 68, color: 'bg-gold' },
  { label: 'Incomplete secondary education', pct: 61, color: 'bg-forest' },
  { label: 'No access to assistive devices', pct: 55, color: 'bg-navy-mid' },
]

const impactAreas = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    title: 'Economic Empowerment',
    desc: 'Youth with disabilities empowered economically and socially through vocational training, microfinance access, and income-generating activities that build financial independence.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title: 'Digital Access',
    desc: 'Increased access to digital opportunities enabling youth with disabilities to participate in the digital economy, online job markets, and entrepreneurial ventures.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Policy Advocacy',
    desc: 'Strengthened advocacy for inclusive policies at local and regional government level, driving systemic change for persons with disabilities in the Gusii region.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Community Inclusion',
    desc: 'Reduced stigma and increased community acceptance through awareness campaigns, school outreach, and public engagement across the Gusii region.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    title: 'Resource Mobilization',
    desc: 'Assistive devices, educational materials, and medical support mobilized and distributed to youth who lack essential tools required for an independent and fulfilling life.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title: 'Leadership Development',
    desc: 'Young persons with disabilities trained as community leaders, advocates, and entrepreneurs — demonstrating that disability is not a barrier to leadership and impact.',
  },
]

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Why It Matters"
        subtitle="Youth with disabilities in the Gusii region face compounding barriers. YDDF directly addresses these gaps by placing young people at the centre of every program."
      />

      {/* Quote */}
      <section className="bg-[#F7F9FC] py-16 px-[5vw] border-b border-[#D5DEED]">
        <div className="max-w-[800px] mx-auto text-center">
          <blockquote className="font-serif text-navy text-[1.3rem] italic leading-[1.7] mb-4">
            "Disability is not inability. With the right support, digital skills, and opportunities,
            every young person can contribute meaningfully to their community and economy."
          </blockquote>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mx-auto mb-4" />
          <p className="text-[#607080] text-[0.9rem]">
            Disability inclusion is essential for sustainable development — YDDF ensures no one is
            left behind.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white py-16 px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">The Challenge</span>
            <h2 className="font-serif text-navy font-bold mb-3">Barriers Facing Youth With Disabilities</h2>
            <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-6" />
            <p className="text-[#374B5E] leading-[1.85] mb-4">
              Youth with disabilities across the Gusii region face a complex web of barriers that
              cut them off from education, employment, healthcare, and social participation.
            </p>
            <p className="text-[#374B5E] leading-[1.85]">
              These are not abstract statistics — they represent real young people whose potential
              is untapped, not because of their disability, but because of the systems and attitudes
              that surround them. YDDF programs directly target each of these gaps.
            </p>
          </div>
          <div>
            <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[#607080] mb-7 font-sans">
              Regional Disability Statistics
            </h3>
            <div className="flex flex-col gap-6 mb-4">
              {challenges.map(({ label, pct, color }) => (
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
            <p className="text-[0.76rem] text-[#607080]">
              Estimates based on regional disability surveys. YDDF programs directly target each of these gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Impact areas */}
      <section className="bg-[#F7F9FC] py-16 px-[5vw] border-t border-[#D5DEED]">
        <div className="text-center mb-12">
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">What We Achieve</span>
          <h2 className="font-serif text-navy font-bold mb-3">Areas of Impact</h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mx-auto mb-4" />
          <p className="text-[#607080] text-[1.05rem] max-w-[600px] mx-auto">
            YDDF creates impact across six interconnected areas — each one essential to the holistic
            empowerment of youth with disabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impactAreas.map((item) => (
            <div key={item.title} className="bg-white border border-[#D5DEED] rounded-[6px] p-8 hover:border-navy hover:shadow-[0_4px_20px_rgba(10,38,71,0.07)] transition-all duration-200">
              <div className="w-11 h-11 rounded-[4px] bg-navy flex items-center justify-center mb-5">{item.icon}</div>
              <h4 className="font-serif text-navy font-bold text-[1rem] mb-2">{item.title}</h4>
              <p className="text-[0.88rem] text-[#374B5E] leading-[1.75]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SDG alignment */}
      <section className="bg-navy py-16 px-[5vw]">
        <div className="max-w-[760px]">
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold-light mb-3">Global Alignment</span>
          <h2 className="font-serif text-white font-bold mb-3">Aligned With the SDGs</h2>
          <div className="w-12 h-[3px] bg-gold-light rounded-[2px] mb-6" />
          <p className="text-white/60 leading-[1.85] mb-4">
            YDDF's work directly supports the United Nations Sustainable Development Goals — in
            particular SDG 1 (No Poverty), SDG 4 (Quality Education), SDG 8 (Decent Work and
            Economic Growth), SDG 10 (Reduced Inequalities), and SDG 16 (Peace, Justice and Strong
            Institutions).
          </p>
          <p className="text-white/60 leading-[1.85]">
            Disability inclusion is not a side issue — it is central to achieving the promise that
            no one will be left behind. YDDF is Kenya's grassroots contribution to that global
            commitment.
          </p>
        </div>
      </section>

      <CtaBanner
        heading="Help Us Create More Impact"
        body="Your donation directly funds programs that empower youth with disabilities to overcome barriers and thrive."
        primaryLabel="Donate Now"
        primaryTo="/contact"
        secondaryLabel="View Our Programs"
        secondaryTo="/programs"
      />
    </>
  )
}
