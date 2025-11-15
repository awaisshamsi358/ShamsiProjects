import React from 'react';
import "./Contactme.css";
const Contactme = () => {
  return (
   <div className="contact-me-container">
       <div className="contact-text">
           <h1>Contact Me</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit odio ipsam sapiente consequatur minus quos rem alias praesentium deserunt similique sint, voluptas eos officiis nam. Enim impedit quaerat voluptatum.</p>
       </div>
       <div className="contact-form">
           <form action="">
               <h3>Contact</h3>
               <input type="text" placeholder='Email' />
               <textarea name="Description" id="" cols="30" rows="10" placeholder='Description'></textarea>
               <button type="submit">Submit</button>
           </form>
       </div>
   </div>
  )
}

export default Contactme;