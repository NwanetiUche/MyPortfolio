import React from "react";
import "./Message.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_69c959b", "template_h8k6aci", form.current, {
        publicKey: "09iAARdxItD-CDIZx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_ption-icon" />
            <h4>Email</h4>
            <h5>nwanetifelix@gmail.com</h5>
            <a href="mailto:nwanetifelix@gamil.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_ption-icon" />

            <h4>Whatsapp</h4>
            <h5>+2348130889711</h5>
            <a href="https://wa.me/+2348130889711" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiLinkedinBoxLine className="contact_ption-icon" />
            <h4>Linkedin</h4>
            <h5>Nwaneti Uche Felix</h5>
            <a
              href="https://www.linkedin.com/in/uche-nwaneti-80559428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your FullName" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btnPrimary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Message;
