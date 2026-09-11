import {
  ClipboardCheck,
  UserRound,
  Users2,
  Sprout,
  Microscope,
  HeartHandshake,
  ArrowRight,
  MessageCircle
} from 'lucide-react'
import { WHATSAPP_HREF } from '../data/contact.js'

const SERVICES = [
  {
    icon: ClipboardCheck,
    title: 'Evaluación y diagnóstico',
    text: 'Un primer espacio para entender qué te trae a consulta y orientar el proceso más adecuado para vos.'
  },
  {
    icon: UserRound,
    title: 'Terapia individual',
    text: 'Ansiedad, estado de ánimo, autoestima, estrés. Un espacio solo para vos, a tu ritmo.'
  },
  {
    icon: HeartHandshake,
    title: 'Terapia de pareja',
    text: 'Para mejorar la comunicación y trabajar las dinámicas que generan distancia o conflicto.'
  },
  {
    icon: Users2,
    title: 'Terapia familiar',
    text: 'Cuando una persona lo está pasando mal, el entorno también. Sesiones para mejorar la convivencia.'
  },
  {
    icon: Sprout,
    title: 'Orientación en conducta y hábitos',
    text: 'Herramientas concretas para regular conductas y construir hábitos que sostengan tu bienestar.'
  },
  {
    icon: Microscope,
    title: 'Neurociencia y conducta humana',
    text: 'Un enfoque que integra el funcionamiento del cerebro con la práctica clínica basada en evidencia.'
  }
]

export default function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-ink-gradient text-paper">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.08]"
        style={{
          backgroundImage: "url('/images/brain-birds-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="container-page relative py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">MIS SERVICIOS</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            En qué puedo acompañarte
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-paper/75">
            Trabajo desde la evidencia científica y la empatía, para brindarte herramientas que
            te permitan afrontar lo que vives y alcanzar tus objetivos personales. Cada proceso
            es distinto: estas son las puertas de entrada más habituales.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm transition-colors hover:border-gold-400/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/70">
                <Icon size={19} strokeWidth={1.7} className="text-gold-300" />
              </span>
              <h3 className="mt-4 font-display text-lg text-paper">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{text}</p>
              <a
                href="#contacto"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
              >
                Más información
                <ArrowRight size={14} strokeWidth={2.4} />
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-[1.02rem] leading-relaxed text-paper/75">
            ¿No puedes acudir a la consulta o no estás en Málaga? También trabajo por
            videollamada con personas de toda España.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#25D366]/10"
            >
              <MessageCircle size={17} strokeWidth={0} fill="#25D366" />
              Escríbenos por WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/70 px-6 py-3 text-sm font-semibold text-gold-200 transition-colors hover:bg-gold-400/10"
            >
              Rellenar el formulario
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
