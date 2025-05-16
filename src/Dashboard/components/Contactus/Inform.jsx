import React from 'react'
import "./Inform.css"

const Inform = () => {
  return (
    <>
       <div className="info-container">
            <h3 className="inform-heading">Hey, we are here to help!</h3>
            <p className="inform-para">
                We know how busy life can get, and we want to make sure you have all the help you need from us.
            </p>    
            <h4 className="inform-subHeading">Our Team is Ready to Assist You!</h4>
            <ul className="inform-list">
                <li className="inform-item">💬 Drop us a message here, and we'll get back to you in no time!</li>
                <li className="inform-item">⏰ Need something urgent? Feel free to use our live chat for instant responses.</li>
                <li className="inform-item">📱 We’re just a click away if you need any tips or help with recipes!</li>
                <li className="inform-item">🎉 Let’s make cooking more fun and less stressful, together!</li>
            </ul>
            {/* <div className="professional">
                <button className="start-chat">Chat with Us!</button>
            </div> */}
        </div>

  </>
  )
}

export default Inform