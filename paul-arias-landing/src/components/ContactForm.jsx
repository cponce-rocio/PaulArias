import { useState } from 'react'
import { MessageCircle, Phone, Send, CheckCircle2 } from 'lucide-react'
import { CONTACT, WHATSAPP_HREF } from '../data/contact.js'

const CONTACT_PREFS = ['WhatsApp', 'Llamada', 'Email']

export default function ContactForm() {
  const [preference, setPreference] = useState('WhatsApp')
  const [accepted, setAccepted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!accepted) return
    // TODO: conectar con tu backend, servicio de email o integración real.
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-cream">
      <div className="container-page py-20 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow justify-center">DA EL PRIMER PASO</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">¿Hablamos?</h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-900/70">
            Escribir el primer mensaje suele ser lo más difícil. No hace falta que sepas
            explicarlo todo: cuéntame brevemente qué te trae y te contacto por donde prefieras.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-ink-900/10 bg-cream p-7 shadow-card sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 size={40} className="text-gold-500" strokeWidth={1.6} />
                <p className="font-display text-xl text-ink-900">¡Mensaje enviado!</p>
                <p className="max-w-xs text-sm text-ink-900/60">
                  Gracias por escribir. Te contactaré lo antes posible por el medio que
                  elegiste.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-900/80">
                    Nombre*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-ink-900/15 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-900/80">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-xl border border-ink-900/15 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-900/80">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded-xl border border-ink-900/15 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400"
                    />
                  </div>
                </div>
                <p className="-mt-2.5 text-xs text-ink-900/45">
                  Déjame un teléfono o un email, el que prefieras. Con uno basta.
                </p>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-900/80">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-ink-900/15 bg-paper px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400"
                  />
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-ink-900/80">
                    ¿Cómo prefieres que te contacte?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CONTACT_PREFS.map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setPreference(option)}
                        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                          preference === option
                            ? 'border-gold-400 bg-gold-400/15 text-ink-900'
                            : 'border-ink-900/15 text-ink-900/60 hover:border-gold-400/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-900/60">
                  <input
                    type="checkbox"
                    required
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-gold-500"
                  />
                  He leído la política de privacidad y acepto que mis datos se traten para
                  responder a mi solicitud.
                </label>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-900 shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <Send size={16} strokeWidth={2.2} />
                  Enviar
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm leading-relaxed text-ink-900/60">
              O si lo prefieres, reserva la llamada directamente por WhatsApp o por teléfono —
              sin formularios de por medio.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#25D366]/60 px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-[#25D366]/10"
            >
              <MessageCircle size={18} strokeWidth={0} fill="#25D366" />
              Escríbenos por WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ink-900/15 px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:border-gold-400/50"
            >
              <Phone size={17} strokeWidth={2} />
              Llamar {CONTACT.phoneDisplay}
            </a>

            <div className="mt-4 rounded-2xl border border-ink-900/10 bg-cream p-5 text-sm text-ink-900/70">
              <p className="font-semibold text-ink-900">Consulta en Málaga</p>
              <p className="mt-1">{CONTACT.addressLine1}</p>
              <p>{CONTACT.addressLine2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
