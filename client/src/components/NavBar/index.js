import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Link>Shelter Login</Link>
        <Link>Shelter Register</Link>
      </nav>
    </>
  );
}

export default NavBar;
