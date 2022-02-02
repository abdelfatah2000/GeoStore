const app = require("express");
const controller = require("../controllers/stores.controllers");

app.get("/getStores", controller.getStores);
