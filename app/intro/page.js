"use client";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get("username") || "Usuario";

  const videoRef = useRef(null);
  const navigatedRef = useRef(false); // evita dobles navegaciones

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Reproducir solo una vez (sin atributo autoPlay para evitar dobles inicios)
    const startOnce = () => {
      if (v.paused) {
        v.play().catch(() => {
          // si el navegador bloquea reproducción con sonido, no hacemos nada extra
        });
      }
    };

    const goNext = () => {
      if (navigatedRef.current) return;
      navigatedRef.current = true;

      // Paramos y "vaciamos" el vídeo para que el navegador no lo relance por ningún motivo
      try {
        v.pause();
        v.removeAttribute("src");
        v.load();
      } catch {}

      router.replace(`/dashboard?username=${encodeURIComponent(username)}`);
    };

    const onEnded = () => goNext();

    // “Plan B”: algunos navegadores no disparan 'ended' de forma fiable.
    // Si está a 0.2s del final, navegamos igualmente.
    const onTimeUpdate = () => {
      if (!navigatedRef.current && v.duration && v.currentTime >= v.duration - 0.2) {
        goNext();
      }
    };

    startOnce();
    v.addEventListener("ended", onEnded);
    v.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [router, username]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <video
        key="introVideo"           // fuerza a React a no reciclar el nodo
        ref={videoRef}
        playsInline
        controls={false}          // evitar que el navegador reinicie al terminar
        preload="auto"
        className="rounded-xl shadow-lg border-2 border-green-500"
        style={{
          width: "360px",         // tamaño vertical que te gustó
          height: "640px",
          objectFit: "cover",
          margin: "0 auto",
          display: "block",
        }}
      >
        <source src="/img/intro.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>
  );
}
