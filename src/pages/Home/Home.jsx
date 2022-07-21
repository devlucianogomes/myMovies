import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  // Create state from movies
  const [movies, setMovies] = useState([]);
  // State Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "f1912d75c32c260586cc3b438a5a1183",
          language: "pt-BR",
          page: 1,
        },
      });

      // console.log(response.data.results.slice(0, 10));
      setMovies(response.data.results.slice(0, 12));
      // Depois de setar o state, seta o loading para desativado
      setLoading(false);
    }

    loadMovies();
  }, []);

  // O if é feito antes da montagem do componente
  if (loading) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="listMovies">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie title"
              />
              <div className="movieInfo">
                <p>{movie.title}</p> <span>Ação</span>
              </div>

              <div className="movieInfo2">
                <p>⭐{movie.vote_average}</p>
                <Link className="btnWatchTrailer" to={`/movie/${movie.id}`}>
                  Assista o Trailer
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
