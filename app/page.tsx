import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="relative z-10">

     <div className="w-full h-[75vh] bg-[url('/images/batman.jpg')] bg-cover bg-center flex items-center justify-center">
  <div className="bg-black w-full h-full bg-opacity-60 flex items-center justify-center">
    <section className="text-center">
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
        Acompanhe os programas e filmes que você assiste.<br />
        Descubra o que está em alta e onde transmitir. Compartilhe
        comentários, recomendações e classificações.
      </p>
      <a
        href="#"
        className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
      >
        ASSISTA AGORA →
      </a>
    </section>
  </div>
</div>



      <section className="mb-12 mt-12">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Top Shows</h3>
          <a href="#" className="text-red-500 hover:text-red-400">
            SEE MORE →
          </a>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <ShowCard
            title="The Lord of the Rings: The Rings of Power"
            year="2022"
            watchers="15,923"
            plays="63,692"
          />
          <ShowCard
            title="Tulsa King"
            year="2022"
            watchers="12,733"
            plays="49,223"
          />
          <ShowCard
            title="Agatha All Along"
            year="2024"
            watchers="11,745"
            plays="35,626"
          />
          <ShowCard title="From" year="2022" watchers="14,485" plays="52,745" />
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Top Movies</h3>
          <a href="#" className="text-red-500 hover:text-red-400">
            SEE MORE →
          </a>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <MovieCard
            title="Wolfs"
            year="2024"
            watchers="11,037"
            plays="16,783"
          />
          <MovieCard
            title="Blink Twice"
            year="2024"
            watchers="6,904"
            plays="8,328"
          />
          <MovieCard
            title="It Ends With Us"
            year="2024"
            watchers="5,646"
            plays="7,529"
          />
          <MovieCard
            title="Deadpool & Wolverine"
            year="2024"
            watchers="4,383"
            plays="5,845"
          />
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Popular Lists</h3>
      </section>
    </main>
  );
};

interface StreamingServiceLogoProps {
  name: string;
  bgColor: string;
  cn: string;
  imageUrl?: string;
}

const StreamingServiceLogo = ({
  name,
  bgColor,
  imageUrl,
  cn,
}: StreamingServiceLogoProps) => (
  <div
    className={`flex items-center space-x-2 ${bgColor} h-12 px-4 rounded justify-center`}
  >
    {imageUrl && <img src={imageUrl} alt={name} className={cn} />}
    <span className="font-bold text-sm">{name}</span>
  </div>
);

interface ShowCardProps {
  title: string;
  year: string;
  watchers: string;
  plays: string;
}

const ShowCard = ({ title, year, watchers, plays }: ShowCardProps) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden">
    <img src="/images/psda.jpg" alt={title} className="w-full h-auto" />
    <div className="p-4">
      <h4 className="font-semibold truncate">{title}</h4>
      <p className="text-gray-400 text-sm">{year}</p>
      <div className="mt-2 text-sm">
        <span className="text-red-500">{watchers} watchers</span>
        <span className="text-gray-400 ml-2">{plays} plays</span>
      </div>
    </div>
  </div>
);

const MovieCard = ShowCard;

export default HomePage;
