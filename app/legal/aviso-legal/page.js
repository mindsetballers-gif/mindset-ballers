export const dynamic = "force-static";
export const revalidate = 0;

export const metadata = {
  title: "Aviso Legal – Mindset Ballers",
  description: "Información legal y de identificación del titular del sitio.",
};

export default function AvisoLegalPage() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center py-16 px-6 font-mono">
      <div className="max-w-3xl">
        <h1 className="text-4xl mb-4 text-green-400">Aviso Legal</h1>
        <p className="text-sm text-gray-400 mb-12">Última actualización: 01/09/2025</p>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">Identificación</h2>
          <p>
            Sitio propiedad de <strong>Mindset Ballers</strong> (Unai Alcalde). El acceso y uso del
            sitio implica la aceptación del presente Aviso Legal.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl mb-3 text-green-300">Contacto</h2>
          <p>
            Email:{" "}
            <a className="underline hover:text-green-300" href="mailto:mindsetballers@gmail.com">
              mindsetballers@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
