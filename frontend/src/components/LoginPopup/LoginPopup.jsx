import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

     const [currentSate,setCurrentState]=useState("Login")

  return (
    <div className='login-popup'>
    
    <form className='login-popup-container'>
    <div className="login-popup-title">
        <h2>{currentSate}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
    </div>
    <div className="login-popup-inputs">
    {currentSate ==="Login" ? <></> : <input type="text" placeholder='Your Name' required />}
      <input type='email' placeholder='Your email' required />
      <input type='password' placeholder='Password' required />
   </div>
     <button>{currentSate==="Sign Up"? "Create account" : "Login"}</button>
    <div className="login-popup-condition">
        <input type='checkbox' required/>
        <p>By continuing, i agree to the terms of use & privacy policy</p>
    </div>
    {currentSate==="Login"? <p>Create a new account ? <span onClick={()=>setCurrentState("Sign Up")}>Clicke here</span></p>: <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
    
    </form>
    </div>
  )
}

export default LoginPopup