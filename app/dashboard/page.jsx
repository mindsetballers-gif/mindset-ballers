"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function DashboardPage() {
  const searchParams = useSearchParams();

  // ===== 1) Nombre de usuario (URL > localStorage > 'Invitado') =====
  const urlUsername = (searchParams?.get("username") || "").trim();

  const safeName = useMemo(() => {
    const fromUrl = urlUsername.replace(/\s+/g, " ").slice(0, 40);
    if (fromUrl) return fromUrl;
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("username") || "";
      if (saved) return saved;
    }
    return "Invitado";
  }, [urlUsername]);

  const [username, setUsername] = useState("Invitado");

  useEffect(() => {
    setUsername(safeName);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("username", safeName);
    }
  }, [safeName]);

  // ===== 2) Overlay "Acceso concedido" (3.2s) con brillo verde =====
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setOverlayVisible(false), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Overlay secreto */}
      {overlayVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="max-w-2xl mx-4 rounded-2xl border border-green-500/50 bg-black/70 p-6 shadow-[0_0_30px_rgba(0,255,100,0.35)]">
            <h3 className="text-center text-green-400 text-2xl font-semibold mb-2">
              ✅ Acceso concedido
            </h3>
            <p className="text-gray-200 leading-relaxed text-center">
              Has entrado en un espacio <span className="text-green-400">privado</span> y
              de acceso limitado. Mantén la discreción. Aquí se comparte lo que no
              se cuenta fuera del vestuario: mentalidad, enfoque y decisiones que
              separan a los que están preparados de los que no.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-5 pb-24 pt-10">
        {/* Bienvenida + introducción */}
        <h1 className="text-4xl md:text-5xl text-center font-extrabold text-green-400 tracking-wide">
          Bienvenido, {username}
        </h1>

        <p className="mt-4 text-base md:text-lg text-center text-gray-200 max-w-3xl mx-auto">
          Estás dentro de <span className="text-green-400">Mindset Ballers</span>, una
          comunidad <span className="font-semibold">privada</span> a la que muy pocos acceden.
          Aquí desglosamos los pilares que transforman tu carrera: mentalidad, liderazgo,
          relaciones y experiencias reales. Antes de entrar por completo, deberás superar
          una <span className="font-semibold">prueba de mentalidad</span> que evaluará si estás
          listo para formar parte de la élite.
        </p>

        {/* GRID 2x2 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 1) Módulos de Mentalidad (CR7) */}
          <Card
            imgSrc="/img/CR7.jpeg"
            imgAlt="Módulos de Mentalidad"
            title="Módulos de Mentalidad"
            desc="Información y entrenamiento mental aplicados al fútbol. Aprende a gestionar presión, foco y toma de decisiones en momentos clave."
          />

          {/* 2) Llamadas en Directo (Totti) */}
          <Card
            imgSrc="/img/Totti.jpeg"
            imgAlt="Llamadas en Directo"
            title="Llamadas en Directo"
            desc="Sesiones en vivo conmigo para resolver dudas y trabajar situaciones reales. Ajuste fino a tu mente y a tu contexto."
          />

          {/* 3) Networking (amigos) */}
          <Card
            imgSrc="/img/amigos.jpeg"
            imgAlt="Networking de la Comunidad"
            title="Networking"
            desc="Conecta con jugadores que comparten tu ambición. Crea relaciones de valor con una mentalidad alineada a tu objetivo."
          />

          {/* 4) Experiencias Reales (Ronaldinho) */}
          <Card
            imgSrc="/img/Ronaldinho.jpeg"
            imgAlt="Experiencias Reales"
            title="Experiencias Reales"
            desc="Aprende de casos y vivencias auténticas de futbolistas. Estrategias y decisiones que marcaron la diferencia."
          />
        </div>

        {/* CTA doble */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://forms.gle/8fasZosmmtkNQGCa9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3
                       bg-black text-green-300 font-semibold
                       border border-green-500/60
                       shadow-[0_0_25px_rgba(0,255,100,0.35)]
                       hover:shadow-[0_0_45px_rgba(0,255,100,0.5)]
                       hover:text-green-200 hover:border-green-400
                       transition"
          >
            ✅ Sí, estoy preparado
          </a>

          <button
            type="button"
            onClick={() =>
              alert("Cuando estés preparado, vuelve y pulsa “Sí, estoy preparado”.")
            }
            className="inline-flex items-center justify-center rounded-xl px-6 py-3
                       bg-transparent text-gray-300 font-medium
                       border border-white/15 hover:border-white/30
                       hover:text-white transition"
          >
            ❌ No, no estoy preparado
          </button>
        </div>
      </div>
    </div>
  );
}

/* ==== Componente de tarjeta (con brillo verde y títulos en verde) ==== */
function Card({ imgSrc, imgAlt, title, desc }) {
  return (
    <div className="rounded-2xl border border-green-500/40 bg-black/60
                    p-6 shadow-[0_0_25px_rgba(0,255,100,0.18)]
                    hover:shadow-[0_0_35px_rgba(0,255,100,0.28)]
                    transition">
      <div className="w-full flex justify-center">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={420}
          height={260}
          className="rounded-lg object-cover"
          priority={false}
        />
      </div>
      <h3 className="text-2xl text-center font-bold text-green-400 mt-5">
        {title}
      </h3>
      <p className="mt-2 text-center text-gray-200 leading-relaxed">{desc}</p>
    </div>
  );
}
