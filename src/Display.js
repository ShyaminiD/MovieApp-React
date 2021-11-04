import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useHistory } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

import { Favorite } from "./Favorite";

export function Display({
  name,
  image,
  year,
  description,
  deleteMovieButton,
  editMovieButton,
  id,
}) {
  //const styles = { display: "block" };
  const [show, setShow] = useState(false);
  //conditionally styling
  const styles = { display: show ? "block" : "none" };
  const history = useHistory();

  return (
    <div className="movie-Box">
      <img height="120" width="90" src={image} alt="movieposter" />
      <Favorite />
      {deleteMovieButton}
      <p className="moviename">
        {name}
        <IconButton
          aria-label="Detailed info about movie"
          color="primary"
          onClick={() => history.push("/movies/" + id)}
        >
          <InfoIcon />
        </IconButton>
        {editMovieButton}
      </p>

      <p className="year">{year}</p>

      <IconButton
        aria-label="show descrition"
        color="primary"
        onClick={() => setShow(!show)}
      >
        {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>

      {/*conditional rendering*/}
      {show ? (
        <p className="description" style={styles}>
          {description}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
