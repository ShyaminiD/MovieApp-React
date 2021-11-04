import React from "react";
import Button from "@mui/material/Button";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//import { getFromStorage } from "./updatestoredMovies";

export function MovieDetails() {
  const { id } = useParams();

  //const movie = getFromStorage("movies")[id];
  const [movie, setMovie] = useState({});
  const getMovie = () => {
    fetch("https://6120e98724d11c001762ee25.mockapi.io/movies/" + id)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(getMovie, []);
  const history = useHistory();
  console.log(movie);
  return (
    <div>
      <div>
        <h1>Movies details {movie.name}</h1>
        <p>{movie.description}</p>
        <Button
          onClick={() => history.goBack()}
          variant="contained"
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </div>
      <div>
        <iframe
          width="50%"
          height="200"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
