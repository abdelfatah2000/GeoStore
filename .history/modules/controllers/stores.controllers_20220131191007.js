const Store = require("../models/store.models");
const { StatusCodes } = require("http-status-codes");

const getStores = (req, res, next) => {
  try{
    const stores = await Store.find({});
    res.status(StatusCodes.OK).js
  } catch (error) {

  }
}