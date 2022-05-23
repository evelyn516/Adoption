import { Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar/NavBar';
import Home from './pages/Home';
import SeeAll from './pages/SeeAll'
import Quiz from './pages/Quiz';
import './App.css';
import { DogData } from './exampleData/dogs'
import { CatData } from './exampleData/cats'

function App() {

  return (
   <>
      {/* <Nav /> */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/dogs' element={<SeeAll animals={ DogData } type='dogs' /> } />
          <Route path='/cats' element={<SeeAll animals={CatData} type='cats'/>} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
   
   
   </>
  )
}

export default App;
