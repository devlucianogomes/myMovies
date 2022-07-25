import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="topBar">
      <header>
        <Link className="logo" to="/">
          myMovies
        </Link>
        <Link className="logo" to="/">
          Filmes
        </Link>
        <Link className="logo" to="/">
          Series
        </Link>
      </header>
      <div className="favoriteBar">
        <Link className="favorites" to="/favorites">
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default Header;
