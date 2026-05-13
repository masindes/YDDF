import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'

const partnerTypes = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: 'Government Partners',
    desc: 'We engage county and national governments to mainstream disability inclusion in public policy and service delivery.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    title: 'International Donors',
    desc: 'We partner with NGOs, development agencies, and foundations to mobilize resources and scale inclusive solutions across the region.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
    title: 'Private Sector',
    desc: 'Corporate partners provide funding, mentorship, and job placement opportunities for youth with disabilities completing our programs.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Community Networks',
    desc: 'Local organizations, schools, and faith communities amplify our reach and help deliver grassroots programs across the Gusii region.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    title: 'Individual Donors',
    desc: 'Individuals who believe in inclusion contribute financially to fund specific programs, assistive devices, or full scholarship placements.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title: 'Research Institutions',
    desc: 'Academic and research partners help document impact, develop best practices, and build the evidence base for inclusive development in Kenya.',
  },
]

const ways = [
  { num: '01', label: 'Donate Funds', desc: 'Financial contributions fund programs, equipment, and operations directly.' },
  { num: '02', label: 'In-Kind Support', desc: 'Donate assistive devices, computers, software licences, or training materials.' },
  { num: '03', label: 'Technical Assistance', desc: 'Provide expertise in program design, M&E, digital skills, or financial literacy.' },
  { num: '04', label: 'Employment Pathways', desc: 'Offer internships, apprenticeships, or job placements to our program graduates.' },
]

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Together, We Create Lasting Change"
        subtitle="We collaborate with governments, donors, and private sector partners to scale inclusive solutions that transform the lives of youth with disabilities."
        bg="bg-navy-mid"
      />

      {/* Why partner */}
      <section className="bg-[#F7F9FC] py-16 px-[5vw] border-b border-[#D5DEED]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Why Partner With YDDF</span>
            <h2 className="font-serif text-navy font-bold mb-3">A Partnership That Creates Real Impact</h2>
            <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-6" />
            <p className="text-[#374B5E] leading-[1.85] mb-4">
              Disability inclusion is essential for sustainable development — YDDF ensures no one is
              left behind. Whether through funding, expertise, or advocacy, your partnership creates
              measurable impact in the lives of young persons with disabilities in the Gusii region.
            </p>
            <p className="text-[#374B5E] leading-[1.85] mb-6">
              We operate with full transparency and accountability. Partners receive regular impact
              reports, are credited in our communications, and are invited to witness program
              delivery firsthand.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline hover:bg-navy-mid hover:-translate-y-px transition-all duration-200">
              Start a Partnership Conversation
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ways.map((w) => (
              <div key={w.num} className="bg-white border border-[#D5DEED] rounded-[6px] p-6">
                <span className="block font-serif text-[2rem] font-bold text-[#D5DEED] leading-none mb-3">{w.num}</span>
                <h4 className="font-serif text-navy font-bold text-[1rem] mb-2">{w.label}</h4>
                <p className="text-[0.84rem] text-[#607080] leading-[1.7]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section className="bg-white py-16 px-[5vw]">
        <div className="text-center mb-12">
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Who Partners With Us</span>
          <h2 className="font-serif text-navy font-bold mb-3">Types of Partners</h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mx-auto mb-4" />
          <p className="text-[#607080] text-[1.05rem] max-w-[600px] mx-auto">
            YDDF welcomes partnerships from across sectors — each bringing unique value to our shared mission.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partnerTypes.map((p) => (
            <div key={p.title} className="bg-[#F7F9FC] border border-[#D5DEED] rounded-[6px] p-8 hover:border-navy hover:shadow-[0_4px_20px_rgba(10,38,71,0.07)] transition-all duration-200">
              <div className="w-11 h-11 rounded-[4px] bg-navy/[0.07] flex items-center justify-center mb-4">{p.icon}</div>
              <h4 className="font-serif text-navy font-bold text-[0.95rem] mb-2">{p.title}</h4>
              <p className="text-[0.83rem] text-[#607080] leading-[1.7]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Ready to Partner?"
        body="Reach out to explore how your organisation can collaborate with YDDF to empower youth with disabilities in the Gusii region."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Make a Donation"
        secondaryTo="/contact"
      />
    </>
  )
}
