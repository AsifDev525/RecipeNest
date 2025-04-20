import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Sign up</h1>
        <form>
            <label>Enter your name</label> <br/>
            <input type='text' placeholder='Type your name..' required/><br/>
            <label>Enter your email</label> <br/>
            <input type='email' placeholder='Type your email..' required/><br/>
            <label>Enter your password</label><br/>
            <input type='password' placeholder='Type password here...' required/><br/>
            <label>Confirm password</label><br/>
            <input type='password' placeholder='Confirm your password...' required/><br/>
            <input type='submit'/>
            <label>Already account <a href="user login">Login</a></label>
        </form>
    </div>
  )
}

export default Signup
