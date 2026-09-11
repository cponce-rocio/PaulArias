import { Mail, Phone, MapPin } from 'lucide-react'
import { CONTACT } from '../data/contact.js'

const SERVICE_LINKS = [
  'Evaluación y diagnóstico',
  'Terapia individual',
  'Terapia de pareja',
  'Terapia familiar',
  'Orientación en conducta y hábitos'
]

const LEGAL_LINKS = [
  { label: 'Aviso legal', href: '#' },
  { label: 'Política de privacidad', href: '#' },
  { label: 'Cookies', href: '#' }
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-paper">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/images/logo-icon.jpg"
              alt="Símbolo cerebro Mgtr. Paúl Arias"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-gold-400/40"
            />
            <span className="leading-tight text-left">
              <span className="block font-display text-base text-paper">Mgtr. Paúl Arias</span>
              <span className="block text-[0.6rem] font-semibold tracking-[0.2em] text-gold-300">
                CEREBRO Y CONDUCTA · PSICOTERAPIA
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/55">
            Psicología clínica en Málaga, presencial y online. Terapia individual, de pareja y
            familiar, con un enfoque basado en la evidencia y la neurociencia.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-300">SERVICIOS</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="#servicios" className="text-sm text-paper/70 transition-colors hover:text-gold-200">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-300">CONTACTO</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-paper/70">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-300" strokeWidth={1.8} />
              <span>
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-gold-300" strokeWidth={1.8} />
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-gold-200">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-gold-300" strokeWidth={1.8} />
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-gold-200">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-300">LEGAL</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {LEGAL_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-paper/70 transition-colors hover:text-gold-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-display italic text-sm text-paper/60">
            Tu salud mental
            <br />
            es una prioridad
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="container-page text-center text-xs text-paper/40 sm:text-left">
          © {new Date().getFullYear()} Mgtr. Paúl Arias. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
