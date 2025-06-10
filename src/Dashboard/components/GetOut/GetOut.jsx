import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Getout.css'
import { useNavigate } from 'react-router-dom';

const GetOut = () => {
      const navigate = useNavigate();
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);


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
     
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have been logged out.');
    navigate('/'); 
  };
    const togglePassword = () =>{
    setShowPassword(!showPassword)
  }
  return (
 <div className="logout-container">
      <h1>Are you sure you want to logout of this application?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" placeholder="Enter your name..." required />
        </div>
        <div className="form-group">
          <label htmlFor="email">User Email</label>
          <input type="email" id="email" placeholder="Enter your email..." required />
        </div>
        <div className="form-group">
          <label htmlFor="password">User Password</label>
            <input class="login_input non-visible"  name='password' type={showPassword ? "text" : "password"} placeholder='Enter your password...' 
                value={password} onChange={handleInputChange} required/>
            <span class="visible" type="button" onClick={togglePassword}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>        </div>
            <span className='click'>
              <button type="submit">Click Here</button>
            </span>
      </form>
    </div>
  )
}

export default GetOut