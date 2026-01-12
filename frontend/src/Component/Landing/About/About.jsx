import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      {/* ===== MISSION SECTION ===== */}
      <div className='mission'>
        <img src='./about.png' alt='About MediPulse' className='mission-img' />

        <div className="about-text">
          <h1>About Us</h1>
          <p>
            MediPulse is a leading healthcare platform dedicated to connecting patients
            with expert doctors for seamless consultations. Our mission is to provide accessible 
            and reliable medical advice, ensuring that individuals receive the care they need, 
            when they need it.
            <br /><br />
            With a network of trusted healthcare professionals, MediPulse offers a user-friendly 
            experience for booking appointments and accessing medical expertise from the comfort of home.
            MediPulse is committed to enhancing healthcare accessibility and improving patient outcomes.
            We focus on trust, convenience, and care — so you can prioritize your health without stress.
            <br /><br />
            Experienced and compassionate lady doctor, dedicated to providing quality healthcare with care and trust.
            Known for a friendly approach, accurate diagnosis, and patient-first treatment.
            <br /><br />
            <b>MediPulse - Your Health, Our Priority.</b>
          </p>

          <button className='learn'>Learn More</button>
        </div>
      </div>

      {/* ===== WORK SECTION ===== */}
      <div className='work'>
        <h1>How MediPulse Works</h1>

        <div className='form'>
          <div className='step1'>
            <img src='./sign.png' alt='Sign Up' />
            <h3>Step 1: Sign Up</h3>
            <p>
              Sign up to get started with seamless healthcare access. Create your profile, 
              manage appointments, and connect with verified doctors anytime, anywhere.
            </p>
          </div>

          <div className='step2'>
            <img src='./doctor.png' alt='Find a Doctor' />
            <h3>Step 2: Find a Doctor</h3>
            <p>
              Find experienced and verified doctors based on specialty, location, availability, 
              and patient reviews. Get the care you need with confidence.
            </p>
          </div>

          <div className='step3'>
            <img src='./book.png' alt='Book Appointment' />
            <h3>Step 3: Book Appointment</h3>
            <p>
              Book appointments instantly with your preferred doctor. Choose a convenient date 
              and time, and receive instant confirmation—no waiting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
