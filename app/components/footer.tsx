import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importando ícones

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image
            src="/images/logos/logo2.png"
            alt="CiniCritic Logo"
            width={40}
            height={40}
          />
          <p className="text-sm">&copy; 2021-2024 CiniCritic. Todos os direitos reservados.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mb-4 md:mb-0">
          <p className="text-sm">Seu aplicativo de filmes e séries brasileiro!</p>
          <div className="flex space-x-3 mt-2 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-gray-400 hover:text-white transition-colors duration-200" size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-white transition-colors duration-200" size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-white transition-colors duration-200" size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-white transition-colors duration-200" size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4">
          <a href="/series" className="text-sm text-gray-400 hover:text-white">Séries</a>
          <a href="/filmes" className="text-sm text-gray-400 hover:text-white">Filmes</a>
          <a href="/login" className="text-sm text-gray-400 hover:text-white">Login</a>
          <a href="/registro" className="text-sm text-gray-400 hover:text-white">Registro</a>
          <a href="/privacidade" className="text-sm text-gray-400 hover:text-white">Privacidade</a>
          <a href="/termos-de-uso" className="text-sm text-gray-400 hover:text-white">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
