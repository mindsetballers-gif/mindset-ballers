"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // ===== CONFIG =====
  const MATRIX_ALPHA = 0.08;
  const MATRIX_FONT_SIZE = 16;
  const TYPE_SPEED = 40;
  // ==================

  const [showLogin, setShowLogin] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const canvasRef = useRef(null);
  const rainIntervalRef = useRef(null);
  const typingStartedRef = useRef(false);

  // Texto inicial
  const fullText = `
 Bienvenido, futbolista.

Has accedido a un área secreta y exclusiva, reservada solo para aquellos
que buscan ir más allá del juego.

Aquí descubrirás cómo dominar tu mente para alcanzar el máximo rendimiento
en el terreno de juego.

Jugadores históricos han demostrado que la mentalidad lo es todo:
Cristiano Ronaldo con su disciplina inquebrantable,
Ronaldinho con su magia y creatividad,
Messi con su visión sobrenatural.

Ellos marcaron la diferencia no solo con talento,
sino con una mentalidad única.

Este lugar es exclusivo. Misterioso. No todos deberían estar aquí.

─────────────────────────────
Si deseas continuar y convertirte en parte de esta comunidad,
PULSA ENTER para avanzar.
`;

  // ===== EFECTO ESCRITURA =====
  useEffect(() => {
    if (typingStartedRef.current) return;
    typingStartedRef.current = true;

    let i = 0;
    const id = setInterval(() => {
      setDisplayed((prev) => prev + fullText[i]);
      i++;
      if (i >= fullText.length) {
        clearInterval(id);
        setTypingDone(true);
      }
    }, TYPE_SPEED);

    return () => clearInterval(id);
  }, []);

  // ===== DETECTAR ENTER =====
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Enter" && typingDone) setShowLogin(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [typingDone]);

  // ===== EFECTO MATRIX =====
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDrops();
    };

    let drops = [];
    const initDrops = () => {
      const cols = Math.floor(canvas.width / MATRIX_FONT_SIZE);
      drops = Array(cols).fill(1);
      ctx.font = `${MATRIX_FONT_SIZE}px monospace`;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgba(0, 255, 0, ${MATRIX_ALPHA})`;
      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() < 0.5 ? "0" : "1";
        ctx.fillText(char, i * MATRIX_FONT_SIZE, drops[i] * MATRIX_FONT_SIZE);

        if (
          drops[i] * MATRIX_FONT_SIZE > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    rainIntervalRef.current = setInterval(draw, 33);

    return () => {
      clearInterval(rainIntervalRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ===== UI =====
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "black",
        color: "white",
        fontFamily: '"Courier New", monospace',
        overflow: "hidden",
      }}
    >
      {/* Fondo Matrix */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* Texto introducción */}
      {!showLogin && (
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "24px",
            maxWidth: 900,
            lineHeight: 1.6,
            fontSize: 18,
            whiteSpace: "pre-wrap",
          }}
        >
          {displayed}
          {typingDone && (
            <div style={{ marginTop: 16, fontWeight: "bold" }}>
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 20,
                  background: "white",
                  marginRight: 8,
                  animation: "blink 1s step-start infinite",
                  verticalAlign: "middle",
                }}
              />
              PULSA ENTER para continuar
            </div>
          )}
        </div>
      )}

      {/* Login */}
      {showLogin && (
        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            style={{
              width: 380,
              border: "1px solid rgba(255,255,255,0.6)",
              padding: 24,
              background: "rgba(0,0,0,0.6)",
              boxShadow: "0 0 20px rgba(255,255,255,0.08)",
            }}
          >
            <h1
              style={{
                margin: 0,
                marginBottom: 8,
                fontSize: 22,
                letterSpacing: 1,
                textAlign: "center",
              }}
            >
              🔒 ACCESO RESTRINGIDO
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const username = e.target.username.value;
                localStorage.setItem("username", username);
                router.push("/intro");
              }}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <input
                name="username"
                type="text"
                placeholder="Nombre de usuario"
                required
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.7)",
                  color: "white",
                  padding: "10px 12px",
                  fontFamily: '"Courier New", monospace',
                }}
              />
              <input
                name="password"
                type="password"
                placeholder="Contraseña"
                required
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.7)",
                  color: "white",
                  padding: "10px 12px",
                  fontFamily: '"Courier New", monospace',
                }}
              />
              <small style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                💡 Prueba suerte… inventa tu nombre y tu contraseña.
              </small>
              <button
                type="submit"
                style={{
                  marginTop: 8,
                  padding: "10px 12px",
                  background: "white",
                  color: "black",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CSS cursor */}
      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
