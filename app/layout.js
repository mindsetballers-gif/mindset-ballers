// app/layout.js
export const metadata = {
  title: "Mi Web",
  description: "Sitio publicado en Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif", color: "#0f172a" }}>
        {children}
      </body>
    </html>
  );
}
