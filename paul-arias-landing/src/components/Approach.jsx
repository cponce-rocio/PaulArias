import { Sparkles } from 'lucide-react'

const APPROACHES = [
  {
    title: 'Terapia cognitivo-conductual',
    text: 'Herramientas prácticas para identificar y transformar los pensamientos y conductas que sostienen el malestar.'
  },
  {
    title: 'Enfoque desde la neurociencia',
    text: 'Comprender cómo funciona el cerebro ayuda a entender por qué sentimos y reaccionamos como lo hacemos.'
  },
  {
    title: 'Acompañamiento a tu ritmo',
    text: 'Cada proceso se adapta a tu momento vital, sin prisas ni juicios, con objetivos claros desde el principio.'
  }
]

export default function Approach() {
  return (
    <section id="como-trabajo" className="bg-cream">
      <div className="container-page py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center flex items-center gap-2">
            <Sparkles size={14} className="text-gold-400" />
            CÓMO TRABAJO
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
            Desde la raíz, no solo desde el síntoma
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-900/70">
            No me centro únicamente en que dejes de sentir algo puntual: me interesa entender qué
            función cumple, de qué te protege y qué necesita cambiar para que tengas más
            bienestar y libertad en tu día a día.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {APPROACHES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink-900/10 bg-paper p-6 text-left shadow-card"
            >
              <h3 className="font-display text-lg text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/65">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
