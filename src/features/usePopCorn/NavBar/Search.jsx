import { useEffect, useRef } from "react";
import { useKey } from "../../../hooks/useKey";
import { useBoundStore } from "../../../stores/useBoundStore";

function Search() {
  const { query, setQuery, fetchMovie, resetFetchMovie } = useBoundStore();

  //controller must persist across renders without triggering re-renders
  const controllerRef = useRef(null);

  const inputEl = useRef(null);

  //Enter key focus
  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  });

  useEffect(() => {
    if (query?.length > 3) {
      controllerRef.current?.abort(); // cancel previous request
      controllerRef.current = new AbortController(); // fresh controller
      fetchMovie(query, controllerRef.current.signal);
    } else resetFetchMovie();

    return () => controllerRef.current?.abort(); // clearnup on unmount
  }, [fetchMovie, query, resetFetchMovie]);

  return (
    <input
      className="search"
      type="text"
      placeholder="search by movie name"
      value={query}
      ref={inputEl}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
