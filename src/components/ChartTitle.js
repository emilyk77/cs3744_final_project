 /* This is the ChartTitle.js file for CS 3744 Final Project - Summer 2025.

      ChartTitle.js holds the logic for the ChartTitle of the website

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */
      
//import the css styling file
import './ChartTitle.css';

//function name with input
function ChartTitle(props) {
    return (
    //define the ChartTitle class with the h1 tag, allowing the user to input
    //the text
    <div className="chartTitle">
        <h1 className="chartTitleTitle">{props.text}</h1>
    </div>
  );
}

export default ChartTitle;