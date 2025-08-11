 /* This is the AddCourse.js file for CS 3744 Final Project - Summer 2025.

  AddCourse.js holds the logic for the calculate button.

  Course: CS 3744
  Assignment: Final Project
  Author: emilyk77 */

import './AddCourse.css';

function AddCourse(props) {
  return (
    <div className="addCourse">
        {/* create the button that will be used for the conversion */}
        <input type="button" value={props.text} onClick={props.onClick}></input>
    </div>
  );
}

export default AddCourse;