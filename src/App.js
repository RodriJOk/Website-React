import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
