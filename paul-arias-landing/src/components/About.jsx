import { GraduationCap, Brain, User } from 'lucide-react'

const HIGHLIGHTS = [
  { icon: GraduationCap, text: 'Máster en Psicología Clínica y de la Salud' },
  { icon: Brain, text: 'Formación en neurociencia y conducta humana' },
  { icon: User, text: 'Atención adultos y jóvenes' }
]

export default function About() {
  return (
    <section id="sobre-mi" className="bg-paper">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-gold-400/30 bg-paper shadow-card lg:mx-0">
          <img
            src="/images/paul-portrait.webp"
            alt="Mgtr. Paúl Arias, Psicólogo Clínico"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div>
          <p className="eyebrow">SOBRE MÍ</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">Mgtr. Paúl Arias</h2>
          <p className="mt-1.5 text-sm font-semibold tracking-[0.14em] text-ink-700">
            PSICÓLOGO CLÍNICO · COLEGIADO N.º 00000
          </p>

          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink-900/75">
            Soy Máster en Psicología Clínica y de la Salud, con formación en neurociencia y
            conducta humana. Mi enfoque integra la comprensión del cerebro con herramientas
            terapéuticas efectivas, para ayudarte a alcanzar un mayor equilibrio emocional y
            mejorar tu calidad de vida.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <Icon size={22} strokeWidth={1.7} className="mt-0.5 shrink-0 text-ink-800" />
                <p className="text-sm leading-snug text-ink-900/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
