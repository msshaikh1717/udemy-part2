import MoviesList from "./features/usePopCorn/MoviesList/MoviesList";
import NavBar from "./features/usePopCorn/NavBar/NavBar";
import WatchList from "./features/usePopCorn/WatchList/WatchList";
import "./starter-usePopCorn/index.css";

function AppUsePopCorn() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <MoviesList />
        <WatchList />
      </div>
    </div>
  );
}

export default AppUsePopCorn;
