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
        // Si el navegador bloquea el autoplay, el usuario hará click para iniciar.
      }
    };
    tryPlay();

    const handleEnded = () => {
      // Evita cualquier nuevo render/“reinicio” del video y navega al dashboard
      router.replace(`/dashboard?username=${encodeURIComponent(username)}`);
    };

    v.addEventListener("ended", handleEnded);
    return () => v.removeEventListener("ended", handleEnded);
  }, [router, username]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <video
        ref={videoRef}
        className="rounded-2xl max-h-[80vh] w-auto"
        // Asegúrate de que el archivo existe en public/img/intro.mp4
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
