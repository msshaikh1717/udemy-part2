import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createMovieSlice } from "./slices/movieSlice";
import { createWatchedMovieSlice } from "./slices/watchedSlice";

export const useBoundStore = create(
  devtools(
    (...a) => ({
      ...createMovieSlice(...a),
      ...createWatchedMovieSlice(...a),
    }),
    { name: "MovieStore" }
  )
);
