
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import all_cats from './all_cats.png'
import all_dogs from './all_dogs.png'
import Header from '../../layout/Header'





function Home() {

return (
<>
<Header/>

<h1 className="home-title"> Welcome to our Home Page </h1>
<div className="btn-container">
     <ul className="homeBtns">
                    <Link  to='/dogs'>
                    <li className="list-btn"> <img  src={all_dogs} alt="dogs" className="dog-img" /> </li>
                    </Link>
                    <Link  to='/cats'>
                        <li className="list-btn"> <img  src={all_cats} alt="cat" className="cat-img" /> </li>
                    </Link>
                    <Link  to='/quiz'>
                        <li className="list-btn"> Compatability Quiz</li>
                    </Link>
      
                </ul>

                </div>
                <div className="footer">
  <Link className="links-to"  to='/quiz'>
          <li className="foot-item first"> Adoption Quiz</li>
        </Link>  


  <Link className="links-to" to='/register'>
          <li className="foot-item second"> Shelter Register</li>
  </Link>

  <Link className="links-to"  to='/login'>
          <li className="foot-item third"> Shelter login </li>
  </Link>
                    
 
  </div>

</>
  );

}

export default Home;
