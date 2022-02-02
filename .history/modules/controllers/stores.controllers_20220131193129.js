const Store = require("../models/store.models");
const { StatusCodes } = require("http-status-codes");

const getStores = async (req, res, next) => {
  // try {
    const stores = await Store.find();
    res.status(StatusCodes.OK).json({
      data: stores,
      count: stores.length,
    });
    
  // } catch (error) {
  //   res
  //     .status(StatusCodes.BAD_REQUEST)
  //     .json({ message: "Please try again", error });
  // }
};

const addStore = async (req, res) => {
  try {
    const store = await Store.create(req.body);
    res.status(StatusCodes.OK).json(store);
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please try again", error });
  }
};

module.exports = {
  getStores,
  addStore,
};
