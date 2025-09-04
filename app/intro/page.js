"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default function IntroPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const videoRef = useRef(null);

  const username = searchParams.get("username") || "Jugador";

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.loop = false;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // Si el navegador bloquea autoplay, el usuario hará click
      }
    };
    tryPlay();

    const handleEnded = () => {
      router.replace(`/dashboard?username=${encodeURIComponent(username)}`);
    };

    v.addEventListener("ended", handleEnded);
    return () => v.removeEventListener("ended", handleEnded);
  }, [router, username]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative">
      {/* Brillo verde de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-black opacity-60 blur-3xl"></div>

      {/* Video */}
      <video
        ref={videoRef}
        className="relative rounded-2xl max-h-[90vh] max-w-[90vw] object-contain shadow-[0_0_30px_rgba(0,255,0,0.6)]"
        src="/img/intro.mp4"
        playsInline
        autoPlay
        controls={false}
        muted={false}
        preload="auto"
      />
    </div>
  );
}
