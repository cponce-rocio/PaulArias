import { useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: '¿Qué pasa después de escribirme?',
    a: 'Leo tu mensaje y te respondo por el medio que hayas elegido. En esa primera conversación me cuentas qué te trae, resolvemos dudas y, si quieres seguir, buscamos día y hora para la primera sesión. Sin compromiso: te respondo personalmente, no un contestador.'
  },
  {
    q: '¿Atiendes solo en Málaga o también online?',
    a: 'Las dos cosas. Atiendo en consulta en Málaga y también por videollamada a personas de cualquier punto de España. El trabajo es el mismo que en consulta; cambia la pantalla.'
  },
  {
    q: '¿Es confidencial?',
    a: 'Sí. Me obliga el secreto profesional y además es uno de los valores de la consulta. Lo que compartas en el formulario viaja y se guarda de forma segura, y solo se usa para responderte.'
  },
  {
    q: '¿Cuánto cuesta una sesión?',
    a: 'Los precios varían según el tipo de terapia (individual, pareja o familiar). Puedes verlos en la sección de precios más arriba. Preguntar no te compromete a nada.'
  },
  {
    q: '¿Cómo sé si necesito terapia?',
    a: 'No hace falta llegar con un diagnóstico. Si algo te preocupa, te cuesta gestionar o simplemente sientes que quieres sentirte mejor, ese es motivo suficiente para consultar. En la primera llamada lo vemos juntos.'
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-cream">
      <div className="container-page py-20 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow justify-center">PREGUNTAS FRECUENTES</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-ink-900/10 rounded-2xl border border-ink-900/10 bg-paper shadow-card">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[1.05rem] text-ink-900">{item.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-gold-500 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-ink-900/65">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
