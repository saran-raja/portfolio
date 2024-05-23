import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-head">Contact Me</h1>
      <form name="contact" method="POST" action="/contact">
        {/* sample */}
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <section className="name-email-input">
          <p>
            <label>Name</label>
            <input type="text" name="name"  required />
          </p>
          <p>
            <label>Email </label>

            <input type="email" name="email" required />
          </p>
        </section>

        <p className="text-area">
          <label className="msg-input">
            Message</label>
            <textarea
              className="text-msg"
              name="message"
              // placeholder="Message"
              required
            ></textarea>
         
        </p>
        <p className="submit-btn">
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default Contact;
