const mongoose = require("mongoose");
const geoCoder = require("../../utilis/geocoder");

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
      formattedAddress: String,
    },
    country: String,
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

storeSchema.pre("save", async function (next) {
  const loc = await geoCoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[1].latitude],
    formattedAddress: loc[0].formattedAddress,
  };
  this.country = loc[0].city;

  this.address = undefined;
  next();
});

module.exports = mongoose.model("store", storeSchema);
