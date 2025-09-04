"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function IntroPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasNavigated, setHasNavigated] = useState(false); // Evita reinicios

  useEffect(() => {
    const video = videoRef.current;
    if (video && !hasNavigated) {
      video.play().catch(() => {});
      video.onended = () => {
        if (!hasNavigated) {
          setHasNavigated(true);
          const username = searchParams.get("username") || "Jugador";
          router.push(`/dashboard?username=${username}`);
        }
      };
    }
  }, [router, searchParams, hasNavigated]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        playsInline
        muted={false}
        controls={false}
        className="rounded-2xl max-h-[80vh] w-auto"
      />
    </div>
  );
}
