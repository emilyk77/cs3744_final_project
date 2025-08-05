 /* This is the Header.js file for CS 3744 Final Project - Summer 2025.

      Header.js holds the logic for the header of the website

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */
      
//import the css styling file
import './Header.css';

//function name with input
function Header(props) {
    return (
    //define the header class with the h1 tag, allowing the user to input
    //the text
    <div className="header">
        <h1>{props.text}</h1>
    </div>
  );
}

export default Header;