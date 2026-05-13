import { useState } from 'react'
import { Link } from 'react-router-dom'
import { APPS_SCRIPT_URL, SHEET_CONFIGURED } from '../config'

const GMAIL_TO = 'yddf94odongo@gmail.com'

function gmailUrl(subject = '', body = '') {
  return (
    'https://mail.google.com/mail/?view=cm&fs=1' +
    '&to=' + encodeURIComponent(GMAIL_TO) +
    '&su=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body)
  )
}

const SETUP_STEPS = [
  {
    num: '01',
    title: 'Open Apps Script from your Google Sheet',
    detail: (
      <>
        Open your{' '}
        <a
          href="https://docs.google.com/spreadsheets/d/1tZeaOy2I24NkCyLZdnU1rw76U_hUpwGsEBcIoVJ8m8Q"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline hover:text-gold-light"
        >
          Google Sheet
        </a>
        , then click <strong>Extensions → Apps Script</strong>. The script editor opens in a new tab.
      </>
    ),
  },
  {
    num: '02',
    title: 'Paste the script',
    detail: (
      <>
        In the editor, press <kbd className="bg-[#EDF1F6] border border-[#D5DEED] px-1 rounded text-[0.78rem]">Ctrl+A</kbd> to select everything, then delete it.
        Open the file <code className="bg-[#EDF1F6] border border-[#D5DEED] px-1 rounded text-[0.78rem]">google-apps-script.js</code> in
        this project, copy its entire contents, paste into the editor, and click <strong>Save (💾)</strong>.
      </>
    ),
  },
  {
    num: '03',
    title: 'Deploy as a Web App',
    detail: (
      <>
        Click <strong>Deploy → New deployment</strong>. Click the <strong>⚙ gear</strong> next to "Select type"
        and choose <strong>Web app</strong>. Set:
        <ul className="mt-2 ml-4 list-disc text-[0.85rem] text-[#607080] space-y-1">
          <li><strong>Execute as:</strong> Me</li>
          <li><strong>Who has access:</strong> Anyone</li>
        </ul>
        Then click <strong>Deploy</strong>.
      </>
    ),
  },
  {
    num: '04',
    title: 'Authorize the script',
    detail: (
      <>
        Click <strong>Authorize access</strong> → choose your Google account. If you see
        "Google hasn't verified this app", click <strong>Advanced → Go to YDDF Contact Form (unsafe)</strong>
        → <strong>Allow</strong>.
      </>
    ),
  },
  {
    num: '05',
    title: 'Copy the Web App URL',
    detail: (
      <>
        After deployment you'll see a URL like:
        <code className="block mt-2 bg-[#EDF1F6] border border-[#D5DEED] px-3 py-2 rounded text-[0.78rem] break-all">
          https://script.google.com/macros/s/AKfycb.../exec
        </code>
        Click <strong>Copy</strong>.
      </>
    ),
  },
  {
    num: '06',
    title: 'Paste into src/config.js',
    detail: (
      <>
        Open <code className="bg-[#EDF1F6] border border-[#D5DEED] px-1 rounded text-[0.78rem]">src/config.js</code> and replace the empty string:
        <pre className="mt-2 bg-[#0A2647] text-white text-[0.76rem] px-4 py-3 rounded overflow-x-auto leading-relaxed">
{`export const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/YOUR_ID/exec'`}
        </pre>
        Save the file, then <strong>redeploy to Vercel</strong>. Form submissions will now write directly to your Google Sheet.
      </>
    ),
  },
]

