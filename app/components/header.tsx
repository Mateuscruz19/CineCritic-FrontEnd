"use client";
import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = {
    name: "João da Silva",
    photo: "/images/user-placeholder.png"
  };

  return (
<header className="fixed top-0 left-0 right-0 z-50 text-white bg-gray-900 shadow-lg transition-shadow duration-300 ease-in-out p-3">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image 
                src="/images/logos/logo5.png" 
                className="-mb-1" 
                alt="CiniCritic Logo" 
                width={35} 
                height={35} 
              />
            </Link>
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
                      href="/registrar" 
                      className="block w-full lg:w-auto text-center bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-500 transition duration-300">
                      JUNTE SE AO CINECRITIC
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/login" 
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
