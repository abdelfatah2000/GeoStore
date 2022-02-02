const Store = require("../models/store.models");
const { StatusCodes } = require("http-status-codes");

const getStores = (req, res, next) => {
  try {
    const stores = await Store.find();
    res.status(StatusCodes.OK).json({
      data:stores,
      count:stores.length,
    });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please try again", error });
  }
};

const addStore = (req,res) => {
  try {
    const store = await Store.c
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please try again", error });
  }
}

