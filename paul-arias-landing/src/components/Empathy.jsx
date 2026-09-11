export default function Empathy() {
  return (
    <section className="bg-cream">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">¿TE ESTÁ PASANDO ALGO DE ESTO?</p>
          <h2 className="mt-3 max-w-lg font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
            Quizá te cuesta desconectar, dormir bien o dejar de darle vueltas a lo mismo
          </h2>
          <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-ink-900/70">
            Quizá sientes que la ansiedad o el malestar aparecen sin avisar, o que una relación,
            una etapa de cambio o una preocupación no te deja avanzar. Nada de esto significa que
            algo en ti esté roto: son señales que merecen atención y un espacio donde ponerlas en
            palabras.
          </p>
          <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-ink-900/70">
            En terapia no buscamos solo calmar el síntoma, sino entender qué hay detrás. Desde
            ahí, con herramientas basadas en evidencia, se construye un cambio que dura.
          </p>
        </div>
        <div className="order-1 mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-gold-400/30 shadow-card lg:order-2 lg:max-w-none">
          <img
            src="/images/brain-birds-bg.webp"
            alt="Ilustración de un cerebro dividido entre trazos en verde azulado y una red neuronal dorada, simbolizando el proceso terapéutico"
            className="h-64 w-full object-cover sm:h-80 lg:h-[380px]"
          />
        </div>
      </div>
    </section>
  )
}
