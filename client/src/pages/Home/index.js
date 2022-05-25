
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import all_cats from './all_cats.png'
import all_dogs from './all_dogs.png'





function Home() {

return (
<>


<h1 className="home-title"> Adopter </h1>


<div className="btn-container">

     
        <Link  to='/cats'>
          <li className="list-btn"> <img  src={all_cats} alt="cat" className="cat-img" /> </li>
        </Link>
                    
        <Link  to='/dogs'>
          <li className="list-btn"> <img  src={all_dogs} alt="dogs" className="dog-img" /></li>
        </Link>

        

      

 </div>
  <div className="footer">
  <Link className="links-to"  to='/quiz'>
          <li className="foot-item first"> Adoption Quiz</li>
        </Link>  


  <Link className="links-to" to='/quiz'>
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
