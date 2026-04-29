# 📷 QR Code Based Attendance System

A smart and efficient attendance management system that uses QR codes to automate attendance marking. Built using **Node.js, Express, MongoDB**, and modern web technologies.

---

## 🚀 Features

* 🔐 Login Authentication
* 📷 Dynamic QR Code Generation
* 📱 QR Scan Based Attendance
* ⏱ Time-limited QR (prevents misuse)
* 📊 Attendance Dashboard
* 📂 Excel (.xlsx) Student Upload
* 🌐 Works on Local Network (Dynamic IP)
* 🚫 Duplicate Attendance Prevention

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** HTML, CSS, JavaScript
* **Database:** MongoDB
* **Libraries:** QRCode, Multer, XLSX, Mongoose

---

## 📂 Project Structure

```
attendance-system/
│── models/
│   └── Student.js
│
│── public/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── scan.html
│   └── upload.html
│
│── uploads/
│── server.js
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/Harish-4814/attendance-system-using-qr.git
cd attendance-system-using-qr
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Start MongoDB
Make sure MongoDB is running locally.

4️⃣ Run the server

```bash
node server.js
```

---

## 🌐 Usage

* Open browser:

```
http://localhost:5000/login.html
```

* Login credentials:

```
Username: admin  
Password: 123
```

* Generate QR → Scan → Enter Roll No → Attendance marked ✅

---

## 📸 Screenshots

(Add your screenshots here)

* QR Generation Page
* Scan Page
* Dashboard
* Upload Page

---

## 📌 How It Works

1. Teacher generates QR code
2. Students scan QR
3. Enter roll number
4. Attendance saved in database
5. Dashboard shows real-time data

---

## 🔮 Future Enhancements

* Face Recognition
* Mobile App Integration
* Cloud Deployment
* Advanced Analytics

---

## 👨‍💻 Author

* Harish Singh Mahara
* Ayush Pathak
* Krrish Addhikari
* Jatin 

---

## 📜 License

This project is for educational purposes.

---
