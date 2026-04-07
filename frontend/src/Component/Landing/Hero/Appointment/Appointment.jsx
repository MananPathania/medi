import React, { useState } from 'react'
import './Appointment.css'

function Appointment({ close }) {

  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
    setSuccess(true)

   
    setTimeout(() => {
      close()
    }, 2000)
  }

  return (
    <div className="overlay">

      <div className="box">

        {!success ? (
          <>
            <h2>Book Appointment</h2>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <input type="date" />
            <input type="time" />

            <button onClick={handleSubmit}>
              Confirm Booking
            </button>

            </>
        ) : (
          <div className="success">
            <h2> Appointment Booked!</h2>
            <p>Your booking is confirmed.</p>
          </div>
        )}

      </div>

    </div>
  )
}

export default Appointment