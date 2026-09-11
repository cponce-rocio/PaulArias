import { CalendarDays, ArrowRight } from 'lucide-react'

const PRICES = [
  { label: 'Terapia individual', price: '00 €', unit: 'por sesión' },
  { label: 'Terapia de pareja', price: '00 €', unit: 'por sesión' },
  { label: 'Terapia familiar', price: '00 €', unit: 'por sesión' },
  { label: 'Primera evaluación', price: '00 €', unit: 'sesión inicial' }
]

export default function Pricing() {
  return (
    <section className="bg-paper">
      <div className="container-page py-20 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow justify-center">PRECIOS DE LAS SESIONES</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
            Una inversión clara, sin sorpresas
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-900/70">
            Los precios son los mismos en modalidad presencial que por videollamada.
            <br />
            <span className="text-sm text-ink-900/45">
              (Valores de ejemplo — reemplázalos por tus tarifas reales.)
            </span>
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4">
          {PRICES.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gold-400/30 bg-cream px-4 py-7 text-center shadow-card"
            >
              <p className="font-display text-3xl text-ink-900">{item.price}</p>
              <p className="mt-2 text-sm font-semibold text-ink-900/80">{item.label}</p>
              <p className="mt-1 text-xs text-ink-900/50">{item.unit}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="max-w-md text-sm text-ink-900/60">
            ¿No ves lo tuyo en esta lista? Cuéntamelo y vemos si puedo ayudarte; si no soy el
            profesional adecuado, te lo diré.
          </p>
          <a
            href="#contacto"
            className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-900 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <CalendarDays size={18} strokeWidth={2.2} />
            Reservar llamada gratuita de 15 min
            <ArrowRight size={16} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  )
}
