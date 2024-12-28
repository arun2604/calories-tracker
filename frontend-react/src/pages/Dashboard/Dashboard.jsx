import React, { useState } from 'react';
import InputBox from '../../components/Input.jsx';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCalories, getCaloriesList, updateCalories } from '../../redux/thunk/caloriesThunk.js';
import { addFoodEntry, deleId } from '../../redux/slice/dashboardSlice.js';

const FoodForm = ({ onAddFood,details }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.food.id);
    const { food, setFood, calories, setCalories, date, setDate } = details;

    const getList = async () => {
        const data = await dispatch(getCaloriesList());
        if (data.payload) {
          dispatch(addFoodEntry(data.payload));
        } else {
          alert(data.error.message || "Can't find calories list");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (food && calories) {
            setFood('');
            setCalories('');
            if (id == null) {
                dispatch(addCalories({ foodName: food, foodCalorie: parseInt(calories), date: date }));
                getList();
            }
            else {
                dispatch(updateCalories({ foodName: food, foodCalorie: parseInt(calories), date: date, id: id }));
                getList();
            }
        }
        else {
            alert('Please enter both food and calories');
        }
        dispatch(deleId());
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', margin: '1rem ', justifyContent: 'center', alignItems: 'center' }}>
            <InputBox type="text" placeholder="Food" value={food} onChange={(value) => setFood(value)} />
            <InputBox type="number" placeholder="Calories" value={calories} onChange={(value) => setCalories(value)} />
            <InputBox type="date" value={date} onChange={(value) => setDate(value)} />

            <Button variant="contained" color="primary" type="submit" style={{ width: '150px', height: '35px' }}>
                {id ? 'Update' : 'Add'}
            </Button>
        </form>
    );
};

export default FoodForm;
