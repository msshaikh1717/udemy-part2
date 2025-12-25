import { useState } from "react";
import MovieItem from "./MovieItem";
import ErrorMessage from "../ErrorMessage";
import { useBoundStore } from "../../../stores/useBoundStore";

function MoviesList() {
  const { isLoading, moviesListData, error } = useBoundStore();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && (
        <ul className="list list-movies">
          {error ? (
            <ErrorMessage message={error.message} />
          ) : isLoading?.search ? (
            <p className="loader">Searching...</p>
          ) : (
            moviesListData?.map((movie) => (
              <MovieItem movie={movie} key={movie.imdbID} />
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default MoviesList;
