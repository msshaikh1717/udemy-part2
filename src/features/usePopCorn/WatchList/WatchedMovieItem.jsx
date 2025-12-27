import { useBoundStore } from "../../../stores/useBoundStore";

function WatchedMovieItem({ movie }) {
  // console.log(movie);
  const { Title, imdbRating, userRating, Runtime, imdbID, Poster } = movie;
  const { removeFromWatch } = useBoundStore();

  return (
    <div className="list">
      <li>
        <img alt="poster" src={Poster} />
        <h3>{Title}</h3>
        <div>
          <p>⭐ {Number(imdbRating).toFixed(1)}</p>
          <p>⭐ {Number(userRating).toFixed(1)}</p>
          <p>⌛ {parseInt(Runtime).toFixed(1)}</p>
        </div>
        <button className="btn-delete" onClick={() => removeFromWatch(imdbID)}>
          &times;
        </button>
      </li>
    </div>
  );
}

export default WatchedMovieItem;
