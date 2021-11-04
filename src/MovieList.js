import "./App.css";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";
import { Display } from "./Display";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";

export function MovieList() {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch("https://6120e98724d11c001762ee25.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };

  useEffect(getMovies, []);

  const history = useHistory();
  const deleteMovie = (id) => {
    console.log(id);
    fetch("https://6120e98724d11c001762ee25.mockapi.io/movies/" + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => getMovies());
  };

  return (
    <Card>
      <div className="displayApp">
        {movies.map((n, index) => {
          return (
            <Display
              deleteMovieButton={
                <IconButton
                  aria-label="delete"
                  size="small"
                  color="error"
                  onClick={() => {
                    //   //const copyMovies = [...movies];
                    //   console.log("Deleting", index);
                    //   const removeIdx = index;
                    //   setMovies(movies.filter((mv, idx) => idx !== removeIdx));
                    //   updatestoredMovies(
                    //     movies.filter((mv, idx) => idx !== removeIdx)
                    //   );
                    deleteMovie(n.id);
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              }
              editMovieButton={
                <IconButton
                  aria-label="edit button"
                  size="small"
                  color="primary"
                  onClick={() => {
                    //history.push("/movies/edit/" + index);
                    history.push("/movies/edit/" + n.id);

                    console.log(index);
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              }
              key={n.id}
              image={n.image}
              name={n.name}
              year={n.year}
              description={n.description}
              id={n.id}
            />
          );
        })}
      </div>
    </Card>
  );
}
