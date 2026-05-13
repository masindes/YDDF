export default function PageHero({ eyebrow, title, subtitle, bg = 'bg-navy', borderColor = 'border-gold' }) {
  return (
    <div className={`${bg} pt-[100px] pb-16 px-[5vw] border-b-[3px] ${borderColor}`}>
      <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold-light mb-3">{eyebrow}</span>
      <h1 className="font-serif text-white font-bold mb-4">{title}</h1>
      {subtitle && (
        <p className="text-white/60 max-w-[640px] text-[1.05rem] leading-[1.8]">{subtitle}</p>
      )}
    </div>
  )
}
