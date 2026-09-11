import { HandHeart, Link2, Lock, Palette, Users, Feather } from 'lucide-react'

const VALUES = [
  {
    icon: HandHeart,
    title: 'Aceptación',
    text: 'Llegas como eres, con todo lo que traes, sin necesidad de ordenarlo antes.'
  },
  {
    icon: Link2,
    title: 'Conexión',
    text: 'Un entorno cómodo y seguro en el que puedas hablar sin medir cada palabra.'
  },
  {
    icon: Lock,
    title: 'Confidencialidad',
    text: 'Lo que compartes se queda aquí, protegido. Siempre.'
  },
  {
    icon: Palette,
    title: 'Creatividad',
    text: 'Cuando las palabras no llegan, buscamos otras formas de decir lo que cuesta.'
  },
  {
    icon: Users,
    title: 'Humanidad',
    text: 'Me importa lo que estás viviendo, y se ve en el trato: presencia sincera, sin prisas ni juicios.'
  },
  {
    icon: Feather,
    title: 'Respeto',
    text: 'Tu ritmo manda. Te acompaño sin empujarte.'
  }
]

export default function Values() {
  return (
    <section className="bg-cream">
      <div className="container-page py-20 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow justify-center">CÓMO TE VOY A TRATAR</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
            Principios que guían cada sesión
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-400/60">
                <Icon size={19} strokeWidth={1.7} className="text-gold-500" />
              </span>
              <div>
                <h3 className="font-display text-lg text-ink-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-900/65">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
