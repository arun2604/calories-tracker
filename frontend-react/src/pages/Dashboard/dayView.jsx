// src/components/DayView.js
import React from 'react';
import CalorieDetails from './caloriesDetails.jsx';

const DayView = ({ foodEntries, details }) => {
    const groupedByDate = foodEntries.reduce((acc, entry) => {
        const dateKey = entry.Date;
        acc[dateKey] = acc[dateKey] || [];
        acc[dateKey].push(entry);
        return acc;
    }, {});
    

    return (
        <div className='day-view'>
            {Object.keys(groupedByDate).map((date) => (
                <div key={date} style={{ marginBottom: '1rem' }}>
                    <h3 className='date'>{new Date(date).toDateString() || ""}</h3>
                    <CalorieDetails details={details} foodEntries={groupedByDate[date]} />
                </div>
            ))}
        </div>
    );
};

export default DayView;
