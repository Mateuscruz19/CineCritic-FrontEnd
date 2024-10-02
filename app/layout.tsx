import localFont from "next/font/local";
import "./globals.css";
import Footer from './components/footer';
import Header from "./components/header";

// Remover fontes duplicadas e corrigir peso
const proximaNovaSemibold = localFont({
  src: "/fonts/proxima-nova/semibold.otf",
  variable: "--font-proxima-nova-semibold",
  weight: "600",  // Defina um peso válido para a fonte Semibold
});

export const metadata = {
  title: "CiniCritic",
  description: "Seu aplicativo de filmes e séries brasileiro!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${proximaNovaSemibold.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
