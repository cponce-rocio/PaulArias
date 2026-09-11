# Mgtr. Paúl Arias — Landing Page

Landing page completa para el sitio de Mgtr. Paúl Arias, Psicólogo Clínico (Cerebro y Conducta -
Psicoterapia). Incluye botón de WhatsApp, barra de contacto fija en móvil, formulario de
contacto, precios, FAQ y todo lo necesario para una web de captación de pacientes.

## Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React (iconos)

## Cómo correr el proyecto

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Se abrirá automáticamente en `http://localhost:5173`.

3. Para generar la build de producción (carpeta `dist/`, lista para subir a cualquier hosting):

   ```bash
   npm run build
   ```

4. Para previsualizar la build de producción localmente:

   ```bash
   npm run preview
   ```

## ⚠️ Antes de publicar: datos a reemplazar

Todo el sitio lee el teléfono, WhatsApp, email y dirección desde un único archivo. Ábrelo y
reemplaza los valores de ejemplo por los reales:

```
src/data/contact.js
```

```js
export const CONTACT = {
  phoneDisplay: '600 00 00 00',        // teléfono que se muestra
  phoneHref: 'tel:+34600000000',       // mismo teléfono, en formato tel:
  whatsappNumber: '34600000000',       // número de WhatsApp, sin '+' ni espacios
  whatsappMessage: 'Hola, vengo desde la web...', // mensaje precargado en WhatsApp
  email: 'contacto@paularias-psicologia.com',
  addressLine1: 'Calle Ejemplo, 12, 1º',
  addressLine2: '29000 Málaga',
  mapsHref: 'https://maps.google.com/?q=Málaga'
}
```

Al cambiar este archivo se actualiza automáticamente: el header, el hero, los servicios, el
banner de agenda, el formulario de contacto, el footer, el botón flotante de WhatsApp y la
barra fija de móvil.

Otros valores de ejemplo que conviene revisar:

- **Precios** (`src/components/Pricing.jsx`): actualmente en `00 €`, con una nota visible de
  "valores de ejemplo". Reemplaza por tus tarifas reales.
- **Número de colegiado** (`src/components/About.jsx`): aparece como `COLEGIADO N.º 00000`.
- **Formulario de contacto** (`src/components/ContactForm.jsx`): el envío está simulado
  (muestra un mensaje de confirmación) — para que llegue de verdad, conéctalo a tu backend,
  a un servicio como Formspree/Resend, o a tu CRM.
- **Enlaces "Aviso legal", "Política de privacidad" y "Cookies"** (`src/components/Footer.jsx`):
  actualmente apuntan a `#`, hay que enlazarlos a las páginas legales reales.

## Estructura del proyecto

```
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── images/               → todas las imágenes del sitio
└── src/
    ├── main.jsx
    ├── App.jsx                → arma el orden de todas las secciones
    ├── index.css
    ├── data/
    │   └── contact.js         → teléfono, WhatsApp, email y dirección (edita aquí)
    └── components/
        ├── Header.jsx         → navegación, dropdown de servicios, botón de llamada
        ├── Hero.jsx           → sección principal + CTAs de WhatsApp y llamada
        ├── Pillars.jsx        → las 4 tarjetas (Psicoterapia, Salud mental, Conducta, Enfoque)
        ├── Empathy.jsx        → sección "¿Te está pasando algo de esto?"
        ├── About.jsx          → sección "Sobre mí"
        ├── Approach.jsx       → sección "Cómo trabajo"
        ├── Services.jsx       → grilla de servicios "En qué puedo acompañarte"
        ├── Pricing.jsx        → "Precios de las sesiones"
        ├── Values.jsx         → "Cómo te voy a tratar" (valores)
        ├── ProcessSteps.jsx   → "Cómo empezamos" (3 pasos)
        ├── Faq.jsx            → preguntas frecuentes (acordeón)
        ├── CtaBanner.jsx      → banner "Agenda tu cita"
        ├── ContactForm.jsx    → formulario de contacto completo
        ├── Footer.jsx         → footer con columnas de servicios, contacto y legal
        ├── WhatsAppButton.jsx → botón flotante de WhatsApp (todas las pantallas)
        └── MobileStickyBar.jsx → barra fija inferior en móvil (Llamar / WhatsApp)
```

## Personalización rápida

- **Textos**: cada sección tiene su contenido directamente en el archivo `.jsx` correspondiente
  dentro de `src/components/`.
- **Colores**: editables en `tailwind.config.js` (paleta `ink`, `gold`, `cream`).
- **Imágenes**: reemplaza los archivos dentro de `public/images/` manteniendo el mismo nombre,
  o actualiza la ruta en el componente correspondiente.
- **Orden de las secciones**: se controla desde `src/App.jsx` — puedes reordenar, quitar o
  duplicar bloques cambiando el orden de los componentes ahí.

## Despliegue

La build de `npm run build` genera una carpeta `dist/` estática que puedes subir directamente
a Vercel, Netlify, GitHub Pages o cualquier hosting.
