const mongoose = require("mongoose");

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("db connected ",conn.connection.host);
  } catch (error) {
    console.log("error in db.js", error);
  }
};

module.exports = connectDB;
