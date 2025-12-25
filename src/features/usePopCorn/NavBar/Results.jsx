import { useBoundStore } from "../../../stores/useBoundStore";

function Results() {
  const numResults = useBoundStore((state) => state.moviesListData?.length);
  return (
    <div>
      <h2>Found {numResults} top results</h2>
    </div>
  );
}

export default Results;
