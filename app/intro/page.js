"use client";
import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const videoRef = useRef(null);
  const [blocked, setBlocked] = useState(false); // true si el navegador bloquea autoplay con sonido

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Queremos sonido ON
    v.muted = false;
    v.volume = 1;

    const tryPlay = async () => {
      try {
        await v.play();
        setBlocked(false);
      } catch (err) {
        // Autoplay con sonido probablemente bloqueado
        setBlocked(true);
      }
    };

    // Intento inmediato + tras cargar metadata
    tryPlay();
    const onLoaded = () => tryPlay();
    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("canplay", onLoaded);

    // Permitir que una interacción del usuario lo habilite
    const onFirstInteraction = () => {
      tryPlay();
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
    window.addEventListener("click", onFirstInteraction);
    window.addEventListener("touchstart", onFirstInteraction);
    window.addEventListener("keydown", onFirstInteraction);

    // Al terminar → ir al dashboard
    const onEnded = () => {
      window.location.href = "/dashboard";
    };
    v.addEventListener("ended", onEnded);

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("canplay", onLoaded);
      v.removeEventListener("ended", onEnded);
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "grid",
        placeItems: "center",
        padding: "6vh 16px", // margen superior/inferior para que no toque bordes
        fontFamily: '"Courier New", monospace',
      }}
    >
      {/* Marco con bordes redondeados */}
      <div
        style={{
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          background: "#000",
          boxShadow: "0 12px 40px rgba(0,0,0,0.7)",
        }}
      >
        <video
          ref={videoRef}
          src="/intro.mp4"
          autoPlay
          playsInline
          controls={false} // limpio; si quieres, pon true para controles nativos
          // Vídeo vertical centrado, con espacio arriba/abajo (no toca bordes):
          style={{
            height: "min(80vh, 820px)", // deja aire arriba/abajo
            width: "auto",
            display: "block",
            objectFit: "contain", // muestra el vídeo entero sin recortar
            background: "#000",
            aspectRatio: "9 / 16",
            borderRadius: 24, // refuerza redondeo (aunque ya recorta el contenedor)
          }}
        />

        {/* Botón visible si el autoplay con audio fue bloqueado */}
        {blocked && (
          <button
            onClick={() => videoRef.current?.play()}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.6)",
              fontWeight: 700,
              padding: "14px 18px",
              cursor: "pointer",
            }}
          >
            ▶ Tocar para reproducir con sonido
          </button>
        )}
      </div>
    </main>
  );
}
