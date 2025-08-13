 /* This is the AddCourse.js file for CS 3744 Final Project - Summer 2025.

  AddCourse.js holds the logic for the add course button. The "+ Add Course"
  button allows users to add additional courses in their input for their GPA calculations.
  This button follows the same fomratting as the other buttons in the application.

  Course: CS 3744
  Assignment: Final Project
  Author: emilyk77 */

//import styling file
import './AddCourse.css';

//function holding button logic and taking in input
function AddCourse(props) {
  return (
    <div className="addCourse">
        {/* create the button that will be used for the conversion */}
        <input type="button" value={props.text} onClick={props.onClick}></input>
    </div>
  );
}

export default AddCourse;