import React, { useState } from 'react';
import Header from '../Header';
import { useParams } from 'react-router-dom';
const ContactUs = () => {

    const [Contactus, setContactus] = useState('')
    const params = useParams() ;

      return (
    
    <section className="contact-section">
 
      <div className="contact-container">
        <h1>hey 🙌 , {params.displayName} </h1>
        <h2>Contact Us</h2>
        <p>Have any questions or feedback? We'd love to hear from you!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* CSS inside the component */}
        <style>{`
          .contact-section {
            padding: 4rem 1rem;
            background-color: #121212;
            color: #fff;
            display: flex;
            justify-content: center;
          }

          .contact-container {
            max-width: 600px;
            width: 100%;
            text-align: center;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
          }

          .contact-form input,
          .contact-form textarea {
            padding: 0.8rem;
            border-radius: 8px;
            border: none;
            background-color: #1e1e1e;
            color: #fff;
            font-size: 1rem;
          }

          .contact-form input::placeholder,
          .contact-form textarea::placeholder {
            color: #aaa;
          }

          .contact-form button {
            padding: 0.8rem;
            background-color: #1db954;
            color: #fff;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .contact-form button:hover {
            background-color: #1ed760;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ContactUs;
