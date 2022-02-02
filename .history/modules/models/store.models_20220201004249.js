const mongoose = require("mongoose");
const geo
const storeSchema = new mongoose.Schema(
  {
    storeId: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"], // 'location.type' must be 'Point'
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
    },
    country: String,
    address: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("store", storeSchema);