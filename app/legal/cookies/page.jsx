// app/legal/cookies/page.js
"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = {
  title: "Política de Cookies — Mindset Ballers",
  description:
    "Información sobre el uso de cookies en el sitio de Mindset Ballers.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black text-green-400 px-6 py-14">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Título */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-green-300">
            Política de Cookies
          </h1>
          <p className="text-green-400/80 text-sm">
            Última actualización: 01/09/2025
          </p>
        </header>

        {/* Intro box */}
        <section className="rounded-2xl border border-green-700/40 bg-black/60 shadow-[0_0_30px_rgba(34,197,94,0.12)] p-6 sm:p-8">
          <p className="leading-relaxed">
            Esta Política de Cookies explica cómo{" "}
            <strong>Mindset Ballers</strong> utiliza cookies y tecnologías
            similares en este sitio web. El responsable del tratamiento es{" "}
            <strong>Unai Alcalde</strong> (contacto:{" "}
            <a
              className="underline underline-offset-4 hover:text-green-300"
              href="mailto:mindsetballers@gmail.com"
            >
              mindsetballers@gmail.com
            </a>
            ), con sede en <strong>Valladolid (España)</strong>.
          </p>
        </section>

        {/* ¿Qué son las cookies? */}
        <section className="rounded-2xl border border-green-700/40 bg-black/60 shadow-[0_0_30px_rgba(34,197,94,0.12)] p-6 sm:p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-green-300">
            1. ¿Qué son las cookies?
          </h2>
          <p className="leading-relaxed">
            Las cookies son pequeños archivos que se descargan en tu
            dispositivo al navegar por un sitio web. Sirven para recordar tus
            preferencias, mejorar el rendimiento de la web y, en algunos
            casos, para obtener estadísticas anónimas de uso.
          </p>
        </section>

        {/* Tipos de cookies que podemos usar */}
        <section className="rounded-2xl border border-green-700/40 bg-black/60 shadow-[0_0_30px_rgba(34,197,94,0.12)] p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-green-300">
            2. Tipos de cookies que usamos
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-700/30 bg-black/50 p-4">
              <h3 className="font-semibold text-green-300">
                Cookies técnicas o necesarias
              </h3>
              <p className="text-sm text-green-400/90 mt-1">
                Imprescindibles para que la web funcione (por ejemplo,
                mantener la sesión o recordar ajustes básicos). Estas se
                instalan siempre y no requieren consentimiento.
              </p>
            </div>

            <div className="rounded-xl border border-green-700/30 bg-black/50 p-4">
              <h3 className="font-semibold text-green-300">
                Cookies de análisis (opcionales)
              </h3>
              <p className="text-sm text-green-400/90 mt-1">
                Nos ayudan a entender cómo usas la web (páginas más vistas,
                tiempo en el sitio, etc.) para mejorarla. <br />
                <span className="italic">
                  Actualmente sólo se instalarán si en el futuro activamos
                  analítica y tú das tu consentimiento.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Detalle concreto (transparencia) */}
        <section className="rounded-2xl border border-green-700/40 bg-black/60 shadow-[0_0_30px_rgba(34,197,94,0.12)] p-6 sm:p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-green-300">
            3. Cookies concretas
          </h2>
          <p className="leading-relaxed">
            En este momento, no utilizamos cookies de perfilado ni
            publicidad. Si en el futuro activamos herramientas de analítica
            (por ejemplo, Google Analytics), lo indicaremos aquí con su
            nombre, finalidad, duración y proveedor, y pediremos tu
            consentimiento antes de instalarlas.
          </p>

          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm border border-green-700/40 rounded-xl">
              <thead className="bg-black/70">
                <tr>
                  <th className="text-left p-3 border-b border-green-700/40">
                    Cookie
                  </th>
                  <th className="text-left p-3 border-b border-green-700/40">
                    Finalidad
                  </th>
                  <th className="text-left p-3 border-b border-green-700/40">
                    Duración
                  </th>
                  <th className="text-left p-3 border-b border-green-700/40">
                    Proveedor
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-black/40">
                  <td className="p-3 border-b border-green-700/20">
                    <code>session</code> (técnica)
                  </td>
                  <td className="p-3 border-b border-green-700/20">
                    Mantener la sesión/estado de navegación.
                  </td>
                  <td className="p-3 border-b border-green-700/20">
                    Sesión
                  </td>
                  <td className="p-3 border-b border-green-700/20">
                    Mindset Ballers (propia)
                  </td>
                </tr>
                {/* Ejemplo futuro de analítica (solo si se activa) */}
                <tr className="hover:bg-black/40">
                  <td className="p-3 border-b border-green-700/20">
                    <code>_ga</code> (analítica)
                  </td>
                  <td className="p-3 border-b border-green-700/20">
                    Métricas de uso anónimas.
                  </td>
                  <td className="p-3 border-b border-green-700/20">
                    2 años
                  </td>
                  <td className="p-3 border-b border-green-700/20">
                    Google LLC (tercero) — sólo si lo activamos y tú consientes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Consentimiento */}
        <section className="rounded-2xl border border-green-700/40 bg-black/60 shadow-[0_0_30px_rgba(34,197,94,0.12)] p-6 sm:p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-green-300">
            4. Consentimiento
          </h2>
          <p className="leading-relaxed">
            Las cookies no necesarias (por ejemplo, analíticas) se instalarán
            únicamente si tú lo aceptas de forma expresa. Si más adelante
            decides retirar el consentimiento, podrás eliminar o bloquear las
            cookies desde la configuración de tu navegador.
          </p>
        </section>

        {/* Cómo gestionar cookies */}
        <section className="rounded-2xl border border-green-700/40 bg-black/60 shadow-[0_0_30px_rgba(34,197,94,0.12)] p-6 sm:p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-green-300">
            5. ¿Cómo desactivar las cookies en tu navegador?
          </h2>
          <p className="leading-relaxed">
            Puedes permitir, bloquear o eliminar las cookies desde la
            configuración de tu navegador. Consulta la ayuda oficial:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Chrome:{" "}
              <a
                className="underline underline-offset-4 hover:text-green-300"
                href="https://support.google.com/chrome/answer/95647?hl=es"
                target="_blank"
              >
                Instrucciones
              </a>
            </li>
            <li>
              Firefox:{" "}
              <a
                className="underline underline-offset-4 hover:text-green-300"
                href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-cookies-y-datos"
                target="_blank"
              >
                Instrucciones
              </a>
            </li>
            <li>
              Safari:{" "}
              <a
                className="underline underline-offset-4 hover:text-green-300"
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
              >
                Instrucciones
              </a>
            </li>
            <li>
              Edge:{" "}
              <a
                className="underline underline-offset-4 hover:text-green-300"
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
              >
                Instrucciones
              </a>
            </li>
          </ul>
        </section>

        {/* Terceros / transferencias */}
        <section className="rounded-2xl border border-green-700/40 bg-black/60 shadow-[0_0_30px_rgba(34,197,94,0.12)] p-6 sm:p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-green-300">
            6. Cookies de terceros y transferencias
          </h2>
          <p className="leading-relaxed">
            Algunas cookies pueden ser gestionadas por terceros (p. ej.,
            Google). De activarse en el futuro, dichos terceros podrían
            realizar transferencias internacionales de datos. En ese caso,
            informaremos aquí y pediremos tu consentimiento.
          </p>
        </section>

        {/* Conservación y cambios */}
        <section className="rounded-2xl border border-green-700/40 bg-black/60 shadow-[0_0_30px_rgba(34,197,94,0.12)] p-6 sm:p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-green-300">
            7. Conservación y cambios de esta política
          </h2>
          <p className="leading-relaxed">
            Conservaremos las cookies durante el tiempo estrictamente
            necesario para su finalidad. Podemos actualizar esta Política de
            Cookies si introducimos nuevas funcionalidades o servicios.
            Publicaremos cualquier cambio en esta misma página.
          </p>
        </section>

        {/* Contacto */}
        <section className="rounded-2xl border border-green-700/40 bg-black/60 shadow-[0_0_30px_rgba(34,197,94,0.12)] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">
            8. Contacto
          </h2>
          <p className="leading-relaxed">
            Para cualquier consulta sobre esta Política de Cookies, puedes
            escribirnos a{" "}
            <a
              className="underline underline-offset-4 hover:text-green-300"
              href="mailto:mindsetballers@gmail.com"
            >
              mindsetballers@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
