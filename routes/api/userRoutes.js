const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateSingleUser,
  deleteSingleUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.get("/:userId", getSingleUser);
router.put("/:userId", updateSingleUser);
router.delete("/:userId", deleteSingleUser);

module.exports = router;