function SetupAccordion() {
  const [open, setOpen] = useState(null)
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="bg-white border-t border-[#D5DEED] py-16 px-[5vw]">
      <div className="max-w-[760px] mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-2">
              Developer Setup
            </span>
            <h2 className="font-serif text-navy font-bold text-[1.5rem]">
              Connect to Google Sheets
            </h2>
            <div className="w-12 h-[3px] bg-gold rounded-[2px] mt-3" />
          </div>
          {/* status pill */}
          <div className={`shrink-0 flex items-center gap-2 px-3 py-1 rounded-full border text-[0.72rem] font-bold tracking-[0.05em] uppercase ${
            SHEET_CONFIGURED
              ? 'bg-forest/10 border-forest/30 text-forest'
              : 'bg-[#FBF5E6] border-gold/30 text-gold'
          }`}>
            <span className={`w-2 h-2 rounded-full ${SHEET_CONFIGURED ? 'bg-forest' : 'bg-gold'}`} />
            {SHEET_CONFIGURED ? 'Connected' : 'Not configured'}
          </div>
        </div>

        <p className="text-[#607080] text-[0.95rem] leading-[1.8] mb-8">
          {SHEET_CONFIGURED
            ? 'Your Google Sheet is connected. Contact form submissions are being saved automatically.'
            : 'Follow the 6 steps below to save contact form responses directly to your Google Sheet. Until configured, Send Message opens a Gmail compose window.'}
        </p>

        {/* Steps */}
        <div className="flex flex-col gap-3">
          {SETUP_STEPS.map((step, i) => {
            const isOpen = open === i
            return (
              <div
                key={step.num}
                className={`border rounded-[6px] overflow-hidden transition-colors duration-200 ${
                  isOpen ? 'border-navy' : 'border-[#D5DEED] hover:border-navy/40'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left bg-white cursor-pointer border-0"
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-[0.72rem] font-bold shrink-0 ${
                    isOpen ? 'bg-navy text-white' : 'bg-[#EDF1F6] text-[#607080]'
                  }`}>
                    {step.num}
                  </span>
                  <span className="flex-1 font-semibold text-[0.92rem] text-navy">{step.title}</span>
                  <svg
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`w-4 h-4 text-[#607080] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 bg-[#F7F9FC] border-t border-[#D5DEED] text-[0.88rem] text-[#374B5E] leading-[1.8]">
                    {step.detail}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Optional email notification tip */}
        <div className="mt-6 flex items-start gap-3 bg-[#FBF5E6] border border-gold/25 rounded-[6px] px-5 py-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-4 h-4 shrink-0 mt-[3px]">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p className="text-[0.83rem] text-[#607080] leading-[1.65]">
            <strong className="text-navy">Tip — Email alerts:</strong> To also receive an email every time someone submits
            the form, open the Apps Script and uncomment the{' '}
            <code className="bg-white border border-[#D5DEED] px-1 rounded text-[0.76rem]">MailApp.sendEmail(...)</code>{' '}
            block near the bottom of <code className="bg-white border border-[#D5DEED] px-1 rounded text-[0.76rem]">doPost</code>.
          </p>
        </div>
      </div>
    </section>
  )
}

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

    if (!SHEET_CONFIGURED) {
      // Open Gmail compose with form data pre-filled
      const subject = `[YDDF Contact] ${form.subject}`
      const body =
        `Name: ${form.first} ${form.last}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone || 'N/A'}\n\n` +
        form.message
      window.open(gmailUrl(subject, body), '_blank')
      return
    }

    setLoading(true)
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
      showToast('Message sent — we will respond within 1–2 business days.')
    } catch {
      window.open(
        gmailUrl(`[YDDF Contact] ${form.subject}`,
          `Name: ${form.first} ${form.last}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\n${form.message}`),
        '_blank'
      )
      showToast('Network error — Gmail opened as a backup.', 6000)
    } finally {
      setLoading(false)
    }
  }

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))
  const inputClass =
    'w-full px-4 py-3 border-[1.5px] border-[#D5DEED] rounded-[4px] font-sans text-[0.9rem] bg-[#F7F9FC] text-[#0D1B2A] outline-none focus:border-navy focus:bg-white transition-colors'

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

      {/* Direct contact strip */}
      <div className="bg-navy py-10 px-[5vw] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
        <p className="text-white/70 text-[0.95rem]">Prefer to reach us directly?</p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={gmailUrl('Hello YDDF', '')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-white text-[0.88rem] font-semibold px-5 py-2 rounded-[4px] no-underline hover:bg-gold-light transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Open Gmail
          </a>
          <a
            href="tel:+254793510201"
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/40 text-[0.88rem] font-semibold px-5 py-2 rounded-[4px] no-underline hover:bg-white hover:text-navy transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/>
            </svg>
            +254 793 510201
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#F7F9FC] py-16 px-[5vw] grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">
        {/* Sidebar */}
        <div>
          <h3 className="font-serif text-navy font-semibold text-[1.1rem] mb-6">Contact Information</h3>
          {[
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              label: 'Location',
              value: 'Gusii Region, Nyanza Province, Kenya',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/></svg>,
              label: 'Phone',
              value: '+254 793 510201',
              href: 'tel:+254793510201',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              label: 'Email',
              value: GMAIL_TO,
              href: gmailUrl('Hello YDDF', ''),
              external: true,
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
              label: 'Office Hours',
              value: 'Monday – Friday, 8:00am – 5:00pm EAT',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
              label: 'Organisation',
              value: 'Registered Community-Based Organization (CBO)',
            },
          ].map(({ icon, label, value, href, external }) => (
            <div key={label} className="flex gap-4 mb-5 items-start">
              <div className="w-[38px] h-[38px] rounded-[4px] bg-white border border-[#D5DEED] flex items-center justify-center shrink-0">
                {icon}
              </div>
              <div>
                <span className="block text-[0.7rem] font-bold tracking-[0.08em] uppercase text-[#607080] mb-[3px]">{label}</span>
                {href ? (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="text-[0.9rem] text-[#374B5E] font-medium no-underline hover:text-navy"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-[0.9rem] text-[#374B5E] font-medium">{value}</span>
                )}
              </div>
            </div>
          ))}

          <div className="mt-8 pt-7 border-t border-[#D5DEED]">
            <h3 className="font-serif text-navy font-semibold text-[1rem] mb-4">Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <Link to="/programs" className="flex items-center justify-center gap-2 bg-navy text-white text-[0.88rem] font-semibold py-3 px-4 rounded-[4px] no-underline hover:bg-navy-mid transition-colors">
                View Our Programs
              </Link>
              <Link to="/partners" className="flex items-center justify-center gap-2 bg-transparent text-navy border-[1.5px] border-navy text-[0.88rem] font-semibold py-3 px-4 rounded-[4px] no-underline hover:bg-navy hover:text-white transition-all">
                Partner With Us
              </Link>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-7 h-7">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="font-serif text-navy text-[1.3rem] font-bold mb-3">Thank You</h3>
              <p className="text-[#607080] text-[0.9rem] max-w-[320px] mx-auto mb-6">
                Your message has been received. We respond to all enquiries within 1–2 business days.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm({ first: '', last: '', email: '', phone: '', subject: 'General Enquiry', message: '' })
                }}
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
                  {['General Enquiry','Partnership / Collaboration','Donation / Funding','Volunteer Opportunity','Program Information','Media & Press','Other'].map(o => (
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
                  onChange={set('message')}
                  className={`${inputClass} resize-y`}
                />
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
                ) : SHEET_CONFIGURED ? 'Send Message' : (
                  <span className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Send via Gmail
                  </span>
                )}
              </button>

              <p className="text-[0.76rem] text-[#607080] text-center mt-3">
                {SHEET_CONFIGURED
                  ? 'We respond to all enquiries within 1–2 business days.'
                  : 'Clicking above opens a pre-filled Gmail compose window in a new tab.'}
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Google Sheet setup accordion */}
      <SetupAccordion />

      {toast && (
        <div className="fixed bottom-6 right-6 bg-navy text-white px-5 py-4 rounded-[4px] text-[0.86rem] font-medium z-[9999] max-w-[300px] leading-snug border-l-[3px] border-gold shadow-xl animate-fadeIn">
          {toast}
        </div>
      )}
    </>
  )
}
