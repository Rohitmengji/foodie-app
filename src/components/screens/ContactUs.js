import React, { useState } from 'react'
import Navbar from '../Navbar'
import './ContactForm.css'
import emailjs from "emailjs-com";


export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  

  const USER_ID = "zU2yU6lnrSs7d21dW";
  const SERVICE_ID = "service_ipzn1zb";
  const TEMPLATE_ID = "template_g65cfli";

  emailjs.init(USER_ID);
  
  function handleSubmit(event) {
    event.preventDefault();

    // Send the email using EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        name: name,
        email: email,
        message: message,
        date : new Date()
      })
      .then((result) => {
        console.log("Email sent successfully:", result.text);
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
      });

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  }


  const styles = {
    footer: {
      backgroundColor: "black",
      padding: "20px 0",
      marginTop : "100px"
    },
    title: {
      color: "#fff",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    text: {
      color: "#d5d5d4",
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: "10px",
    },
    list: {
      listStyle: "none",
      margin: 5,
      padding: 0,
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      borderBottom: "1px solid #666",
      transition: "color 0.2s ease-in-out, border-bottom 0.2s ease-in-out",
    },
    linkHover: {
      color: "#222",
      borderBottom: "1px solid #222",
    },
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label className="mt-5" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className='mb-5' type="submit">Submit</button>
      </form>

    <div>

      <footer style={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 style={styles.title}>Contact Us</h2>
              <p style={styles.text}>
                If you have any questions or feedback, please feel free to
                contact us using the information below:
              </p>
              <ul style={styles.list}>
                <li>
                  Email:{" "}
                  <a href="mailto:rohitmengjih@gmail.com" style={styles.link}>
                    rohitmengjih@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:123-456-7890" style={styles.link}>
                    636-616-14017
                  </a>
                </li>
                <li style={styles.link}>Address: Kalaburagi, Karnataka IN</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}