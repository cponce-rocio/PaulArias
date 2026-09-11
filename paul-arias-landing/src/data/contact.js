// Datos de contacto — reemplaza estos valores por los reales del cliente.
// Todo lo demás en el sitio lee de aquí, así que editando este archivo
// se actualiza el teléfono, WhatsApp y dirección en todo el sitio.

export const CONTACT = {
  phoneDisplay: '600 00 00 00',
  phoneHref: 'tel:+34600000000',
  whatsappNumber: '34600000000',
  whatsappMessage:
    'Hola, vengo desde la web y me gustaría agendar la primera cita informativa.',
  email: 'contacto@paularias-psicologia.com',
  addressLine1: 'Calle Ejemplo, 12, 1º',
  addressLine2: '29000 Málaga',
  mapsHref: 'https://maps.google.com/?q=Málaga'
}

export const WHATSAPP_HREF = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage
)}`
