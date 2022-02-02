const Store = require("../models/store.models");
const { StatusCodes } = require("http-status-codes");
const { count } = require("../models/store.models");

const getStores = (req, res, next) => {
  try {
    const stores = await Store.find();
    res.status(StatusCodes.OK).json(count);
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please try again", error });
  }
};

