import "./globals.css";
import Footer from './components/footer';
import Header from "./components/header";

export const metadata = {
  title: "CineCritic",
  description: "Seu aplicativo de filmes e séries brasileiro!",
  icons: {
    icon: '/images/favicon.ico', 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="pt-br">
      <body className={`antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
