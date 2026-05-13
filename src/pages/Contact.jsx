import { useState } from 'react'
import { Link } from 'react-router-dom'
import { APPS_SCRIPT_URL } from '../config'

export default function Contact() {
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', subject: 'General Enquiry', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')

  function showToast(msg, duration = 5000) {
    setToast(msg)
    setTimeout(() => setToast(''), duration)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.first.trim() || !form.email.trim() || !form.message.trim()) {
      showToast('Please fill in your name, email, and message.')
      return
    }

    setLoading(true)
    try {
      // Apps Script requires no-cors because it doesn't return an
      // Access-Control-Allow-Origin header for doPost endpoints.
      // The request still succeeds and writes to the sheet — the
      // response body is opaque but we treat completion as success.
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
      showToast('Message sent — we will respond within 1–2 business days.')
    } catch {
      showToast('Could not send your message. Please email us directly at yddf94odongo@gmail.com', 7000)
    } finally {
      setLoading(false)
    }
  }

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))
  const inputClass = 'w-full px-4 py-3 border-[1.5px] border-[#D5DEED] rounded-[4px] font-sans text-[0.9rem] bg-[#F7F9FC] text-[#0D1B2A] outline-none focus:border-navy focus:bg-white transition-colors'

  return (
    <>
      {/* Page header */}
      <div className="bg-[#F7F9FC] pt-[100px] pb-14 px-[5vw] border-b border-[#D5DEED]">
        <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Get In Touch</span>
        <h1 className="font-serif text-navy font-bold mb-3">Contact YDDF</h1>
        <div className="w-12 h-[3px] bg-gold rounded-[2px] mb-4" />
        <p className="text-[#607080] text-[1.05rem] max-w-[580px]">
          Whether you are a donor, volunteer, partner organisation, or community member — we welcome your enquiry.
        </p>
      </div>

      {/* CTA strip */}
      <div className="bg-navy py-10 px-[5vw] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <p className="text-white/70 text-[0.95rem]">Prefer to reach us directly?</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="mailto:yddf94odongo@gmail.com" className="inline-flex items-center gap-2 bg-gold text-white text-[0.88rem] font-semibold px-5 py-2 rounded-[4px] no-underline hover:bg-gold-light transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            yddf94odongo@gmail.com
          </a>
          <a href="tel:+254793510201" className="inline-flex items-center gap-2 bg-transparent text-white border border-white/40 text-[0.88rem] font-semibold px-5 py-2 rounded-[4px] no-underline hover:bg-white hover:text-navy transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/></svg>
            +254 793 510201
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#F7F9FC] py-16 px-[5vw] grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">
        {/* Sidebar info */}
        <div>
          <h3 className="font-serif text-navy font-semibold text-[1.1rem] mb-6">Contact Information</h3>
          {[
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              label: 'Location', value: 'Gusii Region, Nyanza Province, Kenya',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/></svg>,
              label: 'Phone', value: '+254 793 510201', href: 'tel:+254793510201',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              label: 'Email', value: 'yddf94odongo@gmail.com', href: 'mailto:yddf94odongo@gmail.com',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
              label: 'Office Hours', value: 'Monday – Friday, 8:00am – 5:00pm EAT',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
              label: 'Organisation', value: 'Registered Community-Based Organization (CBO)',
            },
          ].map(({ icon, label, value, href }) => (
            <div key={label} className="flex gap-4 mb-5 items-start">
              <div className="w-[38px] h-[38px] rounded-[4px] bg-white border border-[#D5DEED] flex items-center justify-center shrink-0">{icon}</div>
              <div>
                <span className="block text-[0.7rem] font-bold tracking-[0.08em] uppercase text-[#607080] mb-[3px]">{label}</span>
                {href
                  ? <a href={href} className="text-[0.9rem] text-[#374B5E] font-medium no-underline hover:text-navy">{value}</a>
                  : <span className="text-[0.9rem] text-[#374B5E] font-medium">{value}</span>
                }
              </div>
            </div>
          ))}

          <div className="mt-8 pt-7 border-t border-[#D5DEED]">
            <h3 className="font-serif text-navy font-semibold text-[1rem] mb-4">Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <Link to="/programs" className="flex items-center justify-center gap-2 bg-navy text-white text-[0.88rem] font-semibold py-3 px-4 rounded-[4px] no-underline hover:bg-navy-mid transition-colors">View Our Programs</Link>
              <Link to="/partners" className="flex items-center justify-center gap-2 bg-transparent text-navy border-[1.5px] border-navy text-[0.88rem] font-semibold py-3 px-4 rounded-[4px] no-underline hover:bg-navy hover:text-white transition-all">Partner With Us</Link>
            </div>
          </div>

          <div className="mt-6 p-5 bg-navy/[0.04] border border-navy/[0.08] rounded-[6px]">
            <p className="font-serif text-navy text-[0.92rem] italic leading-[1.7]">
              "Disability is not inability — YDDF ensures every young person has the opportunity to thrive."
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-[#D5DEED] rounded-[6px] p-10">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mx-auto mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-7 h-7"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="font-serif text-navy text-[1.3rem] font-bold mb-3">Thank You</h3>
              <p className="text-[#607080] text-[0.9rem] max-w-[320px] mx-auto mb-6">
                Your message has been received. We respond to all enquiries within 1–2 business days.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ first: '', last: '', email: '', phone: '', subject: 'General Enquiry', message: '' }) }}
                className="bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] cursor-pointer border-0 hover:bg-navy-mid transition-colors"
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
                  <input type="text" placeholder="John" value={form.first} onChange={set('first')} className={inputClass} />
                </div>
                <div>
                  <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Last Name</label>
                  <input type="text" placeholder="Otieno" value={form.last} onChange={set('last')} className={inputClass} />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" value={form.email} onChange={set('email')} className={inputClass} />
              </div>
              <div className="mb-4">
                <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Phone (Optional)</label>
                <input type="tel" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={set('phone')} className={inputClass} />
              </div>
              <div className="mb-4">
                <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Subject</label>
                <select value={form.subject} onChange={set('subject')} className={inputClass}>
                  {['General Enquiry', 'Partnership / Collaboration', 'Donation / Funding', 'Volunteer Opportunity', 'Program Information', 'Media & Press', 'Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="mb-5">
                <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Message</label>
                <textarea rows={5} placeholder="Tell us how we can help or how you would like to get involved..." value={form.message} onChange={set('message')} className={`${inputClass} resize-y`} />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-navy text-white text-[0.9rem] font-semibold py-3 rounded-[4px] cursor-pointer border-0 hover:bg-navy-mid hover:-translate-y-px transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
                    </svg>
                    Sending…
                  </>
                ) : 'Send Message'}
              </button>
              <p className="text-[0.76rem] text-[#607080] text-center mt-3">We respond to all enquiries within 1–2 business days.</p>
            </form>
          )}
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 bg-navy text-white px-5 py-4 rounded-[4px] text-[0.86rem] font-medium z-[9999] max-w-[300px] leading-snug border-l-[3px] border-gold shadow-xl">
          {toast}
        </div>
      )}
    </>
  )
}
