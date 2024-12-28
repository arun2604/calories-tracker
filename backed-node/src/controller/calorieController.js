/** @format */
const caloriesService = require("../services/calorieService.js");

const addCalorie = async (req, res) => {
  try {
    let { foodName, foodCalorie, date } = req.body;
    if (date === "" || date === undefined || date === null) date = new Date();
    const calorie = await caloriesService.addCalorie(
      foodName,
      foodCalorie,
      date
    );
    res.status(201).json(calorie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCalorie = async (req, res) => {
  try {
    const { id } = req.params;
    const { foodName, foodCalorie, date } = req.body;
    const calorie = await caloriesService.updateCalorie(
      id,
      foodName,
      foodCalorie,
      date
    );
    if (calorie) {
      res.status(200).json(calorie);
    } else {
      res.status(404).json({ message: "Calorie entry not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCalorie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await caloriesService.deleteCalorie(id);
    if (result) {
      res.status(200).json({ message: "Calorie entry deleted successfully" });
    } else {
      res.status(404).json({ message: "Calorie entry not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCalories = async (req, res) => {
  try {
    const calories = await caloriesService.getCalories();
    res.status(200).json(calories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addCalorie,
  updateCalorie,
  deleteCalorie,
  getCalories,
};
