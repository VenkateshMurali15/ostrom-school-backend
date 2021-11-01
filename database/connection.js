const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ostrom:ostrom123@cluster0.uag2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connectivity Error", error);
    throw new Error(error);
  }
};
