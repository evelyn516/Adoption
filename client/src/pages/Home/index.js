
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from '../../layout/Header';

function Home() {

  return (
    <>
    <Header/>
     <h1 className="home-title" role="home-title">Welcome to our Home Page</h1>
<div className="btn-container">
     <ul  >
                    <Link  to='/dogs'>
                        <li role="dogs" className="list-btn">See all dogs</li>
                    </Link>
                    <Link  to='/cats'>
                        <li role="cats" className="list-btn">See all cats</li>
                    </Link>
                    <Link  to='/quiz'>
                        <li role="quiz" className="list-btn">Compatibility Quiz</li>
                    </Link>
      
                </ul>

                </div>

    </>
  );
}

export default Home;
