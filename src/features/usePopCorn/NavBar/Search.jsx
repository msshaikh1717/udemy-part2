import { useEffect, useRef } from "react";
import { useBoundStore } from "../../../stores/useBoundStore";
import { useKey } from "../../../hooks/useKey";

function Search() {
  const { query, setQuery, fetchMovie, resetFetchMovie } = useBoundStore();

  const controller = new AbortController();
  const inputEl = useRef(null);

  //Enter key focus
  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  });

  /*
  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, [setQuery]);
*/
  // Its preffered to use eventListener than useEffect
  /*
  useEffect(() => {
    const controller = new AbortController();

    query?.length > 3
      ? fetchMovie(query, controller.signal)
      : resetFetchMovie();

    return () => controller.abort();
  }, [query, fetchMovie, resetFetchMovie]);
*/
  return (
    <input
      className="search"
      type="text"
      placeholder="search by movie name"
      value={query}
      ref={inputEl}
      onChange={(e) => {
        setQuery(e.target.value);
        e.target.value?.length > 3
          ? fetchMovie(e.target.value, controller.signal)
          : resetFetchMovie();
      }}
    />
  );
}

export default Search;
