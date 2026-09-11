import { CalendarDays, ArrowRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_HREF } from '../data/contact.js'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/40" />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 30%, rgba(212,175,55,0.12), transparent 45%), radial-gradient(circle at 85% 70%, rgba(15,52,58,0.08), transparent 50%)'
        }}
      />
      <div className="container-page relative py-20 text-center lg:py-24">
        <p className="eyebrow">EL PRIMER PASO TAMBIÉN ES PARTE DEL PROCESO</p>
        <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl text-ink-900 sm:text-4xl">
          Agenda tu cita
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[1.02rem] leading-relaxed text-ink-900/70">
          Estoy aquí para acompañarte. Escríbeme y coordinamos el horario que mejor se adapte a
          vos.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-900 shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <CalendarDays size={18} strokeWidth={2.2} />
            Agenda una cita
            <ArrowRight size={16} strokeWidth={2.4} />
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#25D366]/50 px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-[#25D366]/10"
          >
            <MessageCircle size={18} strokeWidth={0} fill="#25D366" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
