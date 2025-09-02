// components/Footer.jsx
"use client";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-footer">
      <div className="mb-footer__inner">
        <nav className="mb-footer__links" aria-label="Enlaces legales">
          <Link href="/legal/aviso-legal">Aviso legal</Link>
          <span className="dot">•</span>
          <Link href="/legal/privacidad">Política de privacidad</Link>
          <span className="dot">•</span>
          <Link href="/legal/terminos">Términos y condiciones</Link>
          <span className="dot">•</span>
          <Link href="/legal/cookies">Política de cookies</Link>
        </nav>

        <div className="mb-footer__copy">
          © {year} Mindset Ballers — Todos los derechos reservados.
        </div>
      </div>

      {/* Estilos locales (estética igual que Cookies) */}
      <style jsx>{`
        .mb-footer {
          margin-top: 48px;
          background: rgba(0, 0, 0, 0.85);
          border-top: 1px solid rgba(57, 255, 20, 0.25);
          box-shadow: 0 -0 22px rgba(57, 255, 20, 0.08), inset 0 1px 0 rgba(57, 255, 20, 0.1);
          backdrop-filter: blur(2px);
        }
        .mb-footer__inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 18px 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-family: "Courier New", ui-monospace, SFMono-Regular, Menlo, Monaco,
            Consolas, "Liberation Mono", "Lucida Console", monospace;
          color: #d8fdd8;
        }
        .mb-footer__links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          letter-spacing: 0.3px;
        }
        .mb-footer__links a {
          color: #b9ffb9;
          text-decoration: none;
          transition: color 0.2s ease, text-shadow 0.2s ease;
        }
        .mb-footer__links a:hover,
        .mb-footer__links a:focus-visible {
          color: #e7ffe7;
          text-shadow: 0 0 10px rgba(57, 255, 20, 0.85);
          outline: none;
        }
        .mb-footer__links .dot {
          color: rgba(185, 255, 185, 0.6);
          user-select: none;
        }
        .mb-footer__copy {
          font-size: 12px;
          opacity: 0.85;
          color: #b2f7b2;
          letter-spacing: 0.3px;
        }

        @media (max-width: 640px) {
          .mb-footer__links {
            gap: 8px;
            font-size: 13px;
          }
          .mb-footer__copy {
            font-size: 11.5px;
          }
        }
      `}</style>
    </footer>
  );
}
