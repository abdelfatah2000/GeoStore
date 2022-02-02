const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const connection = require("./config/db");

connection();
dotenv.config();

// Body Parser
app.use(express.json());

app.use(cors());

// Front end
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const stores = require("./modules/routes/store.routes");
app.use("/api/stores", stores);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
