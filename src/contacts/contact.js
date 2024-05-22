import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-head">Contact</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/contact"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Your Name: <input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" required></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default Contact;
