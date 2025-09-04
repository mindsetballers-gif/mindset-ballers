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
      router.replace(`/dashboard?username=${encodeURIComponent(username)}`);
    };

    v.addEventListener("ended", handleEnded);
    return () => v.removeEventListener("ended", handleEnded);
  }, [router, username]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <video
        ref={videoRef}
        className="rounded-2xl max-h-[90vh] max-w-[90vw] object-contain"
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
