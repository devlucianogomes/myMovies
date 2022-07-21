import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        myMovies
      </Link>
      <Link className="favorites" to="/favorites">
        Favorites
      </Link>
    </header>
  );
};

export default Header;
