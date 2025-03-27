// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // นำเข้า App.js
import "./index.css"; // ใช้ไฟล์ CSS หากมี

// เรนเดอร์แอปลงใน DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
