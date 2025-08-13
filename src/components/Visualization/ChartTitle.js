 /* This is the ChartTitle.js file for CS 3744 Final Project - Summer 2025.

      ChartTitle.js holds the logic for the ChartTitle of the website. The chart
      title will display the title of the pie chart used to display the credit distribution.

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */
      
//import the css styling file
import './ChartTitle.css';

//function name with input
function ChartTitle(props) {
    return (
    <div className="chartTitle">
      {/* create the title for the chart */}
      <h1 className="chartTitleTitle">{props.text}</h1>
    </div>
  );
}

export default ChartTitle;