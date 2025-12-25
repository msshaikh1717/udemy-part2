import { useBoundStore } from "../../../stores/useBoundStore";

function MovieItem({ movie }) {
  const { activeMovieData, fetchMovieById, clearActiveMovieData } =
    useBoundStore();

  function handleMovieClicked(mov) {
    // console.log(mov);
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
        <img alt="poster" />
        <h3>{movie.Title}</h3>
        <p>📅 {2010}</p>
      </li>
    </div>
  );
}

export default MovieItem;
