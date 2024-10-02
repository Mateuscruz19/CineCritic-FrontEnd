"use client";
import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = {
    name: "João da Silva",
    photo: "/images/user-placeholder.png"
  };

  return (
    <header className="relative z-10 text-white bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image 
              src="/images/logos/logo5.png" 
              className="-mb-1" 
              alt="CiniCritic Logo" 
              width={35} 
              height={35} 
            />
            <div className="hidden lg:flex items-center bg-gray-800 rounded-lg h-10">
              <Search className="w-10 h-10 text-white p-2" />
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-l-lg h-full w-[300px] focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-500 transition duration-300">
                Buscar
              </button>
            </div>
          </div>

          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>

          <nav className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center">
              <li><a href="#" className="hover:text-red-600 transition duration-300">Séries</a></li>
              <li><a href="#" className="hover:text-red-600 transition duration-300">Filmes</a></li>
              <li><a href="#" className="hover:text-red-600 transition duration-300">Descubra</a></li>

              {!isLoggedIn ? (
                <>
                  <li>
                    <a 
                      href="#" 
                      className="block w-full lg:w-auto text-center bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-500 transition duration-300">
                      JUNTE-SE AO CINECRITIC
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="block w-full lg:w-auto text-center bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-500 transition duration-300">
                      ENTRAR
                    </a>
                  </li>
                </>
              ) : (
                <li className="flex items-center space-x-2">
                  <Image
                    src={user.photo}
                    alt="Foto do Usuário"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span>{user.name}</span>
                </li>
              )}
            </ul>
          </nav>

          <div className="w-full lg:hidden mt-4">
            <div className="flex items-center bg-gray-800 rounded-lg h-10">
              <Search className="w-10 h-10 text-white p-2" />
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-l-lg h-full w-full focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-500 transition duration-300">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;