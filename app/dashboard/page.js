"use client";

import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username") || "Usuario";

  return (
    <div className="relative min-h-screen bg-black text-green-400">
      {/* Glow de fondo */}
      <div className="pointer-events-none absolute -z-10 inset-0 opacity-40">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.20) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>

      <main className="mx-auto max-w-6xl px-6 py-12 flex flex-col items-center">
        {/* Título bienvenida */}
        <h1 className="text-3xl md:text-4xl font-mono mb-4 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]">
          Bienvenido, <span className="font-bold">{username}</span>
        </h1>

        {/* Texto introductorio */}
        <p className="text-lg md:text-xl max-w-3xl text-center mb-10 text-white/90 leading-relaxed">
          Estás dentro de una{" "}
          <span className="font-bold text-green-400">comunidad privada</span>, a
          la que muy pocos logran acceder. Aquí encontrarás conocimiento
          exclusivo, pruebas de mentalidad deportiva y un entorno en el que
          descubriremos si realmente estás preparado para pertenecer a esta
          élite.
        </p>

        <h2 className="text-2xl font-mono mb-6">Áreas de acceso exclusivo</h2>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Card
            img="/img/CR7.jpeg"
            title="Módulos de Mentalidad"
            desc="Contenido exclusivo para trabajar tu mentalidad deportiva. Aprende a conocerte,
            ge
