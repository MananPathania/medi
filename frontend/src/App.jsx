import React from 'react'
import { Routes, Route } from "react-router-dom";
import Hero from './Component/Landing/Hero/Hero';
import About from "./Component/Landing/About/About";
import Doctor from "./Component/Landing/Doctor/Doctor";


import Contactform from './Component/Landing/Contact/Contactform';
import AI from './Component/Landing/AI/AI';
import Portfolio from './Component/Landing/Portfolio/Portfolio';
import Appointment from './Component/Landing/Hero/Appointment/Appointment';






function App() {
  return (
  
    <Routes>
      

      <Route path = "/" element = {<Hero/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/Contact" element={<Contactform/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>

        <Route path="/AI" element={<AI/>}/>
       <Route path="/Appointment" element={<Appointment/>}/>
      
        
     

      

      

    
      
    
      
    </Routes>
  );
}

export default App;
