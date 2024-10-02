import "./globals.css";
import Footer from './components/footer';
import Header from "./components/header";


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
      <body className={`antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
