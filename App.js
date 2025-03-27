// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // นำเข้า Navbar
import Signin from "./components/Signin"; // นำเข้า Signin
import Login from "./components/Login"; // นำเข้า Login
import Home from "./components/Home"; // นำเข้า Home

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* หน้าแรก */}
        <Route path="/" element={<Home />} />
        {/* หน้า Sign In */}
        <Route path="/signin" element={<Signin />} />
        {/* หน้า Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
