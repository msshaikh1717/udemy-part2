import { useEffect, useRef, useState } from "react";
import WatchedSummary from "./WatchedSummary";
import StarRating from "../../../starter-usePopCorn/StarRating";
import WatchedMovieItem from "./WatchedMovieItem";
import { useBoundStore } from "../../../stores/useBoundStore";
import { useKey } from "../../../hooks/useKey";

function WatchList() {
  const { watchedMovies, addtoWatch } = useBoundStore();
  const [isOpen, setIsOpen] = useState(true);
  const { activeMovieData, clearActiveMovieData, isLoading } = useBoundStore();
  const [userRating, setUserRating] = useState(0);

  const isWatched = watchedMovies?.find(
    (item) => item?.imdbID === activeMovieData?.imdbID
  );
  const isWatchedUserRating = watchedMovies?.find(
    (item) => item?.imdbID === activeMovieData?.imdbID
  )?.userRating;

  const countRef = useRef(0);
  const inputEl = useRef(null);

  const {
    Title,
    Released,
    Runtime,
    Genre,
    imdbRating,
    Plot,
    Actors,
    Director,
  } = activeMovieData || {};
  // console.log(activeMovieData);

  function handleAddMovie() {
    const newData = {
      ...activeMovieData,
      userRating,
      countRatingDecisions: countRef.current,
    };
    // console.log(newData);
    addtoWatch(newData);
    clearActiveMovieData();
    setUserRating(0);
    countRef.current = 0;
  }

  function handleBack() {
    clearActiveMovieData();
    setUserRating(0);
    // console.log("handleback");
  }

  // Title sync
  useEffect(() => {
    if (!Title) return;
    document.title = `Movie | ${Title}`;

    return () => {
      document.title = "udemy-part2";
    };
  }, [Title]);

  // countRatingDecisions
  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  //Esc key fn

  useKey("Escape", () => {
    clearActiveMovieData();
    setUserRating(0);
  });

  /*
  useEffect(() => {
    const callback = (e) => {
      if (e.code === "Escape") {
        clearActiveMovieData();
        setUserRating(0);
      }
    };
    
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [clearActiveMovieData]);
  */
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>

      {/* Movie Clicked Details */}
      {isLoading?.details ? (
        <p className="loader">Details Loading...</p>
      ) : activeMovieData && isOpen && !isLoading.details ? (
        <div className="details">
          <header>
            <button className="btn-back" onClick={handleBack}>
              &larr;
            </button>
            <img alt="movie image" />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={20}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddMovie}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>You have already rated {isWatchedUserRating} stars</p>
              )}
            </div>
            <p>
              <em>{Plot}</em>
            </p>
            <p>Starring {Actors}</p>
            <p>Directed by {Director}</p>
          </section>
        </div>
      ) : !activeMovieData && isOpen ? (
        //  Watched Movies List
        <>
          <WatchedSummary />
          <ul>
            {watchedMovies?.map((movie) => (
              <WatchedMovieItem movie={movie} key={movie.imdbID} />
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default WatchList;
