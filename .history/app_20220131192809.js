const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

// Body Parser
app.use(express.json());

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});