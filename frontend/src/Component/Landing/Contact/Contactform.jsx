import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    alert("Form submitted");
  }

  return (
    <section className="sign">
      <form onSubmit={handleSubmit}>
        <h2>Contact Form</h2>

        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your Full Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter your Message"
            onChange={handleChange}
            value={formData.message}
          />
        </div>

        <button type="submit">Send me</button>
      </form>
    </section>
  );
}

export default Contact;
