# cs3744_final_project
This is the repository for the final project in CS 3744, Summer II 2025.
Author: Emily Knoll

# App Description & Purpose
GPAQuest is a GPA calculation application where users may enter their course information and calculate their GPA. Some educational institutions do not provide tools to calculate estimated GPAs based on projected final grades. For instance, my high school did not provide the tools to calculate your GPA, leaving students to do manual calculations which often experienced human error. In addition, existing solutions have a low level of usability with unclear instructions on how to calculate the GPA. GPAQuest provides a friendly UI through clear, accessible instructions on how to accurately insert course data to determine the GPA. In addition, GPAQuest provides information on how a GPA is calculated, remaining transparent with users. By showcasing information on how GPAs are calculated, the application will provide educational value to students. Thus, GPAQuest will emphasize accessibility, transparency, and education value. 

# Installation & Setup Instructions
To run GPAQuest, follow the instructions below.
1. Clone the github repository in the terminal.
2. Navigate to the project folder: "cs3744_final_project"
3. If react and chart.js are not installed, install them by typing the following commands in the terminal:                    - "npm react"
     - "npm install chart.js"
4. Once all the above commands have been run and installed, type "npm start" to start the application in your local browser.
5. Navigate to your local browser to access the application.
6. Begin entering your course data, following the instructions in the application!

# Feature List with Screenshots
The application contains the following features with screenshots:
- The application contains step-by-step information on how to use the application.
  <img width="1097" height="784" alt="image" src="https://github.com/user-attachments/assets/0b2e442f-6685-40c3-9fe7-d92dee19bbb1" />
- The application has step-by-step instructions on how to calculate a GPA by hand. This will educate users on how to calculate their own GPA to ensure they can do so in the future if they don't have access to assistive technology.
 <img width="1119" height="1531" alt="image" src="https://github.com/user-attachments/assets/aaf931c8-8442-487b-ba36-e902380721ac" />
- Next, the application has the ability to take in course information. This allows users to enter the course name, grade, and credit value. In addition, users may add additional courses or remove unnecessary courses from their GPA calculation.
  <img width="1884" height="276" alt="image" src="https://github.com/user-attachments/assets/bb99c99b-a2ce-48ff-a1d8-a03fbb253567" />
  <img width="1899" height="479" alt="image" src="https://github.com/user-attachments/assets/cc77c404-2def-4588-803d-2a09b9857b6c" />
- In addition, the application allows users to click "Calculate GPA" that will digitally calculate the GPA. This includes built-in error prevention. If a user attempts to calculate their GPA but any courses' grades or credits are missing, the GPA will not be calculated and a message will be issued to the user informing them that there is critical information missing.
  <img width="425" height="153" alt="image" src="https://github.com/user-attachments/assets/19845366-af03-4a61-b612-9e5029647362" />
  <img width="588" height="143" alt="image" src="https://github.com/user-attachments/assets/919295d2-b27a-4c6f-87e6-581af2d1ba49" />
  <img width="1019" height="185" alt="image" src="https://github.com/user-attachments/assets/33242085-cb76-4ba2-bda6-ea73e7ac8861" />
  <img width="2239" height="829" alt="image" src="https://github.com/user-attachments/assets/2a213323-c9cd-4e1f-b6ef-09a2ac596fca" />
- Lastly, the application has a pie chart displaying the credit distribution of each course. This allows users to see the weight of each course compared to the total amount of course credits they entered. In addition, the pie chart will update any time that the "Calculate GPA" is clicked.
  <img width="2184" height="302" alt="image" src="https://github.com/user-attachments/assets/561dee12-5ea7-4e9e-b662-88d2cf7aebcd" />
  <img width="2192" height="1746" alt="image" src="https://github.com/user-attachments/assets/5d7c1b9b-1b08-4a6e-a348-5cb33b6ee147" />

# Technology Stack Used
The application uses various technologies, denoted below:
- JavaScript: Javascript is the main language behind the application, used to create inputs, buttons, selection dropdowns, handles the logic for GPA calculation, and more!
- CSS: CSS was used to sylize the UI of the application. The application has a light blue background, gray lettering, readable text, and more!
- HTML: HTML was used to assist in the display of the application features.
- Chart.js: Chart.js was used to implement the visualization of the program. Using this, a pie chart was developed that displays the credit distribution of the user's course load. The whole pie chart demonstrates the total credits the user entered (summarized by each courses' individual credits), with the slices in the pie chart representing individual courses. 

# Demo Video

# Future Development Roadmap
In future development, the following features will be added to improve the application:
- GPA Calculations: showcase the calculations performed to get the user's GPA to enhance the transparency of the application.
- GPA Insights: include insights into the user's GPA, showcasing their strongest & weakest courses for improvement. These insights will not be provided by the user's grade for the course, it will be determined by the total points earned in the course. For instance, a B+ in a 4 credit course (13.2 points) carries more weight than a A- in a 2 credit course (7.4 points), making the B+ grade the weaker course.
- Modify visualization: the current pie chart visualization will be modified to be more readable and clear to users.
- Add visualizations: Add a new visualization feature to show the contribution of each course toward their GPA using a bar chart.

# Contact Information
To further discuss the application and its development, please reach out via the following email: emilyk77@vt.edu
