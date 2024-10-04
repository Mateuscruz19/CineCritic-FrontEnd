"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Importando o Link para criar navegações
import { ChevronLeft, ChevronRight, Play, Plus } from 'lucide-react';

const FilmePage = () => {
  const [popularMovies, setPopularMovies] = useState<Filme[]>([]);
  const [current, setCurrent] = useState(1);
  const [movie, setMovie] = useState<Filme | null>(null);  // Filme atual selecionado

  interface Filme {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
  }

  useEffect(() => {
    const fetchPopularMovies = async (): Promise<void> => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer {SUA_API_KEY}',
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
        setPopularMovies(data.results as Filme[]);
        setMovie(data.results[0]); // Seta o primeiro filme para a visualização
      } catch (error) {
        console.error("Erro na busca dos filmes populares:", error);
      }
    };

    fetchPopularMovies();
  }, [current]);

  // Função para gerar um slug baseado no título do filme
  const generateSlug = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, ''); // Remove espaços e caracteres especiais
  };

  if (!movie) return <div>Carregando...</div>;

  return (
    <div className="relative text-white bg-gray-900">
      {/* Banner do Filme */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        <div className="container mx-auto h-full flex flex-col justify-end pb-10">
          <div className="flex items-center space-x-4">
            {/* Pôster do Filme */}
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
              className="rounded-lg shadow-lg"
            />
            {/* Detalhes do Filme */}
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <p className="text-gray-300 text-lg">{movie.overview}</p>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-lg font-bold">{movie.vote_average}</span>
                <span className="text-gray-400">({movie.vote_count} votos)</span>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Assistir Agora</span>
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Adicionar à Lista</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Filmes Populares */}
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Filmes Populares</h2>
        <div className="grid grid-cols-4 gap-4">
          {popularMovies.map((filme) => (
            <div key={filme.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <Image
                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                alt={filme.title}
                width={200}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-lg font-bold mt-2">{filme.title}</h3>
              <p className="text-gray-400">{filme.release_date}</p>
              {/* Link para a página dinâmica do filme */}
              <Link href={`/filmes/${generateSlug(filme.title)}`}>
                <a className="text-blue-400 hover:underline mt-2 block">Ver detalhes</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmePage;
