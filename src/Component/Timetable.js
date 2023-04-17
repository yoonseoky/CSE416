import React from 'react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm','7:00'];

const Timetable = () => {
  return (
    <div className="timetable">
      <div className="timetable__header">
        <div className="timetable__cell"></div>
        {daysOfWeek.map(day => (
          <div key={day} className="timetable__cell timetable__cell--header">
            {day}
          </div>
        ))}
      </div>
      {timeSlots.map(time => (
        <div key={time} className="timetable__row">
          <div className="timetable__cell timetable__cell--time">{time}</div>
          {daysOfWeek.map(day => (
            <div key={day} className="timetable__cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timetable;
