import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div>
        <footer>
        <div className='basics'>
          
            
            
           
       <p className='para'>

        <h2> Medipulse</h2>
         MediPulse is a web-based doctor   <br/> appointment website that helps patients<br/> book 
       appointments online.</p>
            <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
        
       
      </div>
            
                   
                
           <div className=' links '>
            <h2>
              Quick Links 
            </h2>
            <a href = " /"  > Home</a>
            <a href='About'> About</a>
           <a href=' Doctor'> Doctor</a>
           <a href='Contact'> Contact</a>
             
           </div>
              <div className='support'>
                <h2> Support</h2>
               <p>   FAQ </p>

               <p>  Help Center  </p>

                <p>   Privacy Policy   </p>

                <p> Terms & Conditions   </p>

                 </div>
           
               
            <div className='contact'>
                <h2> Contact Us </h2>
                <p> 123 Medical Street, City, Country </p>
                <p> Phone: +123 456 7890 </p>
                <p> Email: info@medipulse.com </p>
            </div>
            
           

        
           
        </footer>
         <div className='copyright'>
             <hr/> 
            <p> &copy; 2024 MediPulse. All rights reserved. </p>
            </div>
        
    </div>
  )
}

export default Footer