import { CalendarDays, ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { CONTACT, WHATSAPP_HREF } from '../data/contact.js'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink-gradient text-paper">
      {/* subtle decorative ring */}
      <div className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 h-[560px] w-[560px] rounded-full border border-gold-400/25 lg:block" />

      <div className="container-page relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow">PSICOLOGÍA CLÍNICA</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.12] sm:text-5xl lg:text-[3.4rem]">
            Tu bienestar mental
            <br />
            <span className="text-gold-300">también importa</span>
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-paper/80">
            Te acompaño a comprender lo que sientes, mejorar tu conducta y construir una vida
            con mayor equilibrio.
          </p>

          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-paper/75">
            También disponible en modalidad online, para toda España
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-900 shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CalendarDays size={18} strokeWidth={2.2} />
              Agenda una cita
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#25D366]/50 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-[#25D366]/10"
            >
              <MessageCircle size={18} strokeWidth={0} fill="#25D366" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <a
            href={CONTACT.phoneHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-paper/75 transition-colors hover:text-gold-200"
          >
            <Phone size={15} strokeWidth={2} />
            O llama directamente al {CONTACT.phoneDisplay}
          </a>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm justify-center lg:max-w-none">
          <svg
            viewBox="0 0 100 100"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-70 sm:h-[500px] sm:w-[500px] lg:h-[560px] lg:w-[560px]"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="46" fill="none" stroke="#d4af37" strokeWidth="0.4" />
          </svg>
          <img
            src="/images/paul-hero.webp"
            alt="Mgtr. Paúl Arias, Psicólogo Clínico, junto a una ilustración de un cerebro dividido entre trazos en verde azulado y una red neuronal dorada"
            className="relative h-[360px] w-auto object-contain object-bottom sm:h-[420px] lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  )
}
