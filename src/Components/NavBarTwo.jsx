import React, { useState } from 'react';
import "../styles/NavBarTwo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Abhishek_Singh_Resume from "../assets/files/Abhishek_Singh_Resume.pdf";

const NavBarTwo = () => {
   
    const [toogleMenu, setToggleMenu] = useState("nav-link-conatiner ul");
    
    

  return (
    <div className='navbar'>
       
       <div id='name'>
         <a href="#home"><p>ABHISHEK <span>SINGH</span></p></a>
       </div>

         {/* id="nav-link-conatiner" */}
       {/* <div> <FontAwesomeIcon icon={ faBars }  id="toggle-icon" /> </div> */}
       <div id="nav-menu">
         <ul>
            <li> <a className='nav-link home' href='#home'>HOME</a> </li>
            <li> <a className='nav-link about' href='#about'>ABOUT</a>  </li>
            <li> <a className='nav-link skills' href='#skills'>SKILLS</a>  </li>
            <li><a className='nav-link projects' href='#projects'>PROJECTS</a>  </li>
            <li> <a className='nav-link contact' href='#contact'>CONTACTS</a> </li>  
            <li> <a className='nav-link resume' id='resume-link-1' href={Abhishek_Singh_Resume} target={'_blank'}  rel="noreferrer" download>RESUME</a> </li>
            <div> <FontAwesomeIcon icon={ faBars }  id="toggle-icon" /> </div>
         </ul>
       </div>

    </div>
  )
}

export  { NavBarTwo };
