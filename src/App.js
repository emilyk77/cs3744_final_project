 /* This is the App.js file for CS 3744 Final Project - Summer 2025.

      App.js holds all major file storage for the final project. App.js
      follows the MVC design pattern with Thinking in React methods.
      The file will hold all the course data, calculate the GPA, and
      generate the view using the supporting files.

      Course: CS 3744
      Assignment: Final Project
      Author: emilyk77 */

//Import the styling css file
import './App.css';
//import the support js files for the application
import Header from './components/Header.js';
import CalculateGPA from './components/GPA&Courses/CalculateGPA.js';
import CourseInput from './components/GPA&Courses/CourseInput.js';
import AddCourse from './components/GPA&Courses/AddCourse.js';
import InformationHeader from './components/Information/InformationHeader.js';
import GPADisplay from './components/GPA&Courses/GPADisplay.js';
import ChartTitle from './components/Visualization/ChartTitle.js';
//Import the use effect/state/ref statements to declare and update values/charts
import { useState, useRef } from 'react';
//import various chart elements to create the pie chart
import { Chart, ArcElement, PieController, Legend } from 'chart.js';
Chart.register(ArcElement, PieController, Legend);


//define the App function to hold all the code
function App() {
  //Beginning of Model
  
  //create a constant for the courses using a state. Courses are made with the values name, grade, and credits initially null
  const [courses, setCourses] = useState([
    { name: "", grade: "", credits: "" }
  ]);

  //create the GPA starting at null
  const [GPA, setGpa] = useState(null);

  //create the points equivalent for each letter grade; to be used in GPA calculation
  const points = { A: 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7, "C+": 2.3, "C": 2.0, "C-": 1.7, "D+": 1.3, 
    "D": 1.0, "D-": 0.7, "F": 0.0 };

  //create a constant to add courses by appending a new course to the current courses
  const addCourse = () => {
    setCourses([...courses, { name: '', grade: '', credits: '' }]);
  };

  //constants to assist in displaying the pie chart
  const creditDistribution = useRef(null);
  const creditDistributionCanvas = useRef(null);

  //End of Model
  //Beginning of Controller

  //this function will handle the actual GPA calculation by getting the total number of credits,
  //getting the points for each course, then dividing the sum of the points by the total number
  //of credits
  function calculation() {
    //step 1: get the total number of credits in the course
    let totalCredits = 0;
    //loop through courses to create readable code
    for (let i = 0; i < courses.length; i++){
      //get the course's individual credits
      let credit = parseFloat(courses[i].credits);
      //if the credit is not a number, return -1 to indicate an error
      if(!isNaN(credit)) {
        //add the course credit to the summary
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

      //if points equivalent is undefined, return -1 to signify an error. Otherwise continue with logic
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
    //if there are credits, calculate the GPA
    if(totalCredits !== 0) {
      //get the calculated GPA
      let calculatedGPA = (totalPoints / totalCredits);
      return calculatedGPA;
    }
    else {
      return -1;
    }
  }

  //function to create the pie chart so that it can be called upon, not updated on every change
  function pieChart() {
    //if there is a current pie chart for credit distribution, destroy it to allow for creation of a new one.
    //an error occured if the existing pie chart was not deleted before the creation of a new one
    if(creditDistribution.current) {
      creditDistribution.current.destroy();
    }

    //if there are any credits present in courses, then we can create a pie chart. Otherwise if no course has any credits,
    //a pie chart should not be created as there are no credits being distributed
    if(courses.some(course => parseFloat(course.credits) > 0) === true) {
      const pieChart = creditDistributionCanvas.current.getContext('2d');
      //create the credit distribution chart 
      creditDistribution.current = new Chart(pieChart, {
        //set the chart type to pie
        type: "pie",
        data: {
          //create a label for the data and if no name is present, showcase that the name is msising
          labels: courses.map(course => course.name || "Course Name Missing"),
          datasets: [{
            //create the data by parsing through each course's credits
            data: courses.map(course => parseFloat(course.credits) || 0),
            //set the order in which the colors should display. Otherwise, they are all the same color
            backgroundColor: ["blue", "pink", "purple", "green", "yellow", "orange", "red", "grey"]
          }]
        },
        //in options, we can display the plug ins and legends to create a more readable, accessible experience
        options: {
          plugins: {
            //display the legend so users can see which course is which color
            legend: {
              display: true
            }
          }
        },
      });
    }
  }

  //function to handle the click of the calculateGPA button
  function handleClickGPACalc(e) {
    //call the calculation function
    const calculatedGPA = calculation();
    //call the function to calculate the pie chart
    pieChart();
    //if it returns -1 (<0) there was an error so display a message to indicate error to assist user in correcting the error
    if (calculatedGPA < 0) {
      setGpa("Invalid input. Please verify all course grades and credits are input correctly");
    }
    //otherwise set the GPA to 4 decimal places
    else {
      setGpa(calculatedGPA.toFixed(4));
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
                  //get the courses that currently exist
                  const updated = [...courses];
                  //update the course at index i
                  updated[i] = { ...updated[i], [type]: info };
                  //set the courses with the updated courses
                  setCourses(updated);
                }}
                //removal:
                onRemove={() => {
                  //update the courses by splicing from the start index 0, to removal index, to the end of the couses
                  const updated = [...courses.slice(0, i), ...courses.slice(i + 1)];
                  //set the courses with the updated courses
                  setCourses(updated);
                }}
              />
            ))}
            {/* create an area for both buttons to go side by side */}
            <div className="buttons">
              {/* input the text for the calculate button */}
              <AddCourse text="+ Add Course" onClick={addCourse}/>
              {/* input the text for the calculate button */}
              <CalculateGPA text="Calculate GPA" onClick={handleClickGPACalc}/>
            </div>
            {/* display gpa title */}
            <GPADisplay text="Your GPA:" gpa={GPA}/>
            <ChartTitle text="Course Credit Distribution"/>
            {/* informative message of pie chart */}
            <li>See the below Pie Chart for information about your course credit distribution. The first pie chart will not be generated until you have calculated your GPA for the first time.</li>
            {/* display pie chart */}
            <canvas ref={creditDistributionCanvas}/>
          </div>
          {/* the right will hold all information informing the user of how to calculate their GPA */}
          <div className="right">
            {/* information on how to use application */}
            <InformationHeader text="How to Use GPAQuest to Calculate Your GPA"></InformationHeader>
            <li>1. Enter the course name.</li>
            <li>2. Select the grade of the course from dropdown.</li>
            <li>3. Enter the number of course credits.</li>
            <li>4. Click "+ Add Course" to add more courses.</li>
            <li>5. Repeat steps 1-3 for each course added.</li>
            <li>6. Click "Calculate GPA".</li>
            <li>7. Observe the GPA and course credit graph to understand the weight of each course.</li>
            {/* information on how to calculate GPA, educational portion of application */}
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