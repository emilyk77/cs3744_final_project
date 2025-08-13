 /* This is the InformationHeader.js file for CS 3744 Final Project - Summer 2025.

      InformationHeader.js holds the logic for the header of the website's information.
      The application provides information to the user on 1. how to run the application & 2. how
      to calculate their GPAs by hand. The goal of this is to educate users on how to do so, 
      enabling them to do it independently in the future in case of minimal access to assistive
      technology.

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */
      
//import the css styling file
import './InformationHeader.css';

//function name with input
function InformationHeader(props) {
    return (
    <div className="infoHeader">
      {/* display the title */}
      <h1 className="infoHeaderTitle">{props.text}</h1>
    </div>
  );
}

export default InformationHeader;