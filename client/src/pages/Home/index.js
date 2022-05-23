
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from '../../layout/Header';

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
                        <li className="list-btn">Compatibility Quiz</li>
                    </Link>
      
                </ul>

                </div>
    </>

    
   

  );
}

<<<<<<< HEAD


=======
>>>>>>> 6d65867f78fa1a38a97405f591dea849c09d756a
export default Home;
