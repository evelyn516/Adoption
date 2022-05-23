import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeAuth from "./pages/HomeAuth";
import Profile from './pages/Profile';
import Modal from './modal/HomeAuth';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homeauth" element={<HomeAuth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modal" element={<Modal/>} />
      </Routes>
    </>
  );
}

export default App;
