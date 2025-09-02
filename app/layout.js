// app/layout.js
import "./globals.css";
import Footer from "./components/footer";


export const metadata = {
  title: "Mindset Ballers",
  description: "Comunidad exclusiva para futbolistas: mentalidad, enfoque y rendimiento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        style={{
          background: "black",
          color: "#c8ffd0",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily:
            '"Courier New", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Lucida Console", monospace',
        }}
      >
        {/* Contenido de cada página */}
        <main style={{ flex: 1 }}>{children}</main>

        {/* Footer en TODAS las páginas */}
        <Footer />
      </body>
    </html>
  );
}
