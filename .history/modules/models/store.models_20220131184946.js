const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  storeId: {
    type: String,
    unique: true,
    required: true,
    trim
  },
});
