"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

export default function IntroPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const videoRef = useRef(null);

  const username = searchParams.get("username") || "Jugador";

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.play().catch(() => {
      // Si el navegador bloquea el autoplay, el usuario puede darle manualmente
    });

    const handleEnded = () => {
      router.push(`/dashboard?username=${encodeURIComponent(username)}`);
    };

    v.addEventListener("ended", handleEnded);
    return () => v.removeEventListener("ended", handleEnded);
  }, [router, username]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Fondo con efecto verde brillante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900 to-black opacity-80 z-0" />
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[400px] h-[700px] rounded-full bg-green-500 opacity-20 blur-3xl animate-pulse"></div>
      </div>

      {/* Video centrado */}
      <div className="relative z-10 flex items-center justify-center">
        <video
          ref={videoRef}
          src="/intro.mp4"
          autoPlay
          muted
          playsInline
          className="w-[360px] h-[640px] object-cover rounded-2xl shadow-2xl border-2 border-green-500"
        />
      </div>
    </div>
  );
}
