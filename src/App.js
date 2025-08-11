 /* This is the App.js file for CS 3744 Final Project - Summer 2025.

      App.js holds all major file storage for the final project.

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */

//Import the styling css file
import './App.css';
//Import the use state statement to declare and update values
import { useState } from 'react';
//import the required header, selector, display, and react files
import Header from './components/Header.js';
import CalculateGPA from './components/CalculateGPA.js';
import CourseInput from './components/CourseInput.js';
import InformationHeader from './components/InformationHeader.js';

//define the App function to hold all the code
function App() {
  //Beginning of Model
  
  const [course, setCourses] = useState([
    { name: "", grade: "", credits: "" }
  ]);
  const [GPA, setGpa] = useState(null);

  //End of Model
  //Beginning of Controller

  //TODO
  function handleClick(e) {
    //set the converted temp by calling the function defined above
    
  }

  //End of controller
  //Beginning of View

  return (
    <div className="App">
      {/* input the desired header */}
      <Header text="GPAQuest"/>

        {/* create the 2/3 left and 1/3 right */}
        <div className="content">
          {/* the left will display all content for the GPA course/grade entry and calculation */}
          <div className="left">

            <CourseInput course={course}/>

            {/* input the text for the calculate button */}
            <CalculateGPA text="Calculate GPA" onClick={handleClick}/>
          </div>
          {/* the right will hold all information informing the user of how to calculate their GPA */}
          <div className="right">
            <InformationHeader text="How to Calculate Your GPA"></InformationHeader>
          </div>
        </div>
      </div>

    
  );

  //End of View
}

export default App;