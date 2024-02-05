import React from 'react'

import Navbar from '../../Navbar/Navbar'

import './LandingSection.css'

const LandingSection = ({scrollToElement}) => {
  return (
   <section className="landingSection" id="home">
   <Navbar scrollToElement={scrollToElement} />


   <div className="landingContent">
     <h1>
       Joshua Hankins <br />{" "}
       <span className="coloredText">Frontend Developer</span>
     </h1>
     <button onClick={() => scrollToElement("skills")}>See More</button>
   </div>
 </section>
  )
}

export default LandingSection