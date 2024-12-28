import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { addId } from '../../redux/slice/dashboardSlice';
import { deleteCalories, getCaloriesList } from '../../redux/thunk/caloriesThunk';

const CalorieList = ({ foodEntries,  details }) => {
    const totalCalories = foodEntries.reduce((sum, entry) => sum + entry.FoodCalorie, 0);
    const {  setFood, setCalories,  setDate } = details;
    const dispatch = useDispatch();

    const handleEdit = (index, entry) => {
        dispatch(addId(entry.Id));
        setFood(entry.FoodName);
        setCalories(entry.FoodCalorie);
        var updatedDate = new Date(entry.Date);
        updatedDate.setDate(updatedDate.getDate() + 1);
        setDate(updatedDate.toISOString().split('T')[0]);
    };

    const onDelete = (index) => {
        dispatch(deleteCalories(index)).then(() => {
            debugger
      console.log("Entry deleted");
      dispatch(getCaloriesList());
    });
    };

    return (
        <div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {foodEntries.map((entry, index) => (
                    <li
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid #ddd',
                            padding: '0.5rem 0',
                        }}
                    >
                        <span>
                            <strong>{entry.FoodName}</strong>: {entry.FoodCalorie} calories
                        </span>
                        <div>
                            <IconButton
                                edge="end"
                                color="primary"
                                onClick={() => handleEdit(index, entry)}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                edge="end"
                                color="error"
                                onClick={() => onDelete(entry.Id)}
                            >
                                <DeleteForeverIcon />
                            </IconButton>
                        </div>
                    </li>
                ))}
            </ul>
            <div style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                Total Calories: {totalCalories}
            </div>
        </div>
    );
};

export default CalorieList;
