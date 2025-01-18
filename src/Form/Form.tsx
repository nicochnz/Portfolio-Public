import { ValidationError, useForm } from "@formspree/react";
import React from "react";
import "./Form.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgvegeyb");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div id="form" className="section form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Contact me</h2>

        <div className="form-field">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name here"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@example.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-field">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </form>

      <a target="_blank" href="https://github.com/nicochnz" rel="noreferrer">
        <img className="icons" src="images/github.png" alt="Github" />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/nicolas-chiche-79903b2b0"
        rel="noreferrer"
      >
        <img className="icons" src="images/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  );
}
