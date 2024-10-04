"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Importando Link para navegações dinâmicas
import { ChevronLeft, ChevronRight, Star, Play, Plus, Search } from 'lucide-react';

const Dashboard = () => {
  const [popularMovies, setPopularMovies] = useState<Filme[]>([]);
  const [current, setCurrent] = useState(1);
  const [bannerIndex, setBannerIndex] = useState(0);

  // Interface para o tipo Filme
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

  // Função para buscar filmes populares
  useEffect(() => {
    const fetchPopularMovies = async (): Promise<void> => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer {SUA_API_KEY}',  // Substitua pela sua API key
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
      } catch (error) {
        console.error("Erro na busca dos filmes populares:", error);
      }
    };

    fetchPopularMovies();
  }, [current]);

  // Efeito para alternar os filmes no banner automaticamente
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % popularMovies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [popularMovies]);

  // Função para gerar o slug a partir do título
  const generateSlug = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  };

  return (
    <main className="z-10 mx-auto">
      {/* Banner grande com filmes passando */}
      <section className="relative h-[80vh]">
        {popularMovies.length > 0 && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 mt-16"></div>
            <Image
              src={`https://image.tmdb.org/t/p/original${popularMovies[bannerIndex].backdrop_path}`}
              alt={popularMovies[bannerIndex].title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 max-w-2xl">
              <h1 className="text-4xl font-bold mb-2">{popularMovies[bannerIndex].title}</h1>
              <p className="text-lg mb-4">{popularMovies[bannerIndex].overview}</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
                Assistir Trailer
              </button>
            </div>
          </>
        )}
      </section>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Seção de Filmes Populares */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Filmes Populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {popularMovies.slice(0, 10).map((movie) => (
              <MovieCard key={movie.id} movie={movie} generateSlug={generateSlug} />
            ))}
          </div>
        </section>

        {/* Seção de Atividades Recentes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Atividades Recentes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ActivityCard
              user="João"
              action="assistiu"
              title="Deadpool & Wolverine"
              date="Há 2 dias"
            />
            <ActivityCard
              user="Maria"
              action="avaliou"
              title="It Ends With Us"
              date="Há 3 dias"
              rating={4}
            />
            <ActivityCard
              user="Carlos"
              action="adicionou"
              title="The Rings of Power"
              date="Há 5 dias"
            />
          </div>
        </section>
      </div>
    </main>
  );
};


// Componente para o card de filmes
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

// Componente para o card de filmes
const MovieCard: React.FC<{ movie: Movie; generateSlug: (title: string) => string }> = ({ movie, generateSlug }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <Link href={`/dashboard/filme/${generateSlug(movie.title)}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          className="w-full h-auto"
        />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{movie.title}</h3>
        <p className="text-gray-400 text-sm mb-2">{new Date(movie.release_date).getFullYear()}</p>
        <div className="flex items-center">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
  

// Componente para o card de atividades
interface ActivityCardProps {
  user: string;
  action: string;
  title: string;
  date: string;
  rating?: number;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ user, action, title, date, rating }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow">
    <h4 className="font-semibold">{user} {action} <span className="text-red-500">{title}</span></h4>
    <p className="text-gray-400 text-sm">{date}</p>
    {rating && (
      <div className="flex items-center mt-2">
        <Star className="text-yellow-400 mr-1" size={16} />
        <span>{rating}/5</span>
      </div>
    )}
  </div>
);

export default Dashboard;
