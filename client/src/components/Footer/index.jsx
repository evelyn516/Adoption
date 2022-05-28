import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <>
      <nav className="footer">
        <Link>Shelter Login</Link>
        <Link>Shelter Register</Link>
      </nav>
    </>
  );
}

export default Footer;
