 /* This is the GPADisplay.js file for CS 3744 Final Project - Summer 2025.

  GPADisplay.js holds the logic for the title of the gpa and the gpa.
  The file takes in two inputs, the text title and the gpa, with functionality
  to display it.

  Course: CS 3744
  Assignment: Final Project
  Author: emilyk77 */
      
//import the css styling file
import './GPADisplay.css';

//function name with input
function GPADisplay({text, gpa}) {
    return (
    <div className="display">
      {/* take the text to display as the title */}
      <h1 className="displayTitle">{text} </h1>
      {/* take the GPA to display */}
      <h2 className="gpa">{gpa}</h2>
    </div>
  );
}

export default GPADisplay;