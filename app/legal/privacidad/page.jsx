
export const dynamic = "force-dynamic";
export const revalidate = 0;
export default function Privacidad() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6">
      <div className="max-w-3xl text-center font-mono">
        <h1 className="text-4xl mb-4 text-green-400">Política de Privacidad</h1>
        <p className="text-sm text-gray-400 mb-12">
          Última actualización: 1 de septiembre de 2025
        </p>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">Recogida de datos</h2>
          <p>
            Mindset Ballers recoge datos personales de los usuarios únicamente
            cuando estos son proporcionados voluntariamente a través de los
            formularios del sitio web.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">Uso de la información</h2>
          <p>
            Los datos serán utilizados exclusivamente para fines relacionados
            con los servicios ofrecidos, garantizando la seguridad y
            confidencialidad de la información.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">Derechos del usuario</h2>
          <p>
            Los usuarios tienen derecho a acceder, rectificar y eliminar sus
            datos personales en cualquier momento, así como a solicitar la
            limitación de su tratamiento.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-3 text-green-300">
            Transferencia de datos
          </h2>
          <p>
            Mindset Ballers no compartirá los datos personales con terceros sin
            consentimiento previo del usuario, salvo obligación legal.
          </p>
        </section>
      </div>
    </main>
  );
}
