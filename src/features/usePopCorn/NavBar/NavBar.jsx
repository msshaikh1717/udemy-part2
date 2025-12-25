import Logo from "./Logo";
import Results from "./Results";
import Search from "./Search";

function NavBar() {
  return (
    <div className="nav-bar">
      <Logo />
      <Search />
      <Results />
    </div>
  );
}

export default NavBar;
