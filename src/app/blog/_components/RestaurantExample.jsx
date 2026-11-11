export default function RestaurantExample() {
  return (
    <section
      aria-labelledby="ejemplo-restaurante"
      className="rounded-4xl bg-toledana-black px-6 py-10 text-white sm:px-10 sm:py-14"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Ejemplo práctico
      </p>

      <h2
        id="ejemplo-restaurante"
        className="mt-4 font-title text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Ejemplo: un restaurante que todavía trabaja manualmente
      </h2>

      <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-white/70 sm:text-lg">
        <p>
          Imagina un restaurante que recibe pedidos por WhatsApp, confirma
          pagos revisando mensajes y posteriormente comunica cada pedido
          manualmente al personal.
        </p>

        <p>
          Un sistema digital podría permitir que el cliente consulte el menú,
          seleccione productos, registre su pedido y envíe la información
          directamente al panel administrativo.
        </p>

        <p>
          El negocio seguiría teniendo control sobre sus operaciones, pero
          reduciría pasos manuales y mantendría la información organizada en
          un mismo lugar.
        </p>
      </div>
    </section>
  );
}