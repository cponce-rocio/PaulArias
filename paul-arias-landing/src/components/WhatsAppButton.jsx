import { MessageCircle } from 'lucide-react'
import { WHATSAPP_HREF } from '../data/contact.js'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 sm:bottom-6"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  )
}
