 /* This is the Calculate.js file for CS 3744 Final Project - Summer 2025.

  Calculate.js holds the logic for the calculate button. The "CalculateGPA"
  button allows users to easily calculate their GPA.This button follows the 
  same fomratting as the other buttons in the application.

  Course: CS 3744
  Assignment: Final Project
  Author: emilyk77 */

//import styling
import './CalculateGPA.css';

//function to hold button logic
function CalculateGPA(props) {
  return (
    <div className="calculate">
        {/* create the button that will be used for the conversion */}
        <input type="button" value={props.text} onClick={props.onClick}></input>
    </div>
  );
}

export default CalculateGPA;