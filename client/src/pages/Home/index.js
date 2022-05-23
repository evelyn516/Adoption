import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <>
     <h1 className="home-title" >Welcome to our Home Page</h1>
<div className="btn-container">
     <ul  >
                    <Link  to='/dogs'>
                        <li className="list-btn">See all dogs</li>
                    </Link>
                    <Link  to='/cats'>
                        <li className="list-btn">See all cats</li>
                    </Link>
                    <Link  to='/quiz'>
                        <li className="list-btn">Compatability Quiz</li>
                    </Link>
      
                </ul>

                </div>
    </>
  );
}

/* BUTTONS FOR navbar */

export default Home;
