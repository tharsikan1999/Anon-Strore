// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import Contact from './Components/Pages/Contact';
import Careers from './Components/Pages/Careers';
import Footer from './Components/Footer';
import Technologies from './Components/Pages/Technologies';
import Privacy from './Components/Pages/Privacy';
import Terms from './Components/Pages/Terms';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route  exact path="/about" element={<About/>} />
        <Route  exact path="/service" element={<Service/>} />
        <Route  exact path="/contact" element={<Contact/>} />
        <Route  exact path="/careers" element={<Careers/>} />
        <Route  exact path="/technologies" element={<Technologies/>} />
        <Route  exact path="/privacy" element={<Privacy/>} />
        <Route  exact path="/terms" element={<Terms/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
