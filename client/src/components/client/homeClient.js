

import React from "react";
import{BrowserRouter,Route}from 'react-router-dom';
import Navbar from "./navbar/navbar"
import Client from "./client"
import Total from "./total";
import Footer from "./footer/footer";



function HomeClient() {

    return (
      
        
      
        
    
        <BrowserRouter>
        <div className="app">
        <Navbar/>
        <Route  path="/client" component={Client} />
        <Route  path="/panier" component={Total} />
      <Footer/>
        </div>
        </BrowserRouter>
       
      
    )
  }
  
  export default HomeClient;