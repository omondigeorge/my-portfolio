import "./Contact.css";
import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4pmet73", "template_e6zo4rb", form.current, "zIO2fnoha_itVWjVr")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      e.target.reset()
    };

  return (
    <>
      <div className="container">
        <form ref={form} onSubmit={sendEmail} className="card">
          <h3>I'll be glad to hear from you!</h3>
          <label htmlFor="user_fname">First Name</label>
          <input
            type="text"
            id="fname"
            placeholder="Jane"
            name="firstname"
            required
            autoComplete="given-name"
          />

          <label htmlFor="user_lname">Last Name</label>
          <input
            type="text"
            id="lname"
            placeholder="Doe"
            name="lastname"
            required
            autoComplete="given-name"
          />

          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="janedoe@gmail.com"
            name="user_email"
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
};

export default Contact;
