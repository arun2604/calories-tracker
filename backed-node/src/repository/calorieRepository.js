/** @format */
const db = require("../config/db.js");

const addCalorie = async (foodName, foodCalorie, date) => {
  console.log("addCalorie Controller called");
  const query =
    "INSERT INTO calories (FoodName, FoodCalorie, Date) VALUES (?, ?, ?)";
  const [result] = await db
    .promise()
    .query(query, [foodName, foodCalorie, date]);
  return { id: result.insertId, foodName, foodCalorie, date };
};

const updateCalorie = async (id, foodName, foodCalorie, date) => {
  const query =
    "UPDATE calories SET FoodName = ?, FoodCalorie = ?, Date = ? WHERE Id = ?";
  const [result] = await db
    .promise()
    .query(query, [foodName, foodCalorie, date, id]);
  if (result.affectedRows === 0) return null;
  return { id, foodName, foodCalorie, date };
};

const deleteCalorie = async (id) => {
  const query = "DELETE FROM calories WHERE Id = ?";
  console.log(query);
  const [result] = await db.promise().query(query, [id]);
  console.log(result.affectedRows > 0);
  return result.affectedRows > 0;
};

const getCalories = async () => {
  const query = "SELECT * FROM calories";
  const [rows] = await db.promise().query(query);

  return rows;
};

module.exports = {
  addCalorie,
  updateCalorie,
  deleteCalorie,
  getCalories,
};
