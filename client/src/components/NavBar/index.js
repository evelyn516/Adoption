import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Link role="loginLink">Shelter Login</Link>
        <Link role="registerLink">Shelter Register</Link>
      </nav>
    </>
  );
}

export default NavBar;
