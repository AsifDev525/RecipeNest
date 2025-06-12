import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Getout.css'
import { useNavigate } from 'react-router-dom';

const GetOut = () => {
      const navigate = useNavigate();
      const [userName, setUserName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);

      const handleInputChange = (e) =>{
        const{name, value} = e.target;
        switch (name) {
          case "userName":
            setUserName(value)        
            break;
          case "email":
            setEmail(value)        
            break;
          case "password":
            setPassword(value)  
            break;
      }
    };
     
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/'); 
  };
    const togglePassword = () =>{
    setShowPassword(!showPassword)
  }
  const goHome = (e) =>{
    e.preventDefault();
    navigate("/dashboard")
  }
  return (
 <div className="logout-container">
      <h1>Are you sure you want to logout of this application?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" value={userName} placeholder="Enter your name..." required />
        </div>
        <div className="form-group">
          <label htmlFor="email">User Email</label>
          <input type="email" value={email} id="email" placeholder="Enter your email..." required />
        </div>
        <div className="form-group">
          <label htmlFor="password">User Password</label>
            <input class="login_input non-show"  name='password' type={showPassword ? "text" : "password"} placeholder='Enter your password...' 
                value={password} onChange={handleInputChange} required/>
            <span class="show" type="button" onClick={togglePassword}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>        </div>
            <span className='click'>
              <button type="submit">Click Here</button>
              <button onClick={goHome}>
                Home
              </button>
            </span> 
      </form>
    </div>
  )
}

export default GetOut