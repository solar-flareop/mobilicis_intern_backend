const {
  getAllUsersController,
  addAllUsersController,
} = require("../controllers/storeController");

const router = require("express").Router();

//ADD ALL USERS
router.get("/users", getAllUsersController);

//GET ALL USERS
router.post("/users", addAllUsersController);

module.exports = router;
