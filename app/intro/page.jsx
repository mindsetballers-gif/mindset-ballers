"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const videoRef = useRef(null);
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("El navegador bloqueó el autoplay con sonido. El usuario deberá hacer click.");
        });
      }

      video.addEventListener("ended", () => {
        setShowMessage(true);
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      });
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center">
      <div className="mt-12 mb-12 relative w-full flex justify-center">
        {/* Contenedor con efecto glow */}
        <div className="relative rounded-xl shadow-lg max-w-4xl w-full overflow-hidden">
          <video
            ref={videoRef}
            src="/intro.mp4"
            className="w-full h-auto rounded-xl shadow-[0_0_40px_10px_rgba(0,255,0,0.5)]"
            autoPlay
            playsInline
            controls
          />
        </div>
      </div>

      {showMessage && (
        <p className="text-green-400 text-3xl font-bold mt-6 animate-pulse">
          ✅ Acceso concedido
        </p>
      )}
    </div>
  );
}
