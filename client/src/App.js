import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import SeeAll from './pages/SeeAll';
import NavBar from './components/NavBar/index';
import './App.css';

function App() {
  return (
   <>
   {/* <NavBar /> */}
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/quiz" element={<Quiz />} />
<Route path="/seeall" element={<SeeAll />} />

</Routes>


</main>
   
   
   </>
  )
}

export default App;
