import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { APPS_SCRIPT_URL, SHEET_CONFIGURED } from '../config'

// ── Constants ────────────────────────────────────────────────────────────────
const GMAIL_TO  = 'yddf94odongo@gmail.com'
const MSG_MAX   = 1000
const MSG_MIN   = 20
const MAX_RETRY = 2
const EMAIL_RE  = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE  = /^[+\d][\d\s\-().]{5,19}$/
const INITIAL   = { first: '', last: '', email: '', phone: '', subject: 'General Enquiry', message: '', _trap: '' }
const SUBJECTS  = ['General Enquiry','Partnership / Collaboration','Donation / Funding','Volunteer Opportunity','Program Information','Media & Press','Other']

// ── Algorithm 1: Pure validation ─────────────────────────────────────────────
function validate(f) {
  const e = {}
  if (!f.first.trim())                        e.first   = 'First name is required'
  else if (f.first.trim().length < 2)         e.first   = 'At least 2 characters'
  if (!f.email.trim())                        e.email   = 'Email address is required'
  else if (!EMAIL_RE.test(f.email.trim()))    e.email   = 'Enter a valid email address'
  if (f.phone && !PHONE_RE.test(f.phone))     e.phone   = 'Enter a valid phone number'
  if (!f.message.trim())                      e.message = 'Message is required'
  else if (f.message.trim().length < MSG_MIN) e.message = `Minimum ${MSG_MIN} characters (${f.message.trim().length} so far)`
  return e
}

// ── Algorithm 2: Retry with exponential backoff ──────────────────────────────
async function postWithRetry(payload, attempt = 0) {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return { ok: true }
  } catch {
    if (attempt < MAX_RETRY) {
      await new Promise(r => setTimeout(r, 800 * Math.pow(2, attempt)))
      return postWithRetry(payload, attempt + 1)
    }
    return { ok: false }
  }
}

// ── Gmail helper ─────────────────────────────────────────────────────────────
function gmailUrl(subject = '', body = '') {
  return (
    'https://mail.google.com/mail/?view=cm&fs=1' +
    '&to='  + encodeURIComponent(GMAIL_TO) +
    '&su='  + encodeURIComponent(subject) +
    '&body='+ encodeURIComponent(body)
  )
}
function buildGmailUrl(f) {
  return gmailUrl(
    `[YDDF Contact] ${f.subject}`,
    `Name: ${f.first.trim()} ${f.last.trim()}\nEmail: ${f.email.trim()}\nPhone: ${f.phone.trim() || 'N/A'}\n\n${f.message.trim()}`
  )
}

