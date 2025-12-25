import { useBoundStore } from "../../../stores/useBoundStore";

function WatchedSummary() {
  // const { watchedMovies } = useWatchedMovies() || {};
  const { watchedMovies } = useBoundStore();
  // console.log(watchedMovies);
  const numOfMovies = watchedMovies?.length;
  const avgImdbRating =
    watchedMovies?.reduce((acc, movie) => acc + Number(movie.imdbRating), 0) /
      watchedMovies?.length || 0;
  const avgUserRating =
    watchedMovies?.reduce((acc, movie) => acc + movie.userRating, 0) /
      watchedMovies?.length || 0;
  const avgRuntime =
    watchedMovies?.reduce((acc, movie) => acc + parseInt(movie.Runtime), 0) /
      watchedMovies?.length || 0;

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>#️⃣ {numOfMovies} movies</p>
        <p>⭐ {avgImdbRating.toFixed(1)}</p>
        <p>⭐ {avgUserRating.toFixed(1)}</p>
        <p>⌛ {avgRuntime.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default WatchedSummary;
