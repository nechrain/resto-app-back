import React from 'react';
import Logo from "./logo.png";
import './footer.css';


function Footer() {
    
      return (
        <div className="footer">
         
          <div>
            <img className="logos" src={Logo} alt="logo" />
          </div>
 
         
       
              <h1>korean grill</h1>
              <h2>Hello restaurant owner </h2>
          
        
        </div>
      );
    
  }
  export default Footer;