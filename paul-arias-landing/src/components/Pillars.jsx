import { Brain, HeartPulse, Users, Target } from 'lucide-react'

const PILLARS = [
  {
    icon: Brain,
    title: 'Psicoterapia',
    text: 'Espacio seguro para explorar lo que te preocupa.'
  },
  {
    icon: HeartPulse,
    title: 'Salud mental',
    text: 'Herramientas para afrontar desafíos y mejorar tu bienestar.'
  },
  {
    icon: Users,
    title: 'Conducta',
    text: 'Comprender · Regular · Avanzar.'
  },
  {
    icon: Target,
    title: 'Enfoque personalizado',
    text: 'Cada proceso es único, como cada persona.'
  }
]

export default function Pillars() {
  return (
    <section className="bg-paper">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-16 sm:grid-cols-4 lg:py-20">
        {PILLARS.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="relative text-center px-2">
            {i !== 0 && (
              <span className="absolute -left-3 top-2 hidden h-14 w-px bg-ink-900/10 sm:block" />
            )}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/60">
              <Icon size={26} strokeWidth={1.6} className="text-gold-400" />
            </div>
            <h3 className="font-display text-lg text-ink-900">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-900/60">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
