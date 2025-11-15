import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
   <div className="navbar-container">
     <div className="navbar-links">
       <div className="logo">
         <h1>Portfolio</h1>
       </div>

      <h3>An Experienced Frontend Developer</h3>

       <div className="cv-btn">
         <button>Download CV</button>
       </div>
     </div>

     <div className="navbar-hero-section">
       <div className="developer-info">
         <h1 className='static-text'>I am a</h1>
         <div className="animated-words">
           <span>Web Developer</span>
           <span>Frontend Developer</span>
           <span>Self Thaught</span>
           <span>A Freelancer</span>
         </div>
       </div>
     </div>

     <div className="navbar-info">
       <p>Lorem ipsum dolor sit amet Similique deleniti reprehenderit quasi ea, rerum</p>
       <p>Lorem ipsum dolor sit Similique deleniti reprehenderit</p>
       <p>Similique deleniti reprehenderit quasi ea</p>
       <div className="info-btn">
         <button>My Projects</button>
       </div>
     </div>
   </div>
  )
}

export default Navbar;
