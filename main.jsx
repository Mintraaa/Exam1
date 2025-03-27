import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // เชื่อมต่อกับไฟล์ App.jsx
import "./index.css"; // รวมไฟล์ CSS ที่มีการใช้ Tailwind

// ใช้ React 18 การสร้าง root element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
