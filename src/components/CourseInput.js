 /* This is the CourseInput.js file for CS 3744 Final Project - Summer 2025.

      CourseInput.js holds the logic for users entering in their course information.
      This file holds all of the logic for the course name, grade, credits, and
      allows users to remove any courses they no longer wish to calculate in their
      GPA.

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */
      
//import the css styling file
import './CourseInput.css';

//function takes in the course, changes, and removals
function CourseInput({ course, onChange, onRemove }) {
  return (
    <div className="courseInput">
        {/* define the input type as text to set the original temp */}
        <input type="text" placeholder="Course Name" onChange={(e) => onChange('name', e.target.value)} value={course.name}></input>
        {/* create a dropdown selector for grades (A through F, Select Grade is the default) */}
        <select placeholder="Course Grade" onChange={(e) => onChange('grade', e.target.value)} value={course.grade}>
          <option value="selection">Select Grade</option>
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
        {/* create a button to remove unnecessary courses */}
        <button type="button" onClick={onRemove}>Remove Course</button>
    </div>
  )
};

export default CourseInput;