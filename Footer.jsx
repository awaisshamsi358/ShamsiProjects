import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
      
    <div className="footer-container">
        <div className="name-info">
            <h1>Mohammad Awais Shamsi </h1>
            <p>A Professional Frontend Developer</p>
        </div>
        <div className="img">
            <img src="public/my.jpg" alt="" />
        </div>
        <div className="social-links">
            <p>I am Available 24/7</p>
            <div className="social-icons">
                <a href=""><i className='bx bxl-facebook'></i></a>
                <a href=""><i className='bx bxl-whatsapp'></i></a>
                <a href=""><i className='bx bxl-github'></i></a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer;