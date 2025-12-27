import { useBoundStore } from "../../../stores/useBoundStore";

function MovieItem({ movie }) {
  console.log(movie);
  const { activeMovieData, fetchMovieById, clearActiveMovieData } =
    useBoundStore();

  function handleMovieClicked(mov) {
    activeMovieData && mov.imdbID === activeMovieData.imdbID
      ? clearActiveMovieData()
      : fetchMovieById(mov.imdbID);
  }

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => handleMovieClicked(movie)}
    >
      <li>
        <img alt="poster" src={movie.Poster} />
        <h3>{movie.Title}</h3>
        <p>📅 {movie.Year}</p>
      </li>
    </div>
  );
}

export default MovieItem;
