import React from 'react';
import { assets } from '../../assets/assets';
import "./Navbar.css"
import { useState } from 'react';

const Navbar = () => {
  
  const [manu,setManu]=useState("")


  return (
    <div className='navbar'>
     <img src={assets.logo} alt="logo" className='logo'/>
     <ul className='navbar-manu' >
        <li onClick={()=>setManu("home")} className={manu==="home"?"active":""} >Home </li>
        <li onClick={()=>setManu("manu")} className={manu==="manu"?"active":""} >Manu</li>
        <li onClick={()=>setManu("mobile-app")} className={manu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setManu("contact-us")} className={manu==="contact-us"?"active":""} > contact us</li>
     </ul>
     <div className='navbar-right'>
          <img src={assets.search_icon} alt='seach ioc'/>
          <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt=''/>
            <div className='dot'></div>
          </div>
          <button>sign in</button>
     </div>


    </div>
  )
}

export default Navbar