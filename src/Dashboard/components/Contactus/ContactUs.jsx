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
            <div class="form">
                <form class="contact-form" action="">
                        <div class="form-group"> 
                            <label class="name-label" htmlFor="name">Name:</label>
                            <input class="name-input" placeholder='Enter your name...' type="text" name="" id="name" />
                        </div>
                        <div class="form-group">
                            <label class="email-label" htmlFor="email">Email:</label>
                            <input class="email-input" placeholder='Enter youe email...' type="email" name="" id="email" />
                        </div>
                        <div class="form-group">
                            <label class="message-label" htmlFor="message">Message:</label>
                            <textarea class="message-input" placeholder='Enter your feedback...' name="" id="message"></textarea>
                        </div>
                        <div class="form-group">
                            <button type='submit' class="submit-button">Submit</button>
                        </div>
                    </form>
            </div>
        </div>
    </>
  )
}

export default ContactUS