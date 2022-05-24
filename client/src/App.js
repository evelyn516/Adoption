import { Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar/NavBar';
import Home from './pages/Home';
import SeeAll from './pages/SeeAll'
import Quiz from './pages/Quiz';
import './App.css';

import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeAuth from "./pages/HomeAuth";
import Profile from './pages/Profile';
import Modal from './modal/HomeAuth';
import { DogData } from './exampleData/dogs'
import { CatData } from './exampleData/cats'

function App() {

  return (

   <>
      {/* <Nav /> */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homeauth" element={<HomeAuth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modal" element={<Modal/>} />  
          <Route path='/dogs' element={<SeeAll animals={ DogData } type='dogs' /> } />
          <Route path='/cats' element={<SeeAll animals={CatData} type='cats'/>} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
   
   
   </>
  )
}

export default App;
