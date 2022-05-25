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

function App() {

  return (

   <>
      {/* <Nav />  */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homeauth" element={<HomeAuth />} />
          <Route path="/profile" element={<ShelterProfile />} />
          <Route path="/modal" element={<Modal/>} />  
          <Route path='/dogs' element={<SeeAllDogs/> } />
          <Route path='/cats' element={<SeeAllCats/>} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/match' element={<MatchResults/>}/>
        </Routes>
   
   
   </>
  )
}

export default App;
