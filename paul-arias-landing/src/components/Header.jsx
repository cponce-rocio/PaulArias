import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { CONTACT } from '../data/contact.js'

const SERVICE_LINKS = [
  { label: 'Evaluación y diagnóstico', href: '#servicios' },
  { label: 'Terapia individual', href: '#servicios' },
  { label: 'Terapia de pareja y familiar', href: '#servicios' },
  { label: 'Orientación en conducta y hábitos', href: '#servicios' }
]

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Cómo trabajo', href: '#como-trabajo' },
  { label: 'Preguntas frecuentes', href: '#faq' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#inicio')
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-900/95 backdrop-blur shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]' : 'bg-ink-900'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-3 py-3.5">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src="/images/logo-icon.jpg"
            alt="Símbolo cerebro Mgtr. Paúl Arias"
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-gold-400/40 sm:h-11 sm:w-11"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base text-paper tracking-wide sm:text-lg">
              Mgtr. Paúl Arias
            </span>
            <span className="hidden truncate text-[0.62rem] font-semibold tracking-[0.22em] text-gold-300 min-[420px]:block">
              CEREBRO Y CONDUCTA · PSICOTERAPIA
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium tracking-wide text-paper/85 transition-colors hover:text-gold-200"
              aria-expanded={servicesOpen}
            >
              Servicios
              <ChevronDown size={15} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-gold-400/20 bg-ink-800 p-2 shadow-soft">
                {SERVICE_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm text-paper/85 transition-colors hover:bg-white/5 hover:text-gold-200"
                  >
                    {s.label}
                  </a>
                ))}
                <a
                  href="#servicios"
                  onClick={() => setServicesOpen(false)}
                  className="mt-1 block rounded-xl px-4 py-2.5 text-sm font-semibold text-gold-300 transition-colors hover:bg-white/5"
                >
                  Ver todos los servicios →
                </a>
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative text-sm font-medium tracking-wide pb-1 transition-colors ${
                active === link.href ? 'text-gold-300' : 'text-paper/85 hover:text-gold-200'
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-gold-400" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-paper/85 transition-colors hover:text-gold-200"
          >
            <Phone size={15} strokeWidth={2} />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-5 py-2.5 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
          >
            Llamada gratuita
          </a>
        </div>

        <button
          className="shrink-0 text-paper lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink-900 px-6 py-4 lg:hidden">
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="flex items-center justify-between py-2 text-sm font-medium text-paper/90"
          >
            Servicios
            <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileServicesOpen && (
            <div className="mb-1 flex flex-col gap-1 border-l border-white/10 pl-4">
              {SERVICE_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-sm text-paper/70"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href)
                setOpen(false)
              }}
              className="py-2 text-sm font-medium text-paper/90"
            >
              {link.label}
            </a>
          ))}

          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-1.5 py-2 text-sm font-medium text-gold-200"
          >
            <Phone size={15} strokeWidth={2} />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-5 py-2.5 text-center text-sm font-semibold text-ink-900"
          >
            Llamada gratuita
          </a>
        </nav>
      )}
    </header>
  )
}
