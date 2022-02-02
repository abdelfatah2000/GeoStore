const mongoose = require("mongoose");
require("dotenv").config();

async function connection() {
  return mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
}

module.exports = connection;
