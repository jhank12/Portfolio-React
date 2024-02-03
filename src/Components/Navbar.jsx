import React from 'react'

import pdf from "../Resume/Joshua Hankins Resume.pdf"

const Navbar = ({scrollToElement}) => {

  return (
   <header className='navbar'>
   <h3>Title</h3>
   <nav>
     <ul>
       <li onClick={() => scrollToElement("skills")}>Skills</li>
       <li onClick={() => scrollToElement("projects")}>Projects</li>
       <li><a href={pdf} rel="noreferrer" target="_blank">Resume</a></li>
     </ul>
   </nav>
 </header>
  )
}

export default Navbar