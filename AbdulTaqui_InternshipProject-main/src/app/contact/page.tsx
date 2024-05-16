// Contact.jsx

import React from 'react';
import styles from './Contact.module.css'; // Importing the CSS module

const Contact = () => {
  return (
    <div className={styles['page-container']}>
      <div className={styles['top-container']}>
        <h1>Feel free to Contact</h1>
        <p>Enter the following details to reach us</p>
        <form>
          <div className={styles['form-row']}>
            <div className={styles['form-label']}>
              <label htmlFor="firstName">First Name:</label>
              <label htmlFor="lastName">Last Name:</label>
              <label htmlFor="email">Your Email:</label>
            </div>
            <div className={styles['form-input']}>
              <input type="text" id="firstName" />
              <input type="text" id="lastName" />
              <input type="email" id="email" />
            </div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-label']}>
              <label htmlFor="message">Message:</label>
            </div>
            <div className={styles['form-input']}>
              <textarea className={styles['textarea-field']} id="message" ></textarea>
            </div>
          </div>
          <button className={styles['send-button']}>Send Message</button>
        </form>
      </div>
      <div className={styles['bottom-container']}>
        <div className={styles['bottom-left-container']}>
        <div className={styles['logo']}>
          <img src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qb9v0oxs3sekdbhat1is" style={{ width: '80px', height: 'auto' }}/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className={styles['social-icons']}>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <div className={styles['quick-links']}>
        <div className={styles['quick-link']}>
          <h2>Quick Links</h2>
          <a href="#">How it Works</a>
          <a href="#">Why Choose Us</a>
        </div>
        <div className={styles['quick-link']}>
          <h2>About</h2>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className={styles['quick-link']}>
          <h2>Contact</h2>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
        </div> 
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
