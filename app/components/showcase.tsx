import React from 'react';
import Image from 'next/image';

const AppShowcaseSection = () => {
  return (
    <div className="w-full h-[55vh] bg-[url('/images/stars.jpg')] bg-cover bg-center relative overflow-hidden">
      {/* Imagem dos celulares à direita */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <Image
          src="/images/file.png"
          alt="App Screenshots"
          layout="fill"
          objectFit="cover"
          objectPosition="left center"
          className="opacity-80"
        />
      </div>

      {/* Gradiente de preto para a imagem das estrelas */}
      <div className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-r from-black via-black to-transparent">
        <div className="container h-full mx-auto px-4 flex items-center">
          <div className="w-full md:w-1/2 text-white z-10">
            <h2 className="text-4xl font-bold mb-2">
              CineCritic App{' '}
              <span className="bg-red-600 text-white px-2 py-1 text-sm rounded-full">GRATIS</span>
            </h2>
            <p className="text-xl mb-6">
              Acompanhe o que você está assistindo, adicione à listas, descubra, encontre onde assistir, veja o que vem a seguir, receba recomendações e muito mais.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-black rounded-lg overflow-hidden">
                <Image
                  src="/images/applestore-badge.png"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                />
              </a>
              <a href="#" className="bg-black rounded-lg overflow-hidden">
                <Image
                  src="/images/googleplay-store.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                />
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-2">Apps Comunitários</h3>
            <p className="text-lg mb-4">
              Navegue automaticamente pelo seu centro de mídia favorito e descubra centenas de aplicativos desenvolvidos pela comunidade.
            </p>
            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-md font-bold inline-block">
              DESCUBRA →
            </a>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default AppShowcaseSection;
