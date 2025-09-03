"use client";
export const dynamic = "force-dynamic";


import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get("username");
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        console.warn("El navegador bloqueó la reproducción automática con sonido.");
      });

      const handleEnded = () => {
        router.push(`/dashboard?username=${username}`);
      };

      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, [router, username]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <video
        ref={videoRef}
        className="rounded-xl shadow-lg border-2 border-green-500"
        style={{
          maxWidth: "100%",
          maxHeight: "100vh",
          height: "auto",
          margin: "0 auto",
          display: "block",
        }}
        autoPlay
        controls
        playsInline
      >
        <source src="/img/intro.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>
  );
}
