"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Star, Clock, Calendar } from "lucide-react";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
}

const MovieDetailPage = () => {
  const { id } = useParams(); // Pega o ID diretamente dos parâmetros da rota
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        try {
            const options = {
                method: "GET",
                headers: {
                  accept: "application/json",
                  Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWJmYTZkMjAyZjU4NDBmYWI1MDk3ZTg2NWIyMjkxNSIsInN1YiI6IjY0OGM1Zjc1NTU5ZDIyMDExYzRiNTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nGuXFcVtAx3oG_lGMd9pTlRyF3_ks9Qadn7CDE5MZA",
                },
              };

          const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
          options
        );
        const data = await response.json();
          setMovie(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        }
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Imagem de fundo */}
      <div className="absolute top-0 left-0 w-full h-96 z-0">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 pt-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex">
            {/* Poster */}
            <div className="md:flex-shrink-0">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Informações do filme */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-400 mr-1" size={20} />
                <span className="text-white">
                  {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                </span>
              </div>

              <div className="flex items-center mt-2 text-gray-300">
                <Calendar className="mr-2" size={16} />
                <span>{new Date(movie.release_date).getFullYear()}</span>
                <Clock className="ml-4 mr-2" size={16} />
                <span>{movie.runtime} min</span>
              </div>
              <p className="mt-4 text-gray-300">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
