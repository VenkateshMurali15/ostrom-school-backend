const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_LIVE_URL, { useNewUrlParser: true });
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connectivity Error", error);
    throw new Error(error);
  }
};