// ── Setup accordion ──────────────────────────────────────────────────────────
const SETUP_STEPS = [
  {
    num: '01', title: 'Open Apps Script from your Google Sheet',
    detail: (<>Open your{' '}<a href="https://docs.google.com/spreadsheets/d/1tZeaOy2I24NkCyLZdnU1rw76U_hUpwGsEBcIoVJ8m8Q" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-gold-light">Google Sheet</a>, then click <strong>Extensions → Apps Script</strong>.</>),
  },
  {
    num: '02', title: 'Paste the script',
    detail: (<>Press <kbd className="bg-[#EDF1F6] border border-[#D5DEED] px-1 rounded text-[0.78rem]">Ctrl+A</kbd>, delete, then paste the entire contents of <code className="bg-[#EDF1F6] border border-[#D5DEED] px-1 rounded text-[0.78rem]">google-apps-script.js</code> and click <strong>Save (💾)</strong>.</>),
  },
  {
    num: '03', title: 'Deploy as a Web App',
    detail: (<>Click <strong>Deploy → New deployment → ⚙ Web app</strong>. Set <strong>Execute as: Me</strong>, <strong>Who has access: Anyone</strong>, then <strong>Deploy</strong>.</>),
  },
  {
    num: '04', title: 'Authorize the script',
    detail: (<>Click <strong>Authorize access</strong>, choose your Google account. If shown "not verified", click <strong>Advanced → Go to YDDF Contact Form (unsafe) → Allow</strong>.</>),
  },
  {
    num: '05', title: 'Copy the Web App URL',
    detail: (<>After deployment copy the URL like: <code className="block mt-2 bg-[#EDF1F6] border border-[#D5DEED] px-3 py-2 rounded text-[0.78rem] break-all">https://script.google.com/macros/s/AKfycb.../exec</code></>),
  },
  {
    num: '06', title: 'Paste into src/config.js',
    detail: (<>Open <code className="bg-[#EDF1F6] border border-[#D5DEED] px-1 rounded text-[0.78rem]">src/config.js</code> and set:<pre className="mt-2 bg-[#0A2647] text-white text-[0.76rem] px-4 py-3 rounded overflow-x-auto">{`export const APPS_SCRIPT_URL =\n  'https://script.google.com/macros/s/YOUR_ID/exec'`}</pre>Save, then <strong>redeploy to Vercel</strong>.</>),
  },
]

function SetupAccordion() {
  const [open, setOpen] = useState(null)
  return (
    <section className="bg-white border-t border-[#D5DEED] py-16 px-[5vw]">
      <div className="max-w-[760px] mx-auto">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold mb-2">Developer Setup</span>
            <h2 className="font-serif text-navy font-bold text-[1.5rem]">Connect to Google Sheets</h2>
            <div className="w-12 h-[3px] bg-gold rounded-[2px] mt-3" />
          </div>
          <div className={`shrink-0 flex items-center gap-2 px-3 py-1 rounded-full border text-[0.72rem] font-bold tracking-[0.05em] uppercase ${SHEET_CONFIGURED ? 'bg-forest/10 border-forest/30 text-forest' : 'bg-[#FBF5E6] border-gold/30 text-gold'}`}>
            <span className={`w-2 h-2 rounded-full ${SHEET_CONFIGURED ? 'bg-forest' : 'bg-gold'}`} />
            {SHEET_CONFIGURED ? 'Connected' : 'Not configured'}
          </div>
        </div>
        <p className="text-[#607080] text-[0.95rem] leading-[1.8] mb-8">
          {SHEET_CONFIGURED
            ? 'Your Google Sheet is connected. Contact form submissions are saved automatically.'
            : 'Follow the 6 steps below to save form responses to your Google Sheet. Until configured, Send Message opens Gmail.'}
        </p>
        <div className="flex flex-col gap-3">
          {SETUP_STEPS.map((step, i) => {
            const isOpen = open === i
            return (
              <div key={step.num} className={`border rounded-[6px] overflow-hidden transition-colors duration-200 ${isOpen ? 'border-navy' : 'border-[#D5DEED] hover:border-navy/40'}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center gap-4 px-5 py-4 text-left bg-white cursor-pointer border-0">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-[0.72rem] font-bold shrink-0 ${isOpen ? 'bg-navy text-white' : 'bg-[#EDF1F6] text-[#607080]'}`}>{step.num}</span>
                  <span className="flex-1 font-semibold text-[0.92rem] text-navy">{step.title}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-4 h-4 text-[#607080] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 bg-[#F7F9FC] border-t border-[#D5DEED] text-[0.88rem] text-[#374B5E] leading-[1.8]">{step.detail}</div>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-6 flex items-start gap-3 bg-[#FBF5E6] border border-gold/25 rounded-[6px] px-5 py-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="#B8902A" strokeWidth="2" className="w-4 h-4 shrink-0 mt-[3px]"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p className="text-[0.83rem] text-[#607080] leading-[1.65]">
            <strong className="text-navy">Tip — Email alerts:</strong> Uncomment the <code className="bg-white border border-[#D5DEED] px-1 rounded text-[0.76rem]">MailApp.sendEmail(...)</code> block in the Apps Script to receive an email on every submission.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export default function Contact() {
  const [form,    setForm]    = useState(INITIAL)
  const [errors,  setErrors]  = useState({})
  const [touched, setTouched] = useState(new Set())
  const [status,  setStatus]  = useState('idle') // idle | submitting | success | error
  const [toast,   setToast]   = useState(null)
  const firstErrorRef = useRef(null)

  function showToast(msg, type = 'success', ms = 5000) {
    setToast({ msg, type })
    setTimeout(() => setToast(null), ms)
  }

  // Algorithm 3: live validation — only for already-touched fields
  function change(key) {
    return (e) => {
      const val = key === 'message' ? e.target.value.slice(0, MSG_MAX) : e.target.value
      const next = { ...form, [key]: val }
      setForm(next)
      if (touched.has(key)) setErrors(validate(next))
    }
  }

  function blur(key) {
    return () => {
      const next = new Set(touched)
      next.add(key)
      setTouched(next)
      setErrors(validate(form))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // Algorithm 4: honeypot — silently discard bot submissions
    if (form._trap) return

    // Touch all fields to surface every error
    const all = new Set(['first', 'last', 'email', 'phone', 'message'])
    setTouched(all)
    const errs = validate(form)
    setErrors(errs)

    if (Object.keys(errs).length > 0) {
      firstErrorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    if (!SHEET_CONFIGURED) {
      showToast('Form not yet connected to Google Sheet — see setup steps below.', 'error', 7000)
      return
    }

    setStatus('submitting')
    const result = await postWithRetry({
      first: form.first.trim(), last: form.last.trim(),
      email: form.email.trim(), phone: form.phone.trim(),
      subject: form.subject,    message: form.message.trim(),
    })

    if (result.ok) {
      setStatus('success')
    } else {
      showToast('Could not send your message. Please try again or call us directly.', 'error', 7000)
      setStatus('idle')
    }
  }

  // Field styling: normal / error / valid
  function cls(key) {
    const base = 'w-full px-4 py-3 border-[1.5px] rounded-[4px] font-sans text-[0.9rem] outline-none transition-colors'
    if (!touched.has(key))    return `${base} border-[#D5DEED] bg-[#F7F9FC] text-[#0D1B2A] focus:border-navy focus:bg-white`
    if (errors[key])          return `${base} border-red-400 bg-red-50 text-[#0D1B2A] focus:border-red-500`
    return `${base} border-forest/60 bg-white text-[#0D1B2A] focus:border-forest`
  }

  function FieldError({ name }) {
    if (!touched.has(name) || !errors[name]) return null
    return (
      <p ref={Object.keys(errors)[0] === name ? firstErrorRef : null} className="flex items-center gap-1 text-red-500 text-[0.73rem] mt-1">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        {errors[name]}
      </p>
    )
  }

  const submitting = status === 'submitting'

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
          <a href={gmailUrl('Hello YDDF', '')} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-white text-[0.88rem] font-semibold px-5 py-2 rounded-[4px] no-underline hover:bg-gold-light transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Open Gmail
          </a>
          <a href="tel:+254793510201"
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/40 text-[0.88rem] font-semibold px-5 py-2 rounded-[4px] no-underline hover:bg-white hover:text-navy transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/></svg>
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
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Location', value: 'Gusii Region, Nyanza Province, Kenya' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/></svg>, label: 'Phone', value: '+254 793 510201', href: 'tel:+254793510201' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'Email', value: GMAIL_TO, href: gmailUrl('Hello YDDF', ''), external: true },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: 'Office Hours', value: 'Monday – Friday, 8:00am – 5:00pm EAT' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A2647" strokeWidth="2" className="w-4 h-4"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>, label: 'Organisation', value: 'Registered Community-Based Organization (CBO)' },
          ].map(({ icon, label, value, href, external }) => (
            <div key={label} className="flex gap-4 mb-5 items-start">
              <div className="w-[38px] h-[38px] rounded-[4px] bg-white border border-[#D5DEED] flex items-center justify-center shrink-0">{icon}</div>
              <div>
                <span className="block text-[0.7rem] font-bold tracking-[0.08em] uppercase text-[#607080] mb-[3px]">{label}</span>
                {href ? (
                  <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
                    className="text-[0.9rem] text-[#374B5E] font-medium no-underline hover:text-navy">{value}</a>
                ) : (
                  <span className="text-[0.9rem] text-[#374B5E] font-medium">{value}</span>
                )}
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
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mx-auto mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-7 h-7"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="font-serif text-navy text-[1.3rem] font-bold mb-3">Thank You</h3>
              <p className="text-[#607080] text-[0.9rem] max-w-[320px] mx-auto mb-6">
                Your message has been received. We respond to all enquiries within 1–2 business days.
              </p>
              <button
                onClick={() => { setStatus('idle'); setForm(INITIAL); setErrors({}); setTouched(new Set()) }}
                className="bg-navy text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] cursor-pointer border-0 hover:bg-navy-mid transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="font-serif text-navy font-semibold text-[1.1rem] mb-6">Send a Message</h3>

              {/* Honeypot — invisible to humans, bots fill it */}
              <input
                type="text" name="_trap" value={form._trap}
                onChange={e => setForm(f => ({ ...f, _trap: e.target.value }))}
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', tabIndex: -1 }}
                aria-hidden="true" autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text" placeholder="John"
                    value={form.first} onChange={change('first')} onBlur={blur('first')}
                    aria-invalid={!!errors.first} aria-describedby="err-first"
                    className={cls('first')}
                  />
                  <FieldError name="first" />
                </div>
                <div>
                  <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Last Name</label>
                  <input
                    type="text" placeholder="Otieno"
                    value={form.last} onChange={change('last')} onBlur={blur('last')}
                    className={cls('last')}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email" placeholder="john@example.com"
                  value={form.email} onChange={change('email')} onBlur={blur('email')}
                  aria-invalid={!!errors.email}
                  className={cls('email')}
                />
                <FieldError name="email" />
              </div>

              <div className="mb-4">
                <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Phone (Optional)</label>
                <input
                  type="tel" placeholder="+254 7XX XXX XXX"
                  value={form.phone} onChange={change('phone')} onBlur={blur('phone')}
                  aria-invalid={!!errors.phone}
                  className={cls('phone')}
                />
                <FieldError name="phone" />
              </div>

              <div className="mb-4">
                <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E] mb-2">Subject</label>
                <select value={form.subject} onChange={change('subject')} className={cls('subject')}>
                  {SUBJECTS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div className="mb-5">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="block text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#374B5E]">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <span className={`text-[0.7rem] tabular-nums ${form.message.length >= MSG_MAX * 0.9 ? 'text-gold' : 'text-[#9AABB8]'}`}>
                    {form.message.length}/{MSG_MAX}
                  </span>
                </div>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help or how you would like to get involved..."
                  value={form.message} onChange={change('message')} onBlur={blur('message')}
                  aria-invalid={!!errors.message}
                  className={`${cls('message')} resize-y`}
                />
                <FieldError name="message" />
              </div>

              <button
                type="submit" disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-navy text-white text-[0.9rem] font-semibold py-3 rounded-[4px] cursor-pointer border-0 hover:bg-navy-mid hover:-translate-y-px transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
                    </svg>
                    Sending…
                  </>
                ) : 'Send Message'}
              </button>

              <p className="text-[0.76rem] text-[#607080] text-center mt-3">
                We respond to all enquiries within 1–2 business days.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Google Sheet setup accordion */}
      <SetupAccordion />

      {/* Toast notification */}
      {toast && (
        <div className={`fixed bottom-6 right-6 px-5 py-4 rounded-[4px] text-[0.86rem] font-medium z-[9999] max-w-[300px] leading-snug shadow-xl border-l-[3px] ${
          toast.type === 'error'
            ? 'bg-white text-[#374B5E] border-red-400'
            : 'bg-navy text-white border-gold'
        }`}>
          {toast.msg}
        </div>
      )}
    </>
  )
}
