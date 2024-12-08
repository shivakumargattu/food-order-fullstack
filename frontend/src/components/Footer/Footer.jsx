import React from 'react'
import "./Footer.css"
import {assets} from "../../assets/assets"
const Footer = () => {
  return (
    <div className='footer' id="footer" >
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti similique non ipsum quaerat asperiores animi velit adipisci ipsam eveniet cupiditate nam corporis obcaecati hic, libero totam repellat at nihil eos?</p>
          <div className="footer-socialIcons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Tomato</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
             +91 8989515636
            </li>
            <li>tamato@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>

<p className="copyright">Copyright 2024@Tamato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer