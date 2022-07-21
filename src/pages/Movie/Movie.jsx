import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const Movie = () => {
  // Pegando o id do filme
  const { id } = useParams();

  //State para o filme selecionado
  const [movie, setMovie] = useState({});

  //State loading
  const [loading, setLoading] = useState(true);

  // Fazer uma requisição no filme solicitado
  useEffect(() => {
    async function loadMovieDetails() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "f1912d75c32c260586cc3b438a5a1183",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Erro ao carregar os detalhes do filme");
        });
    }

    loadMovieDetails();

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <div className="movieDetails">
      <div className="bgMovie">
        <img
          className="imgBg"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=""
        />

        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Movie;
