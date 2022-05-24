
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from '../../layout/Header';

function Home() {

  return (
    <>
    <Header/>
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
                        <li className="list-btn">Compatibility Quiz</li>
                    </Link>
      
                </ul>

                </div>

</>
  );
}

export default Home;
