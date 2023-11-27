import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import CV from './CV.jsx';
import Portfolio from "./Portfolio.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <header>
          <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/cv">CV</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
