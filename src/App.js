import React, { useEffect, useState } from "react";
//import "./App.css";
import { Link, Route, Switch, useParams, useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Display } from "./Display";
import { EditMovie } from "./EditMovie";
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import InfoIcon from "@mui/icons-material/Info";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness7Icon from "@mui/icons-material/Brightness7";
//updatestoredMovies(initialMovies);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  // const theme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });
  // const [movies, setMovies] = useState( JSON.parse(localStorage.getItem("movies")));
  // const [movies, setMovies] = useState([]);
  // const getMovies = () => {
  // fetch("https://6120e98724d11c001762ee25.mockapi.io/movies",{
  //   method: "GET",

  // })
  // .then((data) => data.json())
  // .then((mvs) => setMovies(mvs));
  // }

  // useEffect(getMovies, []);

  // const [movieName, setMovieName] = useState("");
  // const [moviePoster, setMoviePoster] = useState("");
  // const [movieYear, setMovieYear] = useState("");
  // const [movieDescrip, setmovieDescrip] = useState("");

  // const newMovie = {
  //   name: movieName,
  //   year: movieYear,
  //   description: movieDescrip,
  //   image: moviePoster,
  // };

  // const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ minHeight: "100vh" }}>
        <section>
          <AppBar className="appbar" position="static">
            <Toolbar className="main-menu" variant="dense">
              <Link to="/">
                <p className="menu-link">
                  <HomeIcon />
                  Home
                </p>
              </Link>

              <Link to="/movies">
                <p className="menu-link">
                  <LocalMoviesIcon />
                  Movies
                </p>
              </Link>

              <Link to="/movies/add">
                <p className="menu-link">
                  <ControlPointIcon />
                  Add Movie
                </p>
              </Link>

              <Link to="/about">
                <p className="menu-link">
                  <InfoIcon />
                  About Page
                </p>
              </Link>
              <button
                startIcon={darkMode ? <Brightness7Icon /> : <Brightness5Icon />}
                style={{ marginLeft: "auto" }}
                color="inherit"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light" : "Dark"}mode
              </button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/">
              Welcome to Movies Application
            </Route>
            <Route exact path="/movies/add">
              <AddMovie />
            </Route>
            <Route path="/movies/edit/:id">
              <EditMovie />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route exact path="/movies">
              {/* <MovieList movies={movies} setMovies={setMovies} /> */}
              <MovieList />
            </Route>
            <Route exact path="/about">
              All about movies
            </Route>
          </Switch>
        </section>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
