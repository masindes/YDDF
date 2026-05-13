export default function About() {
  return (
    <section id="about" className="bg-[#F7F9FC] py-20 px-[5vw] border-b border-[#D5DEED]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left — narrative */}
        <div>
          <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">
            Who We Are
          </span>
          <h2 className="font-serif text-navy font-bold mb-4">
            A Beacon of Hope in the Gusii Region
          </h2>
          <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-6" />

          <p className="text-[#374B5E] leading-[1.85] text-[0.97rem] mb-4">
            The Youths With Disability Development Forum (YDDF) is a youth-led Community-Based
            Organization rooted in the Gusii region of Kenya, founded on the principles of
            inclusivity, equality, and opportunity.
          </p>
          <p className="text-[#374B5E] leading-[1.85] text-[0.97rem] mb-4">
            We advance the inclusion and empowerment of young persons with disabilities through
            advocacy, skills development, and economic empowerment — ensuring every individual,
            regardless of ability, has access to the tools and opportunities needed to thrive.
          </p>
          <p className="text-[#374B5E] leading-[1.85] text-[0.97rem]">
            Our programs are not charity — they are investments in people, in communities, and in
            Kenya's future.
          </p>

          <div className="flex gap-3 flex-wrap mt-6">
            <a
              href="#programs"
              className="inline-flex items-center gap-2 bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-navy-mid hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(10,38,71,0.25)]"
            >
              Our Programs
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent text-navy border-[1.5px] border-navy text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-navy hover:text-white hover:-translate-y-px"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right — fact table */}
        <div className="border border-[#D5DEED] rounded-[6px] overflow-hidden">
          {[
            { key: 'Full Name', val: 'Youths With Disability Development Forum (YDDF)' },
            { key: 'Type', val: 'Community-Based Organization (CBO)' },
            { key: 'Location', val: 'Gusii Region, Nyanza, Kenya' },
            { key: 'Focus', val: 'Youth with Disabilities — Technology, Advocacy & Empowerment' },
            { key: 'Target Group', val: 'Young people living with disabilities in the Gusii region' },
            { key: 'Vision', val: 'Inclusive, equitable, and prosperous community for all' },
          ].map(({ key, val }, i) => (
            <div
              key={key}
              className={`grid grid-cols-[140px_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7F9FC]'} ${i < 5 ? 'border-b border-[#D5DEED]' : ''}`}
            >
              <span className="px-5 py-4 text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#607080] border-r border-[#D5DEED]">
                {key}
              </span>
              <span className="px-5 py-4 text-[0.88rem] font-semibold text-navy">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Vision / Mission cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
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
            To create opportunities and amplify the voices of young persons with disabilities through
            advocacy, skills development, and economic empowerment — ensuring no one is left behind.
          </p>
        </div>
      </div>
    </section>
  )
}
