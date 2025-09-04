"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // ===== Config =====
  const MATRIX_ALPHA = 0.08;
  const MATRIX_FONT_SIZE = 16;
  const TYPE_SPEED = 35;

  const [showLogin, setShowLogin] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const canvasRef = useRef(null);
  const typingStartedRef = useRef(false);

  const fullText = `
 ACCESO A SISTEMA PRIVADO · Mindset Ballers
Verificación de integridad... OK
Canales seguros... OK
Capa de cifrado... ACTIVA

Has accedido a una base de datos confidencial.
Solo unos pocos futbolistas llegan hasta aquí.

Solo unos pocos están dispuestos a sacrificar cualquier cosa,
si es así continúa aquí. 
De lo contrario es mejor que abandones esta página.

Si estás preparado para desbloquear mentalidad,
enfoque y rendimiento de élite…

PULSA ENTER para avanzar.
`;

  // ===== Escritura tipo consola =====
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

  // ===== Enter abre el login =====
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Enter" && typingDone) setShowLogin(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [typingDone]);

  // ===== Fondo Matrix =====
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
        if (drops[i] * MATRIX_FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const rafLoop = () => {
      draw();
      animId = requestAnimationFrame(rafLoop);
    };
    let animId = requestAnimationFrame(rafLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ===== Render =====
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
        style={{ position: "fixed", inset: 0, zIndex: 0 }}
      />

      {/* Texto consola */}
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
            color: "#baffbf",
            textShadow: "0 0 8px rgba(0,255,0,.25)",
          }}
        >
          {displayed}
          {typingDone && (
            <div style={{ marginTop: 16, fontWeight: "bold", color: "#fff" }}>
              ▌PULSA ENTER para continuar
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
              border: "1px solid rgba(0,255,0,0.35)",
              padding: 24,
              background:
                "linear-gradient(180deg, rgba(0,255,0,.05), rgba(0,0,0,.4))",
              boxShadow: "0 0 30px rgba(0,255,0,.25)",
              borderRadius: 12,
              color: "#eaffea",
            }}
          >
            <h1
              style={{
                margin: 0,
                marginBottom: 10,
                fontSize: 22,
                letterSpacing: 1,
                textAlign: "center",
                color: "#83ff8a",
                textShadow: "0 0 10px rgba(0,255,0,.45)",
              }}
            >
              🔒 ACCESO RESTRINGIDO
            </h1>

            <p style={{ fontSize: 14, opacity: 0.9, marginBottom: 12 }}>
              <strong>Prueba suerte:</strong> escribe un <em>usuario</em> y una{" "}
              <em>contraseña</em> cualquiera para intentar acceder.
            </p>

            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
}

function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const safe = username.trim() || "futbolista";
        if (typeof window !== "undefined") {
          window.localStorage.setItem("username", safe);
        }
        router.push(`/intro?username=${encodeURIComponent(safe)}`);
      }}
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
    >
      <input
        type="text"
        placeholder="Usuario"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          background: "transparent",
          border: "1px solid rgba(0,255,0,0.5)",
          color: "white",
          padding: "10px 12px",
          fontFamily: '"Courier New", monospace',
          borderRadius: 8,
        }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        required
        style={{
          background: "transparent",
          border: "1px solid rgba(0,255,0,0.5)",
          color: "white",
          padding: "10px 12px",
          fontFamily: '"Courier New", monospace',
          borderRadius: 8,
        }}
      />
      <button
        type="submit"
        style={{
          marginTop: 4,
          padding: "10px 12px",
          background: "#0a0",
          color: "#001700",
          fontWeight: "bold",
          border: "1px solid #19ff47",
          cursor: "pointer",
          borderRadius: 10,
          boxShadow: "0 0 18px rgba(0,255,0,.45)",
        }}
      >
        Entrar
      </button>
    </form>
  );
}
