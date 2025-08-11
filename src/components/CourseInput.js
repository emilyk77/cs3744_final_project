 /* This is the CourseInput.js file for CS 3744 Final Project - Summer 2025.

      CourseInput.js holds the logic for users entering in their course information.

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */
      
//import the css styling file
import './CourseInput.css';

function CourseInput({ course, onChange }) {
  return (
    <div className="courseInput">
        {/* define the input type as text to set the original temp */}
        <input type="text" placeholder="Course Name" value={course.name}></input>
        <select placeholder="Course Grade" value={course.grade}>
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
        <input type="number" placeholder="Course Credits" value={course.credits}></input>
    </div>
  )
};

export default CourseInput;