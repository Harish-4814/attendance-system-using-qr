const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const QRCode = require("qrcode");
const os = require("os");

const Student = require("./models/Student");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// ================= IP =================
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (let name in interfaces) {
    for (let net of interfaces[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
}
const IP = getLocalIP();

// ================= DB =================
mongoose.connect("mongodb://127.0.0.1:27017/attendanceDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// ================= QR =================
let qrExpiryTime = null;
let markedIPs = {};

app.get("/generate-qr", async (req, res) => {
  const token = Date.now();
  qrExpiryTime = token + 60000;

  const url = `http://${IP}:${PORT}/scan.html?token=${token}`;
  const qr = await QRCode.toDataURL(url);

  res.json({ qr, url });
});

// ================= MARK =================
app.post("/mark-attendance", async (req, res) => {
  const { rollNo } = req.body;
  const userIP = req.ip;

  if (!qrExpiryTime || Date.now() > qrExpiryTime) {
    return res.send("❌ QR Expired");
  }

  if (markedIPs[userIP]) {
    return res.send("❌ Already Marked");
  }

  let student = await Student.findOne({ rollNo });

  if (!student) return res.send("❌ Student not found");

  student.attended += 1;
  student.totalClasses += 1;

  student.attendance.push({
    date: new Date(),
    status: "Present"
  });

  await student.save();

  markedIPs[userIP] = true;

  res.send("✅ Attendance Marked");
});

// ================= DATA =================
app.get("/attendance", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// ================= RESET =================
app.get("/reset", async (req, res) => {
  await Student.updateMany({}, {
    attended: 0,
    totalClasses: 0,
    attendance: []
  });

  markedIPs = {};
  res.send("Reset Done");
});

// ================= START =================
app.listen(PORT, "0.0.0.0", () => {
  console.log("\n🚀 Server Started Successfully\n");

  console.log(`👉 Main Page:\nhttp://${IP}:${PORT}`);
  console.log(`👉 Login:\nhttp://${IP}:${PORT}/login.html`);
  console.log(`👉 Dashboard:\nhttp://${IP}:${PORT}/dashboard.html`);
  console.log(`👉 Upload:\nhttp://${IP}:${PORT}/upload.html`);
  console.log(`👉 Attendance API:\nhttp://${IP}:${PORT}/attendance\n`);
});