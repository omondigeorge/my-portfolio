import "./Contact.css";
import React from "react";

function Contact() {
  return (
    <>
      <div className="container">
        <form className="card">
          <h3>I'll be glad to hear from you!</h3>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" placeholder="Jane" name="firstname" required autoComplete="given-name"/>

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" placeholder="Doe" name="lastname" required autoComplete="given-name"/>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="janedoe@gmail.com"
            name="email"
            required
            autoComplete="off"
          />

          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            placeholder="Message"
            name="message"
            required
            autoComplete="your-message"
          />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
