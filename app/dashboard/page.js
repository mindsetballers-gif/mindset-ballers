"use client";

export const dynamic = "force-dynamic";

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

      {/* (el resto de tu código tal cual) */}
    </div>
  );
}
