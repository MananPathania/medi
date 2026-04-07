import React, { useState } from 'react'
import './Hero.css'
import Appointment from './Appointment/Appointment';

function Hero() {

  const [open, setOpen] = useState(false)   

  return (
    <div className='hero'>  

      <div className='hero-img'></div>

      <div className='hero-content'>
        <h2>
          Get Medipulse Expert Doctor 
          <span><br/> Consultation</span>
        </h2>

        <div className='main'>
          MediPulse connects patients with the right care at <br/>
          the right time & patients can easily find trusted <br/>
          doctors, check real-time availability, and book <br/>
          appointments anytime, anywhere.

          <div className='btn'> 
            <button onClick={() => setOpen(true)}>
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>

      
      {open && <Appointment close={() => setOpen(false)} />}

    </div>
  )
}

export default Hero