"use client";
import { useSearchParams } from "next/navigation";

// Evita prerender y cachés que podían dar error en Vercel
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username") || "Usuario";

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col">
      {/* Glow sutil de fondo para integrar el look Matrix */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[900px] rounded-full bg-green-500 opacity-10 blur-3xl" />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-mono mb-4 text-center">
          Bienvenido, <span className="font-bold">{username}</span>
        </h1>

        {/* Mensaje introductorio */}
        <p className="text-lg md:text-xl max-w-3xl text-center mb-10 text-white leading-relaxed">
          Estás dentro de una{" "}
          <span className="font-bold text-green-400">comunidad privada</span>,
          a la que muy pocos logran acceder. Aquí encontrarás conocimiento
          exclusivo, pruebas de mentalidad deportiva y un entorno en el que
          descubriremos si realmente estás preparado para pertenecer a esta élite.
        </p>

        <h2 className="text-2xl font-mono mb-6">Áreas de acceso exclusivo</h2>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* 1. Módulos de Mentalidad */}
          <section className="border border-green-600/60 rounded-2xl p-6 text-center bg-black/40 shadow-lg transition-transform duration-200 hover:scale-[1.02]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/CR7.jpeg"
                alt="Cristiano Ronaldo - Módulos de mentalidad"
                className="w-full h-64 object-contain rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-green-400">
              Módulos de Mentalidad
            </h3>
            <p className="mt-2 text-sm text-white">
              Contenido exclusivo para trabajar tu mentalidad deportiva. Aprende
              a conocerte, gestionar la presión y responder en momentos clave.
            </p>
          </section>

          {/* 2. Llamadas en directo */}
          <section className="border border-green-600/60 rounded-2xl p-6 text-center bg-black/40 shadow-lg transition-transform duration-200 hover:scale-[1.02]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/Totti.jpeg"
                alt="Totti - Llamadas en directo"
                className="w-full h-64 object-contain rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-green-400">
              Llamadas en directo
            </h3>
            <p className="mt-2 text-sm text-white">
              Accede a sesiones en vivo donde podrás interactuar directamente,
              resolver dudas y compartir tu progreso.
            </p>
          </section>

          {/* 3. Networking */}
          <section className="border border-green-600/60 rounded-2xl p-6 text-center bg-black/40 shadow-lg transition-transform duration-200 hover:scale-[1.02]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/amigos.jpeg"
                alt="Networking"
                className="w-full h-64 object-contain rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-green-400">Networking</h3>
            <p className="mt-2 text-sm text-white">
              Conecta con otros jugadores que comparten tu misma mentalidad y
              establece relaciones que impulsen tu carrera.
            </p>
          </section>

          {/* 4. Experiencias Reales */}
          <section className="border border-green-600/60 rounded-2xl p-6 text-center bg-black/40 shadow-lg transition-transform duration-200 hover:scale-[1.02]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/Ronaldinho.jpeg"
                alt="Ronaldinho - Experiencias reales"
                className="w-full h-64 object-contain rounded-2xl"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-green-400">
              Experiencias Reales
            </h3>
            <p className="mt-2 text-sm text-white">
              Aprende de las vivencias de grandes futbolistas y descubre cómo
              aplicarlas en tu propio camino.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <a
            href="https://forms.gle/YcD5fyCep67oxwCMA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-black shadow-lg animate-pulse hover:animate-none hover:brightness-110 transition"
          >
            ✅ Sí, estoy preparado
          </a>

          <button
            type="button"
            className="px-10 py-4 text-lg rounded-xl border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition"
          >
            ❌ No, no estoy preparado
          </button>
        </div>
      </main>

      {/* Footer con enlaces legales a tus rutas existentes */}
      <footer className="relative z-10 w-full border-t border-green-900/40">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} MindsetBallers. Todos los derechos
            reservados.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 justify-center">
            <a href="/privacidad" className="underline hover:text-green-400">
              Política de Privacidad
            </a>
            <a href="/cookies" className="underline hover:text-green-400">
              Política de Cookies
            </a>
            <a href="/terminos" className="underline hover:text-green-400">
              Términos y Condiciones
            </a>
            <a
              href="/legal/aviso-legal"
              className="underline hover:text-green-400"
            >
              Aviso Legal
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
