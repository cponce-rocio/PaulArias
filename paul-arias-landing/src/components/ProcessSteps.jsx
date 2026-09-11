const STEPS = [
  {
    number: '01',
    title: 'Llamada gratuita · 15 min',
    text: 'Me cuentas qué te está pasando y te explico cómo trabajo. Preguntas lo que necesites y decides con calma, sin compromiso.'
  },
  {
    number: '02',
    title: 'Primeras sesiones',
    text: 'Empezamos la terapia: ponemos palabras a lo que te trae y marcamos objetivos claros desde el principio.'
  },
  {
    number: '03',
    title: 'Proceso adaptado',
    text: 'Ajustamos el proceso a tu situación y lo revisamos juntos a medida que avanza. Cada persona lleva su ritmo.'
  }
]

export default function ProcessSteps() {
  return (
    <section className="bg-paper">
      <div className="container-page py-20 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow justify-center">CÓMO EMPEZAMOS</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
            Tres pasos, sin complicaciones
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative text-center">
              <p className="font-display text-5xl text-gold-300/60">{step.number}</p>
              <h3 className="mt-3 font-display text-lg text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/65">{step.text}</p>
              {i < STEPS.length - 1 && (
                <span className="absolute -right-5 top-6 hidden h-px w-10 bg-gold-400/40 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
