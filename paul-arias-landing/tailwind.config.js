/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#071a1f',
          900: '#0a2229',
          800: '#0f343a',
          700: '#154650',
          600: '#1c5a66'
        },
        gold: {
          100: '#f3e2b2',
          200: '#eed49a',
          300: '#e5c158',
          400: '#d4af37',
          500: '#b8932a'
        },
        cream: '#f9f8f3',
        paper: '#fffdf8'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(10, 34, 41, 0.35)',
        card: '0 10px 30px -12px rgba(10, 34, 41, 0.18)'
      },
      backgroundImage: {
        'ink-gradient': 'linear-gradient(135deg, #071a1f 0%, #0a2229 45%, #154650 100%)',
        'gold-line': 'linear-gradient(90deg, transparent, #d4af37, transparent)'
      }
    }
  },
  plugins: []
}
