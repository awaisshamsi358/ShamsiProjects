import React from 'react'
import "./InfoAboutme.css";
const Aboutme = () => {
  return (
    <div className="aboutme-container">
        <div className="personnal-info">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat accusamus necessitatibus et nam nemo dolorum veritatis illo quam, porro ad at a delectus molestias nulla eos officiis. Est, voluptas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, libero odit? Harum molestiae adipisci exercitationem tempora quam necessitatibus odit eos placeat nisi officiis consequatur iure eius enim assumenda, illum facere.</p>
            <button>About Me</button>
        </div>
        <div className="my-qualifications">
            <h2>My Qualifications</h2>
            <div className="qual-table">
                <table> 
                   <thead>
                       <tr>
                           <th>Degree</th>
                           <th>From</th>
                           <th>Date</th>
                       </tr>
                   </thead>
                    <tbody>
                        <tr>
                            <td>BCS</td>
                            <td>Jahan University</td>
                            <td>2023-Present</td>
                        </tr>
                        <tr>
                            <td>Shcool</td>
                            <td>Jahan Private High School </td>
                            <td>2022</td>
                        </tr>
                        <tr>
                            <td>Diploma In English </td>
                            <td>Muslim English Language Institute</td>
                            <td>2022</td>
                        </tr>
                        <tr>
                            <td>Diploma In IT</td>
                            <td>M-Tech Institute Of IT</td>
                            <td>2022</td>
                        </tr>
                        <tr>
                            <td>Certificate in MS-Office</td>
                            <td>Oxford Institute of IT</td>
                            <td>2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="my-experience">
            <h2>My Work Experience</h2>
        <div className="my-experience-grid">
            <div className="experience">
                <h3>Freenlancer</h3>
                <p>Self Employed</p>
                <p>From 1-Dec-2024 - Present</p>
            </div>
            <div className="experience">
                <h3>Jnior Web Developer</h3>
                <p>Shamsi Group of Companies </p>
                <p>From 23-Apr-2024 - 1-Oct-2024</p>
            </div>
            <div className="experience">
                <h3>Frontend Instructor</h3>
                <p>Erudite Institute of IT  </p>
                <p>From 17-Jan-2021 - 17-Feb-2022</p>
            </div>
            <div className="experience">
                <h3>Junior Web Instructor</h3>
                <p>Erudite Institute of IT</p>
                <p>From 17-Jan-2021 - 17-Feb-2023</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Aboutme;