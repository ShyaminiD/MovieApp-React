export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));
export const updatestoredMovies = (updateMovies) =>
  localStorage.setItem("movies", JSON.stringify(updateMovies));


