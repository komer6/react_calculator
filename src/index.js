// index.js
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./index.css"; // Import any global CSS if needed
import React from "react";
import { Routes, Route } from "react-router-dom";
import CAlcu from "./CAlcu";
import Buttonn from "./Buttonn";
import Cars from "./Cars";
import { Cars2 } from "./Cars2";
import ColorButton from "./Clolorbutton";
import Axiuosstuff from "./Axiuosstuff";
import Groc from "./Groc";
import Navbar from "./Navbar"; // Import the Navbar component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> 
     <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Groc" element={<Groc  />} />
        <Route path="/axios" element={<Axiuosstuff />} />
        <Route path="/button" element={<Buttonn />} />
        <Route path="/cars" element={<Cars2 />} />
      </Routes>
  </BrowserRouter>
);
