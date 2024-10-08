# CineCritic

CineCritic é um site de review de filmes, onde você pode explorar informações detalhadas sobre filmes populares, conferir suas classificações, assistir trailers e acompanhar as últimas atividades da comunidade de usuários.

## Stack Tecnológica

- **Next.js 14**: Framework utilizado para construção do frontend com suporte a rotas dinâmicas e renderização do lado do servidor (SSR).
- **Tailwind CSS**: Utilizado para estilização responsiva e componentes prontos com classes utilitárias.
- **API do TheMovieDB (TMDB)**: Para obter detalhes, pôsteres e classificações dos filmes.

## Funcionalidades

- **Home Page com Filmes Populares**: Mostra uma lista de filmes populares obtidos da API do TMDB. Possui um banner rotativo com detalhes dos filmes em destaque.
- **Página de Detalhes do Filme**: Cada filme tem uma página dedicada que exibe o pôster, sinopse, avaliações, data de lançamento e tempo de duração.
- **Atividades Recentes**: Mostra as últimas atividades de usuários, como assistir, avaliar ou adicionar filmes à lista.
- **Rotas Dinâmicas**: Implementação de rotas dinâmicas no formato `/dashboard/filme/[id]/[slug]`, utilizando o ID do filme como slug na URL.

## Pré-requisitos

- Node.js v18+ instalado
- Uma chave de API válida do TheMovieDB

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/cinecritic.git

Entre na pasta do projeto:

bash
Copy code
cd cinecritic
Instale as dependências:

bash
Copy code
npm install
Crie um arquivo .env.local na raiz do projeto e adicione sua chave de API do TheMovieDB:

env
Copy code
NEXT_PUBLIC_TMDB_API_KEY=YOUR_API_KEY
Uso
Execute o servidor de desenvolvimento:

bash
Copy code
npm run dev
Acesse o site em:

arduino
Copy code
http://localhost:3000
Navegue pela página inicial para ver filmes populares e clique em qualquer filme para acessar a página de detalhes.

Estrutura do Projeto
/app/dashboard/filme/[id]/page.tsx: Página dinâmica que carrega os detalhes do filme com base no ID passado pela URL.
/components: Componentes reutilizáveis como header, footer e cards de filme.
/public: Imagens e fontes utilizadas no site.
/styles: Arquivos CSS globais e configurações do Tailwind CSS.
next.config.js: Configurações do Next.js.
Contribuição
Faça um fork do projeto
Crie uma branch com a nova funcionalidade (git checkout -b feature/nova-funcionalidade)
Faça commit das suas alterações (git commit -m 'Adiciona nova funcionalidade')
Faça push para a branch (git push origin feature/nova-funcionalidade)
Abra um pull request
Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.