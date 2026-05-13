import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'

const programs = [
  {
    num: '01',
    tag: 'Economic Empowerment',
    title: 'Economic Empowerment & Entrepreneurship',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    body: [
      'We champion financial independence by facilitating access to vocational training, microfinance opportunities, and income-generating activities. Through strategic partnerships, we help individuals and their families improve their quality of life and achieve sustainable livelihoods.',
      'Programs include tailoring, crafts, agribusiness, and digital entrepreneurship — paired with mentorship, savings groups, and connections to microfinance institutions serving the Gusii region.',
    ],
    outcomes: ['Vocational training', 'Microfinance access', 'Business mentorship', 'Income-generating activities', 'Savings group facilitation'],
  },
  {
    num: '02',
    tag: 'Digital Skills',
    title: 'Digital Skills & Innovation',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    body: [
      'Recognizing that technology is central to education, employment, and entrepreneurship in today\'s world, we provide tailored digital skills training programs. These are specially designed to be accessible and effective for individuals with disabilities, equipping them to thrive in a digital economy.',
      'Training covers computer literacy, internet navigation, digital communication, online freelancing, and basic software — all delivered with adaptive tools and accessible formats suited to different disability types.',
    ],
    outcomes: ['Accessible computer training', 'Internet & communication skills', 'Online freelancing', 'Adaptive technology use', 'Digital literacy certification'],
  },
  {
    num: '03',
    tag: 'Policy & Leadership',
    title: 'Policy Advocacy & Leadership Development',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    body: [
      'We actively engage local government, schools, healthcare providers, and the wider public — building a system-wide culture of inclusion that extends beyond individual awareness to institutional and policy change.',
      'Our advocacy work trains community leaders with disabilities to champion their own rights and represent the needs of their peers at local and county government level.',
    ],
    outcomes: ['Policy engagement', 'Government liaison', 'Leadership training', 'Rights advocacy', 'Community workshops'],
  },
  {
    num: '04',
    tag: 'Awareness & Inclusion',
    title: 'Awareness & Inclusion Campaigns',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    body: [
      'We actively raise awareness about disability-related issues through community outreach programs, targeted workshops, and public campaigns. By fostering understanding and acceptance, we aim to eliminate stigma and cultivate a supportive social environment for people with disabilities across the Gusii region.',
      'Campaigns engage schools, markets, healthcare facilities, and religious institutions — reaching thousands of community members with inclusive messaging and lived-experience testimonies.',
    ],
    outcomes: ['Public awareness campaigns', 'Stigma reduction initiatives', 'School outreach', 'Media engagement', 'Inclusive event programming'],
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
    <>
      <PageHero
        eyebrow="Services & Programs"
        title="Our Four Core Programs"
        subtitle="Four interconnected programs designed to systematically address the barriers facing youth with disabilities in the Gusii region."
        bg="bg-forest"
      />

      <section className="bg-white py-16 px-[5vw]">
        <div className="flex flex-col divide-y divide-[#D5DEED]">
          {programs.map((p) => (
            <div key={p.num} className="py-12 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 items-start">
              {/* Number box */}
              <div className="hidden md:flex w-[60px] h-[60px] bg-navy rounded-[4px] items-center justify-center shrink-0">
                <span className="font-serif text-[1.4rem] font-bold text-gold-light">{p.num}</span>
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-[3px] text-[0.68rem] font-bold tracking-[0.1em] uppercase bg-[#FBF5E6] text-gold border border-gold/25 mb-4">
                  {p.tag}
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="md:hidden w-10 h-10 rounded-[4px] bg-navy flex items-center justify-center shrink-0">{p.icon}</div>
                  <h3 className="font-serif text-navy font-bold text-[1.2rem]">{p.title}</h3>
                </div>
                {p.body.map((para, i) => (
                  <p key={i} className="text-[#374B5E] leading-[1.85] text-[0.95rem] mb-4">{para}</p>
                ))}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.outcomes.map((o) => (
                    <span key={o} className="flex items-center gap-1 px-3 py-[5px] rounded-[3px] text-[0.75rem] font-semibold bg-[#EDF1F6] text-[#374B5E] border border-[#D5DEED]">
                      <CheckIcon /> {o}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Help Fund These Programs"
        body="Every donation directly supports youth with disabilities in accessing life-changing programs."
        primaryLabel="Donate Now"
        primaryTo="/contact"
        secondaryLabel="Partner With Us"
        secondaryTo="/partners"
      />
    </>
  )
}
