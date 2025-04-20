import React from 'react'
import "./UserLogin.css";
import { FaRegUser } from "react-icons/fa6";

const UserLogin = () => {
  return (
    <div class="login">
      <form class="login_form">
          <h1 class="login_heading">Login</h1>
          <div class="login_input-group" >
              <label class="login_label">Username</label><br/>
              <input class="login_input" type='text' placeholder='Enter your name...'  required/><br/>
            </div>
            <div class="login_input-group">
                <label class="login_label">Userpassword</label><br/>
                <input class="login_input" type='password' placeholder='Enter your password...' required/>
                <br/>
              </div>
              <div class="login_options">
                <label class="remember_label"> 
                  <input type='checkbox' />Remember me
                  </label>
                <label class="login_forget"> <a href='Forget Password'>Forget Password</a></label>
              </div>
              <div class="login_button">
                <button type='submit'>Login</button>
              </div>
              <div class="login_signup">
                <span class="login_signup_text">Don't have an account? <a href="#">Sign up</a></span>
              </div>
        </form>
    </div>
  )
}

export default UserLogin