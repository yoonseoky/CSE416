import React, { useState } from 'react';


const Timetable = () => {
  const [courses, setCourses] = useState([]);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timesOfDay = ['8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'];

  const addCourse = (courseId) => {
    // Simulated course data for testing
    const courseData = {
      id: courseId,
      name: `Course ${courseId}`,
      instructor: `Instructor ${courseId}`,
      classroom: `Classroom ${courseId}`,
      day: daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)],
      start: timesOfDay[Math.floor(Math.random() * timesOfDay.length)],
      end: timesOfDay[Math.floor(Math.random() * timesOfDay.length)]
    };

    // Calculate the course block location on the timetable
    const startIdx = timesOfDay.findIndex(time => time === courseData.start);
    const endIdx = timesOfDay.findIndex(time => time === courseData.end);
    const dayIdx = daysOfWeek.findIndex(day => day === courseData.day);

    // Generate the course block element
    const courseBlock = (
      <div
        className="course-block"
        style={{
          gridColumnStart: dayIdx + 2,
          gridColumnEnd: dayIdx + 3,
          gridRowStart: startIdx + 1,
          gridRowEnd: endIdx + 2,
        }}
      >
        <div className="course-title">{courseData.name}</div>
        <div className="course-info">
          <div className="course-instructor">{courseData.instructor}</div>
          <div className="course-classroom">{courseData.classroom}</div>
        </div>
        <button className="delete-button" onClick={() => deleteCourse(courseData.id)}>X</button>
      </div>
    );

    setCourses([...courses, courseBlock]);
  };

  const deleteCourse = (courseId) => {
    const updatedCourses = courses.filter(course => course.props.children.props.id !== courseId);
    setCourses(updatedCourses);
  };

  return (
    <div className="timetable">
      <div className="timetable-header">
        <div className="empty-cell"></div>
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="day-of-week">{day}</div>
        ))}
      </div>
      {timesOfDay.map((time, idx) => (
        <div key={idx} className="timetable-row">
          <div className="time-of-day">{time}</div>
          {daysOfWeek.map((day, idx) => (
            <div key={`${day}-${time}`} className="timetable-cell"></div>
          ))}
        </div>
      ))}
      {courses}
      <form onSubmit={(event) => {
        event.preventDefault();
        const courseId = event.target.courseId.value;
        addCourse(courseId);
        event.target.reset();
      }}>
        <label htmlFor="courseId">Course ID:</label>
        <input type="text" id="courseId" />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default Timetable;
