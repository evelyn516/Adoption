import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <>
      <nav className="nav-bar" role="nav">
        <Link role="loginLink" to="#" >Shelter Login</Link>
        <Link role="registerLink" to="#">Shelter Register</Link>
      </nav>
    </>
  );
}

export default NavBar;
