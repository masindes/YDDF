import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', subject: 'General Enquiry', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [toast, setToast] = useState('')

  function showToast(msg) {
    setToast(msg)
    setTimeout(() => setToast(''), 4000)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.first.trim() || !form.email.trim() || !form.message.trim()) {
      showToast('Please fill in your name, email, and message.')
      return
    }
    setSubmitted(true)
    showToast('Message sent — we will respond within 1–2 business days.')
  }

  return (
    <section id="contact" className="bg-[#F7F9FC] pt-0 pb-0">
      {/* CTA banner */}
      <div className="bg-navy py-20 px-[5vw] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <h2 className="font-serif text-white font-bold mb-2">Partner With YDDF</h2>
          <div className="w-12 h-[3px] bg-gold-light rounded-[2px] mb-4" />
          <p className="text-white/55 max-w-[540px]">
            Join us in creating lasting change for youth with disabilities in the Gusii region. Your
            support funds real programs that transform lives.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap shrink-0">
          <a
            href="mailto:yddf94odongo@gmail.com"
            className="inline-flex items-center gap-2 bg-gold text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-gold-light hover:-translate-y-px"
          >
            Email Us Directly
          </a>
          <a
            href="tel:+254793510201"
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/50 text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-white hover:text-navy"
          >
            Call Us
          </a>
        </div>
      </div>

      {/* Contact body */}
      <div className="py-16 px-[5vw] grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
        {/* Sidebar */}
        <div>
          <h3 className="font-serif text-navy font-semibold text-[1.1rem] mb-6">Contact Information</h3>

          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--tw-color-navy,#0A2647)" strokeWidth="2" className="w-4 h-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: 'Location',
              value: 'Gusii Region, Nyanza Province, Kenya',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
                </svg>
              ),
              label: 'Phone',
              value: '+254 793 510201',
              href: 'tel:+254793510201',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              label: 'Email',
              value: 'yddf94odongo@gmail.com',
              href: 'mailto:yddf94odongo@gmail.com',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              label: 'Office Hours',
              value: 'Monday – Friday, 8:00am – 5:00pm EAT',
            },
          ].map(({ icon, label, value, href }) => (
            <div key={label} className="flex gap-4 mb-5 items-start">
              <div className="w-[38px] h-[38px] rounded-[4px] bg-[#EDF1F6] border border-[#D5DEED] flex items-center justify-center shrink-0">
                {icon}
              </div>
              <div>
                <span className="block text-[0.7rem] font-bold tracking-[0.08em] uppercase text-[#607080] mb-[3px]">
                  {label}
                </span>
                {href ? (
                  <a href={href} className="text-[0.9rem] text-[#374B5E] font-medium no-underline hover:text-navy">
                    {value}
                  </a>
                ) : (
                  <span className="text-[0.9rem] text-[#374B5E] font-medium">{value}</span>
                )}
              </div>
            </div>
          ))}

          {/* Disability tagline */}
          <div className="mt-8 p-5 bg-navy/[0.04] border border-navy/[0.08] rounded-[6px]">
            <p className="font-serif text-navy text-[0.95rem] italic leading-[1.7]">
              "Disability is not inability — YDDF ensures every young person has the opportunity to
              thrive."
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-[#D5DEED] rounded-[6px] p-10">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mx-auto mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-7 h-7">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-serif text-navy text-[1.3rem] font-bold mb-3">Thank You</h3>
              <p className="text-[#607080] text-[0.9rem] max-w-[320px] mx-auto mb-6">
                Your message has been received. We will respond within 1–2 business days.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ first: '', last: '', email: '', phone: '', subject: 'General Enquiry', message: '' }) }}
                className="bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] cursor-pointer border-0 transition-colors hover:bg-navy-mid"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="font-serif text-navy font-semibold text-[1.1rem] mb-6">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={form.first}
                    onChange={e => setForm(f => ({ ...f, first: e.target.value }))}
                    className="w-full px-4 py-3 border-[1.5px] border-[#D5DEED] rounded-[4px] font-sans text-[0.9rem] bg-[#F7F9FC] text-[#0D1B2A] outline-none focus:border-navy focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Otieno"
                    value={form.last}
                    onChange={e => setForm(f => ({ ...f, last: e.target.value }))}
                    className="w-full px-4 py-3 border-[1.5px] border-[#D5DEED] rounded-[4px] font-sans text-[0.9rem] bg-[#F7F9FC] text-[#0D1B2A] outline-none focus:border-navy focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {[
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@example.com' },
                { label: 'Phone (Optional)', key: 'phone', type: 'tel', placeholder: '+254 7XX XXX XXX' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key} className="mb-4">
                  <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    className="w-full px-4 py-3 border-[1.5px] border-[#D5DEED] rounded-[4px] font-sans text-[0.9rem] bg-[#F7F9FC] text-[#0D1B2A] outline-none focus:border-navy focus:bg-white transition-colors"
                  />
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Subject</label>
                <select
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-3 border-[1.5px] border-[#D5DEED] rounded-[4px] font-sans text-[0.9rem] bg-[#F7F9FC] text-[#0D1B2A] outline-none focus:border-navy focus:bg-white transition-colors"
                >
                  {['General Enquiry', 'Partnership / Collaboration', 'Donation / Funding', 'Volunteer Opportunity', 'Program Information', 'Media & Press', 'Other'].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help or how you would like to get involved..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 border-[1.5px] border-[#D5DEED] rounded-[4px] font-sans text-[0.9rem] bg-[#F7F9FC] text-[#0D1B2A] outline-none focus:border-navy focus:bg-white transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-navy text-white text-[0.9rem] font-semibold py-3 rounded-[4px] cursor-pointer border-0 transition-all duration-200 hover:bg-navy-mid hover:-translate-y-px"
              >
                Send Message
              </button>
              <p className="text-[0.76rem] text-[#607080] text-center mt-3">
                We respond to all enquiries within 1–2 business days.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-navy text-white px-5 py-4 rounded-[4px] text-[0.86rem] font-medium z-[9999] max-w-[300px] leading-snug border-l-[3px] border-gold shadow-xl">
          {toast}
        </div>
      )}
    </section>
  )
}
