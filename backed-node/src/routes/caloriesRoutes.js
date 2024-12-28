/** @format */

const express = require("express");
const router = express.Router();
const caloriesController = require("../controller/calorieController.js");

router.post("/calories", caloriesController.addCalorie);
router.put("/calories/:id", caloriesController.updateCalorie);
router.delete("/calories/:id", caloriesController.deleteCalorie);
router.get("/calories", caloriesController.getCalories);

module.exports = router;
