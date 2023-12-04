import "./Contact.css";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4pmet73",
        "template_e6zo4rb",
        form.current,
        "zIO2fnoha_itVWjVr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          setResponseMessage("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          setResponseMessage("Failed to send message.");
        }
      );
    e.target.reset();

    setTimeout(() => {
      setStatus("");
      setResponseMessage("");
    }, 3000);
  };

  return (
    <>
      <div className="container">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="card"
          id="contact-card"
        >
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
          <div className="response">
            {status && (
              <div
                className={`status-message ${
                  status === "success" ? "success" : "error"
                }`}
              >
                {responseMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
