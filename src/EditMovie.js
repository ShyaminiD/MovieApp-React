import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";
//import { updatestoredMovies, getFromStorage } from "./getFromStorage";

export function EditMovie() {
  const { id } = useParams();
  const history = useHistory();
  //const movie = getFromStorage("movies")[id];
  //console.log(movie);

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieDescrip, setmovieDescrip] = useState("");
  const [movieTrailer, setMovieTrailer] = useState("");
  //const [movies, setMovies] = useState({});
  const getMovie = () => {
    fetch("https://6120e98724d11c001762ee25.mockapi.io/movies/" + id)
      .then((data) => data.json())
      .then((mv) => {
        setMovieName(mv.name);
        setMoviePoster(mv.image);
        setmovieDescrip(mv.description);
        setMovieYear(mv.year);
        setMovieTrailer(mv.trailer);
      });
  };
  useEffect(getMovie, []);

  // const [movieName, setMovieName] = useState(movie.name);
  // const [moviePoster, setMoviePoster] = useState(movie.image);
  // const [movieYear, setMovieYear] = useState(movie.year);
  // const [movieDescrip, setmovieDescrip] = useState(movie.description);
  //const [movieTrailer, setMovieTrailer] = useState(movie.trailer);

  const updateMovie = (editedMovie) => {
    fetch("https://6120e98724d11c001762ee25.mockapi.io/movies/" + id, {
      method: "PUT",
      body: JSON.stringify(editedMovie),
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => history.push("/movies"));
  };

  const editMovie = () => {
    const editedMovie = {
      name: movieName,
      year: movieYear,
      description: movieDescrip,
      image: moviePoster,
      trailer: movieTrailer,
    };
    // let updatedMovies = [...movies];
    // updatedMovies[id] = editedMovie;
    // setMovies(updatedMovies);
    updateMovie(editedMovie);
    history.push("/movies");
  };
  return (
    <div className="newMovieInput">
      <TextField
        value={movieName}
        id="filled-basic"
        label="Enter Movie Name"
        variant="filled"
        className="nameInput"
        onChange={(event) => {
          console.log(event.target.value);
          setMovieName(event.target.value);
        }}
      />
      <TextField
        value={moviePoster}
        id="filled-basic"
        label="Add Movie url"
        variant="filled"
        className="imageInput"
        onChange={(event) => {
          console.log(event.target.value);
          setMoviePoster(event.target.value);
        }}
      />
      <TextField
        value={movieYear}
        id="filled-basic"
        label="Year of Release"
        variant="filled"
        className="yearInput"
        onChange={(event) => {
          console.log(event.target.value);
          setMovieYear(event.target.value);
        }}
      />
      <TextField
        value={movieDescrip}
        id="filled-basic"
        label="Add Description"
        variant="filled"
        className="descripInput"
        onChange={(event) => {
          console.log(event.target.value);
          setmovieDescrip(event.target.value);
        }}
      />
      <TextField
        value={movieTrailer}
        id="filled-basic"
        label="Youtube embed trailer"
        variant="filled"
        className="descripInput"
        onChange={(event) => {
          console.log(event.target.value);
          setMovieTrailer(event.target.value);
        }}
      />

      <Button variant="contained" onClick={editMovie}>
        Edit Movie
      </Button>
    </div>
  );
}
