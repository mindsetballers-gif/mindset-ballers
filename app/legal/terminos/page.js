
export const dynamic = "force-dynamic";
export const revalidate = 0;
export default function Terminos() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6">
      <div className="max-w-3xl text-center font-mono">
        <h1 className="text-4xl mb-4 text-green-400">Términos y Condiciones</h1>
        <p className="text-sm text-gray-400 mb-12">
          Última actualización: 1 de septiembre de 2025
        </p>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">Uso del sitio web</h2>
          <p>
            El acceso y uso de Mindset Ballers implica la aceptación de las
            presentes condiciones generales de uso.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">
            Propiedad intelectual
          </h2>
          <p>
            Todos los contenidos de este sitio (textos, imágenes, vídeos y
            material gráfico) son propiedad de Mindset Ballers o se utilizan con
            autorización.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">
            Limitación de responsabilidad
          </h2>
          <p>
            Mindset Ballers no será responsable de los daños derivados del mal
            uso del sitio web ni de la información contenida en él.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-3 text-green-300">Modificaciones</h2>
          <p>
            Mindset Ballers podrá modificar los presentes términos en cualquier
            momento. El usuario se compromete a revisarlos periódicamente.
          </p>
        </section>
      </div>
    </main>
  );
}
