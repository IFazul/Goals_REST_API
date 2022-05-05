const express = require("express");

const {getGoal, postGoal, updateGoal, deleteGoal} = require("../controllers/goal");

const router = express.Router();

router.route("/").get(getGoal).post(postGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
