import React, { useState } from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleInput = (e) =>{
    const {name, value} = e.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
        case "userEmail":
          setUserEmail(value);
          break;
          case "userPassword":
            setUserPassword(value);
            break;
            case "confirmPassword":
              setConfirmPassword(value);   
        break;
        default:
        break;
    }
  };

  const togglePassword = () =>{
    setShowPassword(!showPassword)
  }
  

  const formSubmit = (event) =>{
    event.preventDefault();
    if(userPassword.length < 8 || confirmPassword.length < 8){
    alert("Password must be at least 8 characters long!");
    return;
    }
    if(userPassword !== confirmPassword){
      alert("Password do not match!")
      return;
    }
    const formData = {
      userName,
      userEmail,
      userPassword,
      confirmPassword
    }
    console.log(formData)
    navigate("/dashboard")
  }


  return (
    <div class="signup">
      <form class="signup_form" onSubmit={formSubmit}>
          <h1 class="signup_heading">Signup</h1>
          <div class="signup_input-group" >
              <label class="signup_label">Name:</label><br/>
              <input class="signup_input" type='text' name='userName' value={userName} onChange={handleInput} 
              placeholder='Enter your name...'  required/><br/>
            </div>
            <div class="signup_input-group" >
              <label class="signup_label">Email:</label><br/>
              <input class="signup_input" type='email' name='userEmail' value={userEmail} onChange={handleInput} 
               placeholder='Enter your email...'  required/><br/>
            </div>
            <div class="signup_input-group">
                <label class="signup_label">Password:</label><br/>
                <input class="signup_input" type={showPassword ? "text" : "password"} name='userPassword' value={userPassword} onChange={handleInput} 
                 placeholder='Enter your password...' required/>
              </div>
              <div class="signup_input-group">
                <label class="signup_label">Confirm Password:</label><br/>
                <input class="signup_input" type={showPassword ? "text" : "password"}  name='confirmPassword' value={confirmPassword} onChange={handleInput} 
                placeholder='Enter your confirm password...' required/>
              </div>
              <div class="signup_input-group">
                <div class="toggle" type="button" onClick={togglePassword}>{showPassword ? "Show Password" : "Hidden Password"}</div><br/>
              </div>
                
              <div class="signup_button">
                <button type='submit'>Signup</button>
              </div>
              <div class="signup_login">
                <span class="signup_login_text">Already have an account? <a href="login">Login</a></span>
              </div>
        </form>
    </div>
  )
}

export default Signup
