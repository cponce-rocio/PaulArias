import { Phone, MessageCircle } from 'lucide-react'
import { CONTACT, WHATSAPP_HREF } from '../data/contact.js'

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex sm:hidden">
      <a
        href={CONTACT.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 bg-ink-900 py-3.5 text-sm font-semibold text-paper"
      >
        <Phone size={17} strokeWidth={2} />
        Llamar
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-white"
      >
        <MessageCircle size={17} strokeWidth={0} fill="white" />
        WhatsApp
      </a>
    </div>
  )
}
