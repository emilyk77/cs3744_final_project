 /* This is the Calculate.js file for CS 3744 Final Project - Summer 2025.

      calculate.js holds the logic for the calculate button.

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */

import './CalculateGPA.css';

function CalculateGPA(props) {
  return (
    <div className="calculate">
        {/* create the button that will be used for the conversion */}
        <input type="button" value={props.text} onClick={props.onClick}></input>
    </div>
  );
}

export default CalculateGPA;