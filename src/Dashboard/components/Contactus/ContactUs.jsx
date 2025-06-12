import React from 'react'
import "./ContactUs.css"
import LiveChat from './LiveChat'
import Inform from './Inform'

const ContactUS = () => {
  return (
    <>
        <h1 class="contact-heading">Contact Us</h1>
        <div class="main-contact">
            <div class="information-chat">
                <Inform/>
                {/* <LiveChat/> */} 
            </div>
            <div className="contact-container">
            <form className="contact-form-box" action="">
                <div className="contact-form-group"> 
                <label className="contact-name-label" htmlFor="name">Name:</label>
                <input className="contact-name-input" placeholder="Enter your name..." type="text" id="name" />
                </div>

                <div className="contact-form-group">
                <label className="contact-email-label" htmlFor="email">Email:</label>
                <input className="contact-email-input" placeholder="Enter your email..." type="email" id="email" />
                </div>

                <div className="contact-form-group">
                <label className="contact-message-label" htmlFor="message">Message:</label>
                <textarea className="contact-message-input" placeholder="Enter your feedback..." id="message"></textarea>
                </div>

                <div className="contact-form-group">
                <button type="submit" className="contact-submit-btn">Submit</button>
                </div>
            </form>
            </div>

        </div>
    </>
  )
}

export default ContactUS