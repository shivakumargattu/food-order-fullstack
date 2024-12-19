import React from 'react';
import { assets } from '../../assets/assets';
import "./Navbar.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  
  const [manu,setManu]=useState("")


  return (
    <div className='navbar'>
    <Link to="/"> <img src={assets.logo} alt="logo" className='logo'/></Link>
     <ul className='navbar-manu' >
        <Link to="/c" onClick={()=>setManu("home")} className={manu==="home"?"active":""} >Home </Link>
        <a href='#explore-menu'  onClick={()=>setManu("manu")} className={manu==="manu"?"active":""} >Manu</a>
        <a href='#app-download' onClick={()=>setManu("mobile-app")} className={manu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setManu("contact-us")} className={manu==="contact-us"?"active":""} > contact us</a>
     </ul>
     <div className='navbar-right'>
          <img src={assets.search_icon} alt='seach ioc'/>
          <div className='navbar-search-icon'>
          <Link to="/cart">  <img src={assets.basket_icon} alt=''/></Link>
            <div className='dot'></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>sign in</button>
     </div>


    </div>
  )
}

export default Navbar