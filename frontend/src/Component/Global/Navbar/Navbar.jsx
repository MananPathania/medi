import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'




function Navbar() {
  return (
           <div>
          <nav className='Navbar'>

              <div className='logo'>
              
                <img src= 'logo.png' height={"80%"} width={"20%"} ></img>
                 
                


              </div>
              <div className='menu'>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/doctor">Doctor</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to = "Portfolio">Portfolio</Link>
                  <Link to = "/AI">AI</Link>
                 

                  

              </div>



              <hr/>
          
          </nav>
              </div>


  )
}

export default Navbar