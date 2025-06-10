import React, { useState } from 'react'
import "./UserLogin.css";
import { FaRegUser } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const UserLogin = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()


  const handleInputChange = (e) =>{
    const{name, value} = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value)        
        break;
      case "email":
        setEmail(value)        
        break;

      case "password":
        setPassword(value)  
        break;
    }
  };
 
  const togglePassword = () =>{
    setShowPassword(!showPassword)
  }
  const handleFormSubmit = (event) =>{
    event.preventDefault()
    if(password.length < 8){
      alert("Password must be at least 8 characters long!")
      return;
    }
    const formData = {
      firstName,
      email,
      password
    };
    console.log(formData)
    navigate('/dashboard')
  }

  return (
    <div class="login">
      <form class="login_form" onSubmit={handleFormSubmit}>
          <h1 class="login_heading">Login</h1>
          <div class="login_input-group" >
              <label class="login_label">Username</label><br/>
              <input class="login_input" type='text' name='firstName' placeholder='Enter your name...' 
              value={firstName} onChange={handleInputChange} required/><br/>
            </div>
          <div class="login_input-group" >
              <label class="login_label">Email</label><br/>
              <input class="login_input" type='email' name='email' placeholder='Enter your email...' 
              value={email} onChange={handleInputChange} required/><br/>
            </div>
            <div class="login_input-group">
                <label class="login_label">Userpassword</label><br/>
                <input class="login_input non-visible"  name='password' type={showPassword ? "text" : "password"} placeholder='Enter your password...' 
                value={password} onChange={handleInputChange} required/>
                <span class="visible" type="button" onClick={togglePassword}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                <br/>
              </div>
              <div class="login_options">
                <label class="remember_label"> 
                  <input type='checkbox' />Remember me
                  </label>
                <label class="login_forget"> <a href='/login'>Forget Password</a></label>
              </div>
              <div className="login-wrapper">
                <input type="submit" value="Login" />
              </div>
              <div class="login_signup">
                <span class="login_signup_text">Don't have an account? <a href="signup">Sign up</a></span>
              </div>
        </form>
    </div>
  )
}

export default UserLogin