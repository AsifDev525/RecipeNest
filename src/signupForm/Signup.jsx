import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div class="signup">
      <form class="signup_form">
          <h1 class="signup_heading">Signup</h1>
          <div class="signup_input-group" >
              <label class="signup_label">Name:</label><br/>
              <input class="signup_input" type='text' placeholder='Enter your name...'  required/><br/>
            </div>
            <div class="signup_input-group" >
              <label class="signup_label">Email:</label><br/>
              <input class="signup_input" type='email' placeholder='Enter your email...'  required/><br/>
            </div>
            <div class="signup_input-group">
                <label class="signup_label">Password:</label><br/>
                <input class="signup_input" type='password' placeholder='Enter your password...' required/>
                <br/>
              </div>
              <div class="signup_input-group">
                <label class="signup_label">Confirm Password:</label><br/>
                <input class="signup_input" type='password' placeholder='Enter your confirm password...' required/>
                <br/>
              </div>
              <div class="signup_button">
                <button type='submit'>Signup</button>
              </div>
              <div class="signup_login">
                <span class="signup_login_text">Already have an account? <a href="#">Login</a></span>
              </div>
        </form>
    </div>
  )
}

export default Signup
