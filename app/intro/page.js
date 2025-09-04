"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function IntroPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const videoRef = useRef(null);

  const username = searchParams.get("username") || "Jugador";

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.loop = false;

    const handleEnded = () => {
      router.replace(`/dashboard?username=${encodeURIComponent(username)}`);
    };

    v.addEventListener("ended", handleEnded);
    return () => v.removeEventListener("ended", handleEnded);
  }, [router, username]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Glow verde de fondo */}
      <div className="pointer-events-none absolute -z-10 inset-0 opacity-60">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(34,197,94,0.35) 0%, rgba(0,0,0,0) 70%)" }} />
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(34,197,94,0.25) 0%, rgba(0,0,0,0) 70%)" }} />
      </div>

      {/* Contenedor con tamaño fijo para vídeo vertical */}
      <div
        className="
          relative
          w-[360px] md:w-[420px] lg:w-[520px]     /* ancho fijo por breakpoint */
          max-h-[90vh]                            /* deja margen arriba/abajo */
          rounded-[24px]
          shadow-[0_0_35px_rgba(34,197,94,0.45)]
          bg-black
        "
        style={{ aspectRatio: "9 / 16" }}         /* forma vertical */
      >
        <video
          ref={videoRef}
          src="/img/intro.mp4"                     /* debe existir: public/img/intro.mp4 */
          className="absolute inset-0 w-full h-full rounded-[24px] object-contain bg-black"
          playsInline
          autoPlay
          muted                                    /* garantiza autoplay en móvil */
          controls={false}
          preload="auto"
        />
      </div>
    </div>
  );
}
