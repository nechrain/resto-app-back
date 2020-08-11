import React from 'react';
import Logo from "./logo.png";
import './navbar.css';
import {Link} from 'react-router-dom'

function NavbarClient() {
    
      return (
        <div className="navbar">
         
          <div>
            <img className="logos" src={Logo} alt="logo" />
          </div>
  <router>
  <ul>
    <li><Link  to="/">Client</Link></li>
    <li><Link  to="panier">Shopping bag</Link></li>
  </ul>
  </router>
          <div className="info">
       
              <h1>korean grill</h1>
              <h2>Hello restaurant owner </h2>
            
            
          </div>
        
        </div>
      );
    
  }
  export default NavbarClient;