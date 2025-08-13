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
import AddCourse from './components/AddCourse.js';
import InformationHeader from './components/InformationHeader.js';
import GPADisplay from './components/GPADisplay.js';
import ChartTitle from './components/ChartTitle.js';

//define the App function to hold all the code
function App() {
  //Beginning of Model
  
  const [courses, setCourses] = useState([
    { name: "", grade: "", credits: "" }
  ]);

  const [GPA, setGpa] = useState(null);

  const points = { A: 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7, "C+": 2.3, "C": 2.0, "C-": 1.7, "D+": 1.3, 
    "D": 1.0, "D-": 0.7, "F": 0.0 };

  const addCourse = () => {
    setCourses([...courses, { name: '', grade: '', credits: '' }]);
  };



  //End of Model
  //Beginning of Controller

  //this function will handle the actual GPA calculation by getting the total number of credits,
  //getting the points for each course, then dividing the sum of the points by the total number
  //of credits
  function calculation() {
    //step 1: get the total number of credits in the course
    let totalCredits = 0;
    for (let i = 0; i < courses.length; i++){
      //summarize the total credits of the course load by adding credits of all classes
      let credit = parseFloat(courses[i].credits);
      if(!isNaN(credit)) {
        totalCredits += credit;
      }
      else {
        return -1;
      }
    }

    //step 2: get the total points for each course and summarize
    let totalPoints = 0;
    for (let x = 0; x < courses.length; x++) {
      //get the points equivalent of the course grade
      let pointsEquivalent = points[courses[x].grade];

      if(pointsEquivalent !== undefined) {
        //calculate grade * credits to get the points of the course
        let coursePoints = pointsEquivalent * parseFloat(courses[x].credits);
        //summarize the total points
        totalPoints += coursePoints;
      }
      else {
        return -1;
      }
    }

    //step 3: divide points by credits to get GPA
    if(totalCredits !== 0) {
      let calculatedGPA = (totalPoints / totalCredits);
      return calculatedGPA;
    }
    else {
      return -1;
    }
  }

  function handleClick(e) {
    const calculatedGPA = calculation();
    if (calculatedGPA < 0) {
      setGpa("Invalid input. Please verify all course grades and credits are input correctly");
    }
    else {
      setGpa(calculatedGPA.toFixed(2));
    }
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
            {courses.map((course, i) => (
              <CourseInput key={i} course={course} onChange={(type, info) => {
                  const updated = [...courses];
                  updated[i] = { ...updated[i], [type]: info };
                  setCourses(updated);
                }}
                onRemove={() => {
                  const updated = [...courses.slice(0, i), ...courses.slice(i + 1)];
                  setCourses(updated);
                }}
              />
            ))}

            {/* create an area for both buttons to go side by side */}
            <div className="buttons">
              {/* input the text for the calculate button */}
              <AddCourse text="+ Add Course" onClick={addCourse}/>
              {/* input the text for the calculate button */}
              <CalculateGPA text="Calculate GPA" onClick={handleClick}/>
            </div>
            <GPADisplay text="Your GPA:" gpa={GPA}/>
            <ChartTitle text="Course Credit Distribution"/>
            <li>See the below Pie Chart for information about your course credit distribution. The first pie chart will not be generated until you have calculated your GPA for the first time.</li>
          </div>
          {/* the right will hold all information informing the user of how to calculate their GPA */}
          <div className="right">
            <InformationHeader text="How to Use GPAQuest to Calculate Your GPA"></InformationHeader>
            <li>1. Enter the course name.</li>
            <li>2. Select the grade of the course from dropdown.</li>
            <li>3. Enter the number of course credits.</li>
            <li>4. Click "+ Add Course" to add more courses.</li>
            <li>5. Repeat steps 1-3 for each course added.</li>
            <li>6. Click "Calculate GPA".</li>
            <li>7. Observe the GPA and course credit graph to understand the weight of each course.</li>
            <InformationHeader text="How to Calculate Your GPA Manually"></InformationHeader>
            <li>1. List out all courses with the course name, grade, and credits.</li>
            <li>2. Convert each grade A-F to points. Refer to the reference</li>
              <ul>
                <li>Reference: A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, D+ = 1.3, D = 1.0, D- = 0.7, F = 0.0</li>
              </ul>
            <li>3. Calculate the total points for each course by multiplying the grade (in points) by the amount of credits for that course</li>
              <ul>
                <li>i.e If the grade for Algebra is a B (3.0) and it is 4 credits, 3.0x4 = 12 total points</li>
              </ul>
            <li>4. Get the points summary by adding each course's total points together.</li>
            <li>5. Get the total course credits by adding the each course's course credits.</li>
            <li>6. Divide the points summary (step 4) by the total course credits (step 5).</li>
          </div>
        </div>
      </div>
  );

  //End of View
}

export default App;