import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'

const values = [
  { num: '01', name: 'Inclusivity', desc: 'We believe in a society that welcomes and accommodates everyone, regardless of ability. Inclusion is not a policy — it is our foundation and daily practice.' },
  { num: '02', name: 'Equality', desc: 'Every person deserves the same rights, dignity, and access to opportunity. We actively challenge systems and attitudes that create barriers for people with disabilities.' },
  { num: '03', name: 'Empowerment', desc: 'We equip individuals with skills and confidence to take charge of their futures. We focus on capability, not dependency — creating leaders from beneficiaries.' },
  { num: '04', name: 'Community', desc: 'We build strong, supportive networks that uplift the entire Gusii region. Every program is designed with community members, for community members.' },
  { num: '05', name: 'Transparency', desc: 'We operate with integrity and accountability in all that we do. Donors, partners, and beneficiaries can always trust how we use the resources entrusted to us.' },
  { num: '06', name: 'Innovation', desc: 'We leverage technology and creative approaches to solve disability challenges in practical, sustainable, and scalable ways suited to the Gusii context.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About YDDF"
        title="Youths With Disability Development Forum"
        subtitle="A Community-Based Organization rooted in the Gusii region of Kenya, founded on the principles of inclusivity, equality, and opportunity for every young person with a disability."
      />

      {/* At a Glance */}
      <section className="bg-[#F7F9FC] py-16 px-[5vw] border-b border-[#D5DEED]">
        <div className="mb-8">
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Organization Profile</span>
          <h2 className="font-serif text-navy font-bold mb-3">At a Glance</h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px]" />
        </div>
        <div className="border border-[#D5DEED] rounded-[6px] overflow-hidden">
          {[
            { k: 'Full Name', v: 'Youths With Disability Development Forum (YDDF)' },
            { k: 'Type', v: 'Community-Based Organization (CBO)' },
            { k: 'Location', v: 'Gusii Region, Nyanza Province, Kenya' },
            { k: 'Focus Areas', v: 'Technology · Advocacy · Economic Empowerment' },
            { k: 'Target Group', v: 'Young people living with disabilities in the Gusii region' },
            { k: 'Phone', v: '+254 793 510201' },
            { k: 'Email', v: 'yddf94odongo@gmail.com' },
          ].map(({ k, v }, i, arr) => (
            <div
              key={k}
              className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7F9FC]'} ${i < arr.length - 1 ? 'border-b border-[#D5DEED]' : ''}`}
            >
              <span className="px-6 py-4 text-[0.75rem] font-bold tracking-[0.08em] uppercase text-[#607080] sm:border-r border-b sm:border-b-0 border-[#D5DEED]">{k}</span>
              <span className="px-6 py-4 text-[0.92rem] text-navy font-medium">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-16 px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#D5DEED] border-t-[3px] border-t-navy rounded-[6px] p-10">
            <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Our Vision</span>
            <h3 className="font-serif text-navy font-semibold text-[1.15rem] mb-4">What We Are Working Towards</h3>
            <p className="text-[#374B5E] leading-[1.85] text-[0.95rem]">
              An inclusive society where youth with disabilities thrive and lead — where every young
              person is empowered to realize their full potential, regardless of ability.
            </p>
          </div>
          <div className="bg-white border border-[#D5DEED] border-t-[3px] border-t-gold rounded-[6px] p-10">
            <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Our Mission</span>
            <h3 className="font-serif text-navy font-semibold text-[1.15rem] mb-4">What We Do Every Day</h3>
            <p className="text-[#374B5E] leading-[1.85] text-[0.95rem]">
              To create opportunities and amplify the voices of young persons with disabilities
              through advocacy, skills development, and economic empowerment — ensuring no one is
              left behind.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#F7F9FC] py-16 px-[5vw] border-t border-[#D5DEED]">
        <div className="max-w-[760px]">
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Our Story</span>
          <h2 className="font-serif text-navy font-bold mb-3">Why YDDF Exists</h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-6" />
          <p className="text-[#374B5E] leading-[1.85] mb-4">
            YDDF was born from a recognition that youth with disabilities in the Gusii region faced
            compounding barriers — inaccessible education, high unemployment, deep-rooted social
            stigma, and an almost complete absence of assistive technology and support structures.
          </p>
          <p className="text-[#374B5E] leading-[1.85] mb-4">
            We believe that disability is not inability. With the right support, digital skills, and
            opportunities, every young person can contribute meaningfully to their community and
            economy. YDDF was established to be the bridge between the potential of young persons
            with disabilities and the opportunities they deserve.
          </p>
          <p className="text-[#374B5E] leading-[1.85]">
            Through advocacy, vocational training, digital skills programs, and resource
            mobilization, we work every day to dismantle barriers and build a more inclusive Gusii
            region — one young person at a time.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 px-[5vw]">
        <div className="text-center mb-12">
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Core Values</span>
          <h2 className="font-serif text-navy font-bold mb-3">What We Stand For</h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mx-auto mb-4" />
          <p className="text-[#607080] text-[1.05rem] max-w-[600px] mx-auto">
            Six foundational values that shape every decision, program, and partnership at YDDF.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.num} className="bg-[#F7F9FC] border border-[#D5DEED] rounded-[6px] p-8 hover:border-navy hover:shadow-[0_4px_20px_rgba(10,38,71,0.07)] transition-all duration-200">
              <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-2">Value {v.num}</span>
              <h4 className="font-serif text-navy font-bold text-[1rem] mb-3">{v.name}</h4>
              <p className="text-[0.875rem] text-[#607080] leading-[1.78]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Ready to Make a Difference?"
        body="Your support enables YDDF to reach more youth with disabilities across the Gusii region."
        primaryLabel="Donate Today"
        primaryTo="/contact"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  )
}
