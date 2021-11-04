import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updatestoredMovies, getFromStorage } from "./getFromStorage";

export function AddMovie() {
  const history = useHistory();
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieDescrip, setmovieDescrip] = useState("");
  const [movieTrailer, setMovieTrailer] = useState("");

  const createMovie = (newMovie) => {
    //1.method -POST
    //2.Body -data and stringify
    //3.header -JSON
    fetch("https://6120e98724d11c001762ee25.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => history.push("/movies"));
  };

  const addMovie = () => {
    console.log("adding new movie");
    const newMovie = {
      name: movieName,
      year: movieYear,
      description: movieDescrip,
      image: moviePoster,
      trailer:movieTrailer
    };

    // setMovies([...movies, newMovie]);
    // updatestoredMovies([...movies, newMovie]);
    createMovie(newMovie);
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

      <Button variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
    </div>
  );
}
