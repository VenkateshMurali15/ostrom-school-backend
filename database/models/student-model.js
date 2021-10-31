const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    courseName: String,
    hours: Number,
    price: Number,
    dob: Date,
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Student", studentSchema);
