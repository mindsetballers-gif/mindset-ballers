// Archivo: app/layout.js
import "./globals.css";

export const metadata = {
  title: "Mindset Ballers",
  description: "Comunidad para futbolistas con mentalidad de élite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
