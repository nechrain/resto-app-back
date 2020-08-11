import React from "react";
import "./App.css";
import Home from "./components/home/home";
import Admin from "./components/admin/admin";
import Client from "./components/client/client";
import HomeClient from "./components/client/homeClient";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/client" component={HomeClient} />
        <Route path="/admin" component={Admin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
