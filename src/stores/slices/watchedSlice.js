export const createWatchedMovieSlice = (set) => ({
  watchedMovies: JSON.parse(localStorage.getItem("watched"))
    ? JSON.parse(localStorage.getItem("watched"))
    : [],

  addtoWatch: (newMovie) => {
    set(
      (state) => {
        const updatedMovies = [...state.watchedMovies, newMovie];

        localStorage.setItem("watched", JSON.stringify(updatedMovies));

        return {
          ...state,
          watchedMovies: [...state.watchedMovies, newMovie],
        };
      },
      false,
      "addToWatch"
    );
  },
  removeFromWatch: (id) => {
    set(
      (state) => {
        localStorage.setItem(
          "watched",
          JSON.stringify(state.watchedMovies.filter((mov) => mov.imdbID !== id))
        );

        return {
          ...state,
          watchedMovies: state.watchedMovies.filter((mov) => mov.imdbID !== id),
        };
      },
      false,
      "removeFromWatch"
    );
  },
});
