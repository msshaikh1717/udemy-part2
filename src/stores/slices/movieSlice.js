const KEY = "e81b248b";
const BASE_URL = `http://www.omdbapi.com/?apikey=${KEY}`;

export const createMovieSlice = (set, get) => ({
  query: "",
  isLoading: { search: false, details: false },
  error: null,
  moviesListData: null, //left side movies search results
  activeMovieData: null, //clicked movie from movieListData
  abortController: null,

  setQuery: (q) => {
    set({ query: q, error: null }, false, "setQuery"); // "setQuery here is named which is seen in redux devtools"
  },
  fetchMovie: async (query, signal) => {
    set({ isLoading: { search: true } }, false, "fetchMovie/loading");

    try {
      const res = await fetch(`${BASE_URL}&s=${query}`, {
        signal,
      });

      //To debug error state
      // const res = await fetch(`https://httpbin.org/delay/5`);

      const data = await res.json();

      if (get().query === query) {
        //double check to avoid error in case user search and navigate while fetching
        data.Response === "True"
          ? set(
              {
                isLoading: { search: false },
                moviesListData: data.Search,
              },
              false,
              "fetchMovie/success"
            )
          : set(
              {
                isLoading: { search: false },
                moviesListData: [],
                error: data.error || data.Error,
              },
              false,
              "fetchMovie/error"
            );
      }
    } catch (error) {
      // console.log(error);
      if (error.name !== "AbortError")
        set(
          {
            isLoading: { search: false },
            error: `failed tp fetch movies: ${error.message}`,
          },
          false,
          "fetchMovie/failure"
        );
    }
  },
  fetchMovieById: async (id) => {
    set({ isLoading: { details: true } }, false, "fetchMovieById/loading");
    const res = await fetch(`${BASE_URL}&i=${id}`);
    const data = await res.json();

    set(
      (state) => ({
        ...state,
        activeMovieData: data,
        isLoading: { details: false },
      }),
      false,
      "fetchMovieById/success"
    );
  },
  clearActiveMovieData: () =>
    set({ activeMovieData: null }, false, "clearActiveMovieData"),
  resetFetchMovie: () =>
    set(
      {
        isLoading: { search: false, details: false },
        error: null,
        moviesListData: null,
        activeMovieData: null,
      },
      false,
      "resetFetchMovie"
    ),
});
