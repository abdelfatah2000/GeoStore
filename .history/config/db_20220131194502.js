const mongoose = require("mongoose");

async functirequire('dotenv').config({ path: 'ENV_FILENAME' });on connection () {
  return mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
};

module.exports = connection;