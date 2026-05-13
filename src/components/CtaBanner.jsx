import { Link } from 'react-router-dom'

export default function CtaBanner({ heading, body, primaryLabel, primaryTo, secondaryLabel, secondaryTo }) {
  return (
    <div className="bg-navy py-20 px-[5vw] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
      <div>
        <h2 className="font-serif text-white font-bold mb-2">{heading}</h2>
        <div className="w-12 h-[3px] bg-gold-light rounded-[2px] mb-4" />
        <p className="text-white/55 max-w-[540px]">{body}</p>
      </div>
      <div className="flex gap-3 flex-wrap shrink-0">
        <Link
          to={primaryTo}
          className="inline-flex items-center gap-2 bg-gold text-white text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-gold-light hover:-translate-y-px"
        >
          {primaryLabel}
        </Link>
        {secondaryLabel && (
          <Link
            to={secondaryTo}
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/50 text-[0.9rem] font-semibold px-6 py-3 rounded-[4px] no-underline transition-all duration-200 hover:bg-white hover:text-navy"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  )
}
