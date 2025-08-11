 /* This is the InformationHeader.js file for CS 3744 Final Project - Summer 2025.

      InformationHeader.js holds the logic for the header of the website's info portion

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */
      
//import the css styling file
import './InformationHeader.css';

//function name with input
function InformationHeader(props) {
    return (
    //define the header class with the h1 tag, allowing the user to input
    //the text
    <div className="infoHeader">
        <h1 className="infoHeaderTitle">{props.text}</h1>
    </div>
  );
}

export default InformationHeader;