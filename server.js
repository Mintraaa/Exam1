require("dotenv").config(); // โหลดค่าจากไฟล์ .env

const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db"); // เชื่อมต่อไฟล์ db.js
const app = express();
const port = process.env.PORT || 5000;

// เชื่อมต่อ MongoDB
connectDB();

// ตัวอย่าง API สำหรับ Collection 'fights'
app.get("/fights", async (req, res) => {
  try {
    // สมมุติว่าเรามี Collection ชื่อ 'fights'
    const Fight = mongoose.model(
      "Fight",
      new mongoose.Schema({ name: String, date: Date, location: String })
    );
    const fights = await Fight.find(); // ดึงข้อมูลทั้งหมดจาก Collection 'fights'
    res.json(fights); // ส่งข้อมูลกลับในรูปแบบ JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching fights" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
