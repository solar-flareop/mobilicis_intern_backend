const userModel = require("../models/userModel");
const sample_data = require("../sample_data.json");

//ADD ALL USERS
const addAllUsersController = async (req, res) => {
  try {
    await userModel.insertMany(sample_data);
    res.status(200).json({ success: true, message: "All users posted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

//GET ALL USERS
const getAllUsersController = async (req, res) => {
  try {
    const result = await userModel.find({});
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addAllUsersController,
  getAllUsersController,
};
