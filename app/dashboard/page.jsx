"use client";
import { useSearchParams } from "next/navigation";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username") || "Usuario";

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-mono mb-4">
        Bienvenido, <span className="font-bold">{username}</span>
      </h1>

      {/* Texto introductorio */}
      <p className="text-xl max-w-3xl text-center mb-10 text-white leading-relaxed">
        Estás dentro de una <span className="font-bold text-green-400">comunidad privada</span>,
        a la que muy pocos logran acceder. Aquí encontrarás conocimiento exclusivo,
        pruebas de mentalidad deportiva y un entorno en el que descubriremos si realmente
        estás preparado para pertenecer a esta élite.
      </p>

      <h2 className="text-2xl font-mono mb-6">Áreas de acceso exclusivo</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Cristiano */}
        <div className="border-2 border-green-500 rounded-2xl p-6 text-center shadow-lg transition transform hover:scale-105 hover:shadow-green-500/80 hover:bg-green-500/10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/img/CR7.jpeg"
              alt="Cristiano"
              className="w-full h-64 object-contain rounded-2xl transition duration-500 transform hover:scale-110 hover:brightness-110"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 text-green-400">Módulos de Mentalidad</h3>
          <p className="mt-2 text-sm text-white">
            Contenido exclusivo para trabajar tu mentalidad deportiva. Aprende a conocerte,
            gestionar la presión y responder en momentos clave.
          </p>
        </div>

        {/* Totti */}
        <div className="border-2 border-green-500 rounded-2xl p-6 text-center shadow-lg transition transform hover:scale-105 hover:shadow-green-500/80 hover:bg-green-500/10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/img/Totti.jpeg"
              alt="Totti"
              className="w-full h-64 object-contain rounded-2xl transition duration-500 transform hover:scale-110 hover:brightness-110"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 text-green-400">Llamadas en directo</h3>
          <p className="mt-2 text-sm text-white">
            Accede a sesiones en vivo donde podrás interactuar directamente,
            resolver dudas y compartir tu progreso.
          </p>
        </div>

        {/* Networking */}
        <div className="border-2 border-green-500 rounded-2xl p-6 text-center shadow-lg transition transform hover:scale-105 hover:shadow-green-500/80 hover:bg-green-500/10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/img/amigos.jpeg"
              alt="Networking"
              className="w-full h-64 object-contain rounded-2xl transition duration-500 transform hover:scale-110 hover:brightness-110"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 text-green-400">Networking</h3>
          <p className="mt-2 text-sm text-white">
            Conecta con otros jugadores que comparten tu misma mentalidad y establece relaciones
            que impulsen tu carrera.
          </p>
        </div>

        {/* Ronaldinho */}
        <div className="border-2 border-green-500 rounded-2xl p-6 text-center shadow-lg transition transform hover:scale-105 hover:shadow-green-500/80 hover:bg-green-500/10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/img/Ronaldinho.jpeg"
              alt="Ronaldinho"
              className="w-full h-64 object-contain rounded-2xl transition duration-500 transform hover:scale-110 hover:brightness-110"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 text-green-400">Experiencias Reales</h3>
          <p className="mt-2 text-sm text-white">
            Aprende de las vivencias de grandes futbolistas y descubre cómo aplicarlas en tu
            propio camino.
          </p>
        </div>
      </div>

      <div className="flex space-x-6 mt-12">
        {/* Botón destacado */}
        <a
          href="https://forms.gle/YcD5fyCep67oxwCMA"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 text-lg font-bold rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-black shadow-lg hover:shadow-green-400/90 transition transform hover:scale-110 animate-pulse hover:animate-none"
        >
          ✅ Sí, estoy preparado
        </a>

        {/* Botón discreto */}
        <button className="px-10 py-4 text-lg rounded-lg border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition">
          ❌ No, no estoy preparado
        </button>
      </div>
    </div>
  );
}
