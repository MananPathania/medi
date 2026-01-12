import React from "react";
import "./Doctor.css";

function Doctor() {
  const doctors = [
    {
      name: "Dr. Manan Pathania",
      specialty: "Cardiologist",
      experience: "10+ years experience",
      image: "./ai.png",
    },
    {
      name: "Dr. Vishal Sharma",
      specialty: "Neurologist",
      experience: "8+ years experience",
      image: "./cards2.png",
    },
    {
      name: "Dr. Rahul Sharma",
      specialty: "Orthopedic",
      experience: "12+ years experience",
      image: "./cards3.png",
    },
    {
      name: "Dr. Nisha Gupta",
      specialty: "Pediatrician",
      experience: "9+ years experience",
      image: "./card4.png",
    },
  ];

  return (
    <section className="doctor-section">
      <div className="text">
        <h1>Our Specialization</h1>
        <p>Meet our experienced and trusted healthcare professionals.</p>
      </div>

      <div className="Doctor">
        {doctors.map((doctor, index) => (
          <div className="doctor-card" >
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <h4>{doctor.specialty}</h4>
            <p>{doctor.experience}</p>
            <button>Book Appointment</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Doctor;
