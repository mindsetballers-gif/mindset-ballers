"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export default function AvisoLegal() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6">
      <div className="max-w-3xl text-center font-mono">
        <h1 className="text-4xl mb-4 text-green-400">Aviso Legal</h1>
        <p className="text-sm text-gray-400 mb-12">
          Última actualización: 1 de septiembre de 2025
        </p>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">Identificación</h2>
          <p>
            Este sitio web es propiedad de <strong>Mindset Ballers</strong>. El
            acceso y uso de este sitio web implica la aceptación de este Aviso
            Legal.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">Condiciones de uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y
            servicios, evitando actividades ilícitas o contrarias a la buena fe.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">
            Limitación de responsabilidad
          </h2>
          <p>
            Mindset Ballers no se responsabiliza de los daños derivados del uso
            incorrecto de la información o de la interrupción del servicio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-3 text-green-300">Modificaciones</h2>
          <p>
            Mindset Ballers podrá modificar el contenido de este Aviso Legal en
            cualquier momento. Se recomienda revisarlo periódicamente.
          </p>
        </section>
      </div>
    </main>
  );
}
