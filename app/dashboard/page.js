"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const searchParams = useSearchParams();

  // === 1) Nombre del usuario (URL > localStorage > 'futbolista') ===
  const urlUsername =
    (searchParams && searchParams.get("username"))?.trim() || "";
  const safeName = useMemo(() => {
    const fromUrl = urlUsername.replace(/\s+/g, " ");
    if (fromUrl) return fromUrl;
    if (typeof window !== "undefined") {
      const ls = window.localStorage.getItem("username") || "";
      if (ls) return ls;
    }
    return "futbolista";
  }, [urlUsername]);

  const [username, setUsername] = useState("futbolista");

  useEffect(() => {
    setUsername(safeName);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("username", safeName);
    }
  }, [safeName]);

  // === 2) Overlay "Acceso concedido" con efecto de escritura ===
  const [overlayVisible, setOverlayVisible] = useState(true);
  const fullOverlayText = `Acceso concedido, bienvenido ${username}.`;
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!overlayVisible) return;
    setTyped(""); // reinicia si entras de nuevo
    let i = 0;
    const speed = 18; // ms por carácter (rápido)
    const typer = setInterval(() => {
      i++;
      setTyped(fullOverlayText.slice(0, i));
      if (i >= fullOverlayText.length) {
        clearInterval(typer);
        // Espera 2s y oculta el overlay
        const t = setTimeout(() => setOverlayVisible(false), 2000);
        return () => clearTimeout(t);
      }
    }, speed);
    return () => clearInterval(typer);
  }, [fullOverlayText, overlayVisible]);

  // === 3) Rutas de imágenes (asegúrate de que existen en /public/img/) ===
  const IMG = {
    mentalidad: "/img/CR7.jpeg",
    chat: "/img/amigos.jpeg",
    directo: "/img/Totti.jpeg",
    experiencias: "/img/Ronaldinho.jpeg",
  };

  // === 4) Estilos comunes (sin styled-jsx para evitar conflictos) ===
  const container = {
    background: "#000",
    color: "#c8facc",
    minHeight: "100vh",
    fontFamily: '"Courier New", monospace',
  };

  const pageWrap = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "40px 24px 120px",
  };

  const sectionRow = (reverse = false) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 28,
    flexDirection: reverse ? "row-reverse" : "row",
    margin: "56px 0",
  });

  const col = {
    flex: "1 1 360px",
    minWidth: 280,
  };

  const neonTitle = {
    color: "#83ff8a",
    textAlign: "center",
    fontSize: 36,
    lineHeight: 1.2,
    marginTop: 8,
    marginBottom: 20,
    textShadow: "0 0 12px rgba(0,255,0,.4)",
  };

  const subtitle = {
    color: "#8aff90",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 32,
    opacity: 0.9,
  };

  const bodyText = {
    fontSize: 18,
    lineHeight: 1.7,
    opacity: 0.95,
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: 16,
    display: "block",
    boxShadow: "0 0 30px rgba(0,255,0,.5)",
    border: "1px solid rgba(0,255,0,.35)",
  };

  const card = {
    border: "1px solid rgba(0,255,0,.35)",
    background: "linear-gradient(180deg, rgba(0,255,0,.05), rgba(0,0,0,.2))",
    padding: 22,
    borderRadius: 14,
    boxShadow: "0 0 18px rgba(0,255,0,.15) inset",
  };

  const ctaWrap = {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    marginTop: 48,
  };

  const btnYes = {
    background: "#55ff5f",
    color: "#001800",
    padding: "12px 18px",
    borderRadius: 10,
    border: "1px solid #00ff3e",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 16,
    boxShadow: "0 0 18px rgba(0,255,0,.4)",
  };

  const btnNo = {
    background: "transparent",
    color: "#9ae6a9",
    padding: "12px 18px",
    borderRadius: 10,
    border: "1px dashed rgba(0,255,0,.35)",
    cursor: "pointer",
    fontSize: 16,
    opacity: 0.85,
  };

  return (
    <div style={container}>
      {/* ===== Overlay de acceso concedido (3s con typing) ===== */}
      {overlayVisible && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background:
              "radial-gradient(transparent 40%, rgba(0,0,0,.8) 80%), rgba(0,0,0,.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 16px",
              border: "1px solid rgba(255,255,255,.25)",
              background: "rgba(0,0,0,.55)",
              boxShadow:
                "0 0 24px rgba(255,255,255,.08), 0 0 60px rgba(0,255,0,.15) inset",
              padding: "22px 26px",
              fontSize: 20,
              color: "#d8fddd",
              lineHeight: 1.6,
            }}
          >
            <div style={{ marginBottom: 10 }}>
              <span
                style={{
                  display: "inline-block",
                  width: 14,
                  height: 14,
                  background: "#19ff47",
                  borderRadius: 3,
                  boxShadow: "0 0 10px rgba(0,255,0,.8)",
                  marginRight: 10,
                  verticalAlign: "-2px",
                }}
              />
              <span>
                <strong style={{ color: "#baffbf" }}>{typed}</strong>
              </span>
            </div>
            <div style={{ opacity: 0.9 }}>
              Te adentras en un área exclusiva. Prepárate para desbloquear
              secretos de mentalidad, enfoque y rendimiento que muy pocos
              futbolistas conocen.
            </div>
          </div>
        </div>
      )}

      {/* ===== Contenido principal ===== */}
      <div style={pageWrap}>
        {/* Cabecera / Intro Mindset Ballers */}
        <h1 style={neonTitle}>Bienvenido Futbolista</h1>
        <div style={{ ...subtitle, marginTop: -6 }}>
          Estás en el mundo de Mindset Ballers.
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto 36px", textAlign: "center" }}>
          <p style={bodyText}>
            <strong>Mindset Ballers</strong> no es solo una comunidad. Es un
            mundo exclusivo, secreto y reservado solo para quienes deciden ir
            más allá en el fútbol y en la vida. Aquí encontrarás el apoyo, la
            visión y las herramientas que nunca te enseñaron en un vestuario.
          </p>
          <p style={bodyText}>
            Bajo mi experiencia, vamos a guiarte en cada decisión de tu carrera
            deportiva, a fortalecer tu mentalidad y a impulsarte para crecer
            como futbolista dentro y fuera del campo. Este no es un lugar para
            todos, es para los que quieren pertenecer a algo más grande, a una
            élite que busca marcar la diferencia.
          </p>
          <p style={{ ...bodyText, fontWeight: 700 }}>
            Bienvenido a la revolución silenciosa. Bienvenido a Mindset Ballers.
          </p>
        </div>

        {/* Sección 1: Texto izq / Imagen dcha */}
        <div style={sectionRow(false)}>
          <div style={col}>
            <div style={card}>
              <h2 style={{ color: "#83ff8a", marginTop: 0, marginBottom: 8 }}>
                Módulos de Mentalidad
              </h2>
              <p style={bodyText}>
                Accede a contenido exclusivo para trabajar tu mentalidad
                deportiva. Te ayudaremos a conocer mejor tu mente y gestionar
                cualquier situación dentro y fuera del campo.
              </p>
            </div>
          </div>
          <div style={col}>
            <img
              src={IMG.mentalidad}
              alt="Módulos de Mentalidad"
              style={imgStyle}
            />
          </div>
        </div>

        {/* Sección 2: Imagen izq / Texto dcha */}
        <div style={sectionRow(true)}>
          <div style={col}>
            <img
              src={IMG.chat}
              alt="Chat de la Comunidad"
              style={imgStyle}
            />
          </div>
          <div style={col}>
            <div style={card}>
              <h2 style={{ color: "#83ff8a", marginTop: 0, marginBottom: 8 }}>
                Chat de Networking
              </h2>
              <p style={bodyText}>
                Conéctate con otros jugadores de la comunidad, comparte
                experiencias y haz contactos que te ayudarán a crecer como
                deportista.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 3: Texto izq / Imagen dcha */}
        <div style={sectionRow(false)}>
          <div style={col}>
            <div style={card}>
              <h2 style={{ color: "#83ff8a", marginTop: 0, marginBottom: 8 }}>
                Sesiones en Directo
              </h2>
              <p style={bodyText}>
                Únete a clases en directo conmigo. Resolverás tus dudas en
                tiempo real.
              </p>
            </div>
          </div>
          <div style={col}>
            <img src={IMG.directo} alt="Sesiones en Directo" style={imgStyle} />
          </div>
        </div>

        {/* Sección 4: Imagen izq / Texto dcha */}
        <div style={sectionRow(true)}>
          <div style={col}>
            <img
              src={IMG.experiencias}
              alt="Experiencias Reales"
              style={imgStyle}
            />
          </div>
          <div style={col}>
            <div style={card}>
              <h2 style={{ color: "#83ff8a", marginTop: 0, marginBottom: 8 }}>
                Experiencias Reales
              </h2>
              <p style={bodyText}>
                Aprende de experiencias reales. Nuestro equipo de profesionales
                te guiará en tu crecimiento deportivo con estrategias basadas en
                momentos vividos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA doble para conversión */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <h3
            style={{
              color: "#9dff9f",
              fontSize: 20,
              marginBottom: 18,
              textShadow: "0 0 10px rgba(0,255,0,.25)",
            }}
          >
            ¿Listo para entrar en la comunidad?
          </h3>

          <div style={ctaWrap}>
            <a
              href="https://forms.gle/8fasZosmmtkNQGCa9"
              target="_blank"
              rel="noopener noreferrer"
              style={btnYes}
            >
              ✅ Estoy listo, quiero acceder
            </a>

            <button
              type="button"
              style={btnNo}
              onClick={() => {
                // No hace nada: sólo un sutil feedback visual
                alert("Cuando estés preparado, aquí te estaremos esperando.");
              }}
            >
              ⏳ No estoy preparado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
