const app = require("express").Router();;
const controller = require("../controllers/stores.controllers");

app.get("/getStores", controller.getStores);
app.post("/addStore", controller.addStore);

module.exports = app;