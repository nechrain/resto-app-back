import React from 'react';
import Logo from "./logo.png";
import './navbar.css';

function Navbar() {
    
      return (
        <div className="navbar">
         
          <div>
            <img className="logos" src={Logo} alt="logo" />
          </div>
  
          <div className="info">
       
              <h1>korean grill</h1>
              <h2>Hello restaurant owner </h2>
            
            
          </div>
        
        </div>
      );
    
  }
  export default Navbar;