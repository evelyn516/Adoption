import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SeeAllDogs from './pages/SeeAllDogs'
import SeeAllCats from './pages/SeeAllCats'
import Quiz from './pages/Quiz';
import './App.css';
import Nav from './components/NavBar/NavBar';
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeAuth from "./pages/HomeAuth";
import ShelterProfile from './pages/ShelterProfile';
import Modal from './modal/HomeAuth';

import MatchResults from './pages/MatchResults';
import Footer from "./components/Footer"

function App() {

  const api = 'http://127.0.0.1:8000/';

  return (

   <>
      {/* <Nav />  */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/login" element={<Login api={api} />} />
          <Route path="/register" element={<Register api={api} />} />
          <Route path="/homeauth" element={<HomeAuth api={api} />} />
          <Route path="/profile" element={<ShelterProfile api={api} />} />
          {/* <Route path="/modal" element={<Modal/>} />   */}
          <Route path='/dogs' element={<SeeAllDogs api={api} /> } />
          <Route path='/cats' element={<SeeAllCats api={api} />} />
          <Route path='/quiz' element={<Quiz api={api} />} />
          <Route path='/match' element={<MatchResults api={api}/>}/>          
          <Route path='/footer' element={<Footer />} />
        </Routes>
   
   
   </>
  )
}

export default App;
