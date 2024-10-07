"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AppShowcaseSection from "./components/showcase";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState<Filme[]>([]);
  const [current, setCurrent] = useState(1);

  // Definição da interface do Filme
  interface Filme {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWJmYTZkMjAyZjU4NDBmYWI1MDk3ZTg2NWIyMjkxNSIsInN1YiI6IjY0OGM1Zjc1NTU5ZDIyMDExYzRiNTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nGuXFcVtAx3oG_lGMd9pTlRyF3_ks9Qadn7CDE5MZA',
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${current}`,
          options
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }

        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error("Erro na busca dos filmes populares:", error);
      }
    };

    fetchPopularMovies();
  }, [current]);

  return (
    <main className="z-10">
      <div className="w-full h-[75vh] flex items-center justify-center relative overflow-hidden">
        {popularMovies.slice(11,14).map((movie, index) => (
          <div
            key={movie.id}
            className="absolute top-0 h-full w-1/3"
            style={{
              left: `${index * 33.33}%`,
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <section className="text-center z-10">
            <Image
              src="/images/logos/logo2.png"
              alt="CineCritic Logo"
              width={220}
              height={60}
              className="mx-auto mb-4"
            />
            <h2 className="text-4xl font-bold mb-4">
              Acompanhe. Descubra. Compartilhe.
            </h2>
            <p className="text-xl mb-12">
              Acompanhe os programas e filmes que você assiste.
              <br />
              Descubra o que está em alta e onde transmitir. Compartilhe
              comentários, recomendações e classificações.
            </p>
            <a
              href="/dashboard"
              className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              EXPERIMENTE →
            </a>
          </section>
        </div>
      </div>

      
      <AppShowcaseSection />

      <div className="w-full h-[55vh] bg-[url('/images/backgroundnetflix.png')] bg-cover bg-center flex flex-col items-center justify-center">
  <div className="bg-black w-full h-full bg-opacity-60 flex flex-col items-center justify-center relative">
    

    <div className="absolute top-0 w-full h-[1px] bg-white"></div>

    <section className="text-center">
      <h2 className="text-4xl font-bold mb-4">
        Descubra onde assistir programas e filmes
      </h2>
      <p className="text-xl mb-12">
        Links diretos para centenas de serviços de streaming em 139 países. Defina seus <br />
        favoritos e receba emails quando novos programas e filmes estiverem disponíveis para assistir.
      </p>
      <a
        href="#"
        className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
      >
        ASSISTA AGORA →
      </a>
    </section>

    <section className="mb-12 mt-12 flex justify-center space-x-4">
      <StreamingServiceLogo name="NETFLIX" bgColor="bg-red-600" />
      <StreamingServiceLogo name="Disney+"
       bgColor="bg-blue-700" />
      <StreamingServiceLogo name="Apple TV" bgColor="bg-gray-800" />
      <StreamingServiceLogo name="prime video" bgColor="bg-blue-500" />
      <StreamingServiceLogo name="max" bgColor="bg-purple-700" />
      <StreamingServiceLogo name="crunchyroll" bgColor="bg-orange-500" />
    </section>
  </div>
</div>

      <section className="mb-12 max-w-7xl mx-auto mt-12">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Top Filmes Populares</h3>
          <a href="#" className="text-red-500 hover:text-red-400">
            DESCUBRA →
          </a>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {popularMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.release_date.split("-")[0]}
              posterPath={movie.poster_path}
              rating={movie.vote_average.toFixed(1)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

interface StreamingServiceLogoProps {
  name: string;
  bgColor: string;
}

const StreamingServiceLogo = ({ name, bgColor }: StreamingServiceLogoProps) => (
  <div className={`${bgColor} w-24 h-12 flex items-center justify-center rounded`}>
    <span className="">{name}</span>
  </div>
);


// Componente para renderizar filmes
interface MovieCardProps {
  title: string;
  year: string;
  posterPath: string;
  rating: string;
}

const MovieCard = ({ title, year, posterPath, rating }: MovieCardProps) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
    <img
      src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      alt={title}
      className="w-full h-[400px] object-cover"
    />
    <div className="p-4">
      <h4 className="font-semibold truncate">{title}</h4>
      <p className="text-gray-400 text-sm">{year}</p>
      <div className="mt-2 text-sm">
        <span className="text-red-500">{rating}/10</span>
      </div>
    </div>
  </div>
);

export default HomePage;