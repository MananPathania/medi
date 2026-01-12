import React from 'react'
import { Routes, Route } from "react-router-dom";
import Hero from './Component/Landing/Hero/Hero';
import About from "./Component/Landing/About/About";
import Doctor from "./Component/Landing/Doctor/Doctor";


import Contactform from './Component/Landing/Contact/Contactform';
import AI from './Component/Landing/AI/AI';
import Portfolio from './Component/Landing/Portfolio/Portfolio';







function App() {
  return (
  
    <Routes>
      

      <Route path = "/" element = {<Hero/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/Contact" element={<Contactform/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>

        <Route path="/AI" element={<AI/>}/>

        
     

      

      

    
      
    
      
    </Routes>
  );
}

export default App;
