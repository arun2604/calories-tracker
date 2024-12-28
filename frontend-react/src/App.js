/** @format */

import "./App.css";
import Header from "./components/Header.jsx";
import DayView from "./pages/Dashboard/dayView.jsx";
import FoodForm from "./pages/Dashboard/Dashboard.jsx";
import { Provider, useDispatch, useSelector } from "react-redux";
import { addFoodEntry } from "./redux/slice/dashboardSlice.js";
import store from "./redux/store.js";
import { useEffect, useState } from "react";
import { getCaloriesList } from "./redux/thunk/caloriesThunk.js";

function AppContent() {
  const [foodName, setFood] = useState("");
  const [foodCalorie, setCalories] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const dispatch = useDispatch();
  const { foodEntries } = useSelector((state) => state.food);

  const getList = async () => {
    const data = await dispatch(getCaloriesList());
    if (data.payload) {
      dispatch(addFoodEntry(data.payload));
    } else {
      alert(data.error.message || "Can't find calories list");
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const details = {
    food: foodName,
    calories: parseInt(foodCalorie),
    date,
    setFood,
    setCalories,
    setDate,
  };

  const handleAddFood = (entry) => {
    dispatch(addFoodEntry(entry));
  };

  return (
    <div className="App">
      <Header />
      <FoodForm onAddFood={handleAddFood} details={details} />
      <DayView foodEntries={foodEntries} details={details} />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
