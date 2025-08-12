 /* This is the CourseInput.js file for CS 3744 Final Project - Summer 2025.

      CourseInput.js holds the logic for users entering in their course information.

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */
      
//import the css styling file
import './CourseInput.css';

function CourseInput({ course, onChange, onRemove }) {
  return (
    <div className="courseInput">
        {/* define the input type as text to set the original temp */}
        <input type="text" placeholder="Course Name" onChange={(e) => onChange('name', e.target.value)} value={course.name}></input>
        <select placeholder="Course Grade" onChange={(e) => onChange('grade', e.target.value)} value={course.grade}>
          {/* provide the options for temperature display This prohibits users from manually entering invalid grades*/}
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="D-">D-</option>
          <option value="F">F</option>
        </select>
        {/* define the input type as number to set the amount of credits */}
        <input type="number" placeholder="Course Credits" onChange={(e) => onChange('credits', e.target.value)} value={course.credits}></input>
        <button type="button" onClick={onRemove}>Remove Course</button>
    </div>
  )
};

export default CourseInput;