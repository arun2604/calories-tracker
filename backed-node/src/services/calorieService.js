/** @format */
const caloriesRepository = require("../repository/calorieRepository.js");

const addCalorie = async (foodName, foodCalorie, date) => {
  console.log(`addCalorie Service called ${foodName} ${foodCalorie} ${date}`);
  return await caloriesRepository.addCalorie(foodName, foodCalorie, date);
};

const updateCalorie = async (id, foodName, foodCalorie, date) => {
  return await caloriesRepository.updateCalorie(
    id,
    foodName,
    foodCalorie,
    date
  );
};

const deleteCalorie = async (id) => {
  return await caloriesRepository.deleteCalorie(id);
};

const getCalories = async () => {
  return await caloriesRepository.getCalories();
};

module.exports = {
  addCalorie,
  updateCalorie,
  deleteCalorie,
  getCalories,
};
