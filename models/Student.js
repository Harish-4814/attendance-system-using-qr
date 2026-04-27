const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  attended: { type: Number, default: 0 },
  totalClasses: { type: Number, default: 0 },
  attendance: [
    {
      date: Date,
      status: String,
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);