const Store = require("../models/store.models");

const getStores = (req, res, next) => {
  try{
    const stores = await Store.find({});
    res.
  } catch (error) {

  }
}