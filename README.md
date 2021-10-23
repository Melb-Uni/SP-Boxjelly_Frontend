
      This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# COMP90082 Software Project - Software Project Databases

This project aims to have a software system that automatically gathers and summarise all aspects of the software engineering activities of CIS (Computing and Information Systems) Software Projects (COMP90082) developed. This will allow course coordinators to monitor and promptly provide meaningful feedback to teams, improve the quality of processes used in development and software systems developed, thus ensuring software deployment at the end of every project.


# Table of Contents
[1.0 Project Overview](#1.0)

[2.0 Deployment](#2.0)

[3.0 Usage](#3.0)

[4.0 Roadmap](#4.0)

[5.0 Contributing](#5.0)

[6.0 Change Log](#6.0)

<h1 id="1.0"> 1.0 Project Overview </h1>

## Background

Software Projects Subject (COMP90082) is the subject for students to perform necessary Software Engineering practices to successfully build a high-quality software product for real-world clients. To monitor, evaluate, and provide feedback to students, a supervisor will observe the Software Projects activities of a student team through the software development tools used and through student-supervisor meetings. The involved software development tools include a Version Control System (Git, GitHub/BitBucket/GitLab), a Task Management Tool (JIRA/Trello) and a Documentation tool (Confluence). Some processes would be considered to assess students include Software Testing, Code Review, Continuous Integration, and Deployment.

## Problem

The tools and processes that students use for these projects (as stated in Background) are diverse and are all accessed on different websites/platforms. Currently, supervisors have to manually open each tool to analyse the complete tasks on each of them. It is an inefficient and tedious process, especially if a supervisor monitors more than ten teams. Although some development tools (e.g., JIRA) provide visual summaries of a team's work, the visualisation only shows data from a single activity. Thus, it is difficult and time-consuming for supervisors to offer detailed and insightful feedback to students, especially if a supervisor has more than one team to supervise.

## Project

This project aims to have a software system that automatically gathers and summarise all aspects of the software engineering activities of CIS (Computing and Information Systems) Software Projects (COMP90082) developed. This will allow course coordinators to monitor and promptly provide meaningful feedback to teams, improve the quality of processes used in development and software systems developed, thus ensuring software deployment at the end of every project.

## Details

Project Overview: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/1.1+Project+Overview  

Quality Requirement: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/1.2+Quality+Requirements  

Persona: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/1-3.+Persona  

Goal Models: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/1-4.+Goal+Models  

Project Analysis Metrics: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/1.5+Project+Analysis+Metrics  

<h1 id="2.0"> 2.0 Deployment </h1>

## Overview 

The Software Project application is developed by JavaScript in the front-end and Python3 Django framework and MySQL databases in the back-end.

Frontend: https://github.com/Melb-Uni/SP-Boxjelly_Frontend  

Backend: https://github.com/Melb-Uni/SP-Boxjelly_Backend  

The steps for installing and deploying Software Project easily is as follows:

### 1. To start a front-end for developing:

1. install npm, can refer to https://www.npmjs.com/get-npm  
2. Install the front-end project, in CLI:  npm install   
3. npm start  The front-end is now running on hhttp://18.167.74.23:18000/api/v1  

### 2. To start a back-end for developing:

1. Install Python3.7 and MySQL  
2. Install all packages needed pip install -r requirements.txt (Do not install another version of packages which can help you miss many unwanted mistakes) If multiple version of python are installed, use python3 and pip3 or python3.x and pip3.x instead.  
3. Start MySQL server on localhost:3306, and create a database named "sp90013", i.e., run "CREATE DATABASE sp90013;"  
4. Modify the MySQL username and password config in TeamSPBackend/settings/dev.py and TeamSPBackend/settings/prod.py (don't forget to modify 'DATABASES/default/TEST/PASSWORD' in prod.py)  
5. Create MySQL tables python manage.py migrate. If the database changes, use command python manage.py makemigrations to update metadata of database, then python manage.py migrate to update database structure.  
6. Start server python manage.py runserver,  the back-end is now running on http://127.0.0.1:8000/  

## SciTools Understand

https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/12-2.+Scitools+Understand+Deployment

**Note: Updated for Mac and Windows**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


<h1 id="3.0"> 3.0 Usage </h1>

<h2 id="3.1"> 3.1 API Documentation </h2>

Sprint 0: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/11-1.+Sprint+0%3A+API  

Sprint 1: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/11-2.+Sprint+1%3A+API  

Sprint 2: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/11-3.+Sprint+2%3A+API


<h2 id="3.2"> 3.2 Quality Assurance & Testing </h2>

### Quality Assurance

Functional Testing: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/6-1.+Functional+Testing  

Non-Functional Testing: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/6-2.+Non-functional+Testing  

Acceptance Criteria: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/6-3.+Acceptance+Criteria  

Functional Test Cases: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/6-4.+Functional+Test+Cases  


Frontend Code Review: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/14-2-2.+Frontend+Code+Review  

Backend Code Review: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/14-2-1.+Backend+Code+Review    

### Curl Test

https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/17-2.+Quality+Assurance+and+Testing

<h2 id="3.3"> 3.3 Architecture </h2>

https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/3.+Architecture  

<h2 id="3.4"> 3.4 Library </h2>

Frontend: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/14-3-2.+Frontend+Library  

Backend: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/14-3-1.+Backend+Library  


<h1 id="4.0"> 4.0 Roadmap </h1>

<h2 id="4.1"> 4.1 Design Concepts </h2>

User Stories: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/2-4.+User+Stories  

Use-Case Model: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/2-5.+Use-Case+Model  

Use-Case Specification: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/2-6.+Use-Case+Specification   

Prototype: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/13.+Prototype  

<h2 id="4.2"> 4.2 Product Backlog </h2>

https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/4.+Product+Backlog  


<h1 id="5.0"> 5.0 Contributing </h1>

Final Scope: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/17-1.+Final+Scope+of+the+Project

## 5.1 Coordinator Home Page

Relevant files are: 
src/CoordinatorPage/CoordinatorHomePage.js 
& src/CoordinatorPage/CoordinatorHomePage.css 
& src/CoordinatorPage/ImportProjectPage.js
& src/CoordinatorPage/ImportProjectPage.css
& src/CoordinatorPage/ProjectList.js

The project list page shows all the projects that the coordinator is responsible for. Details of the project provide the information of confluence link and "Delete" buttons. The homepage also supports importing projects by a search bar.

## 5.2 Project Overview Page

Relevant files is: 
src/ProjectPage/ProjectHomePage.js

The form provides student information including student name, student profile, student ID and email address for the project.

## 5.3. Process Quality Page

Relevant files is: 
src/ProjectPage/ProcessQualityPage.js

This part helps coordinators to evaluate the process quality of the project through Jira, Confluence, and Github. Different buttons present different charts of the tool, and the selected button is dark to let the user know which platform is on the screen. By clicking on the Github filter, coordinators can make a view of the line chart of commit times over time. Jira filter illustrates the line chart of items on the To-do-list. The confluence filter shows the line chart of the number of pages.  

## 5.4 Product Quality Page

Relevant files is: 
src/ProjectPage/ProductQualityPage.js

This page helps coordinators to evaluate the product quality based on static code analysis. Includes project name and a list of criteria that measures product quality. 

## 5.5 Communication Page

Relevant files is: 
src/qualityPages/CommunicationQualityPage.js

This page shows the activeness of communication on Confluence and Github. Check the Confluence button, it will show a list of every meeting with meeting time and meeting minutes, the cells of meeting minutes will be links that are able to be clicked. Check the Github card, it will show a line chart of the number of comments over time.

## 5.6 Individual Contribution Page

Relevant files are: 
src/qualityPages/IndividualContributionPage.js
& src/qualityPages/IndividualContributionPage.css

This page helps coordinators to see the proportion of individual contribution directly. It has a drop-down option bar that has a list of student names to select. The button group of three platforms represents Github, Jira, and Confluence. Check the drop-down option bars to see every student’s contribution in the three channels. The contribution is shown in a pie chart. The pie chart shows the contribution of the selected student.

## 5.7 Project Configuration Page 

Relevant files is: 
src/ProjectPage/ProjectSettingsPage.js

This page allows the user to check and update the link of Github, Jira. Paste the link of the two channels on this page to get all the information easily on other pages. 

## 5.8 Login Page 

Relevant files are:
src/LoginRegister/LoginPage.js
& src/LoginRegister/RegisterPage.js

This page is the entry page to an SP project that requires user identification and authentication, performed by entering a username which is an email address and password combination.


<h1 id="6.0"> 6.0 Change Log </h1> 


## Version 1: (2021.April.02)
### 2021.3.27  
•	Initial GitHub Project created  
•	Digital Prototype 1.0 Completed  
•	Digital Prototype 2.0 Completed according to Client’s feedback  
### 2021.4.02  
•	Created Data Sample: JSON format in an API level for each API  


## Version 2: (2021.April.30)
### 2021.4.22  
•	Created configure page  
### 2021.4.24  
•	Communication page UI was finished   
•	Updated UI and added showing history function for configure page  
### 2021.4.26  
•	Finished project overview page  
### 2021.4.27  
•	Changed layout for Individual Page  
•	Coordinator homepage completed a part of API connections with backend   
•	Communication quality page can interact with backend locally  
### 2021.4.28  
•	Coordinator Homepage UI updated  
•	Product quality completed API connections  
•	Updated Coordinator Homepage UI  
### 2021.4.29  
•	Updated API code for Individual Contribution Page  
•	Coordinator Home page removed box shadow  
### 2021.4.30  
•	Modified project homepage  
•	Coordinator homepage local API deployment  
•	Project homepage API code completed  


## Version 3: (2021.May.31)

### 2021.5.01  
•	Bug fix communication quality page  
### 2021.5.05  
•	Product quality API unify testing with backend  

### 2021.5.06  
•	Bugfix communication quality page  
### 2021.5.07  
•	Bugfix communication quality page  
•	Added saving git username and password function  
•	Changed the context of the column of meeting minutes to clickable URLs  
### 2021.5.08  
•	Completed Sprint 2 communication quality page  
### 2021.5.13  
•	Coordinator Homepage UI added a drawer for showing student information  
•	Updated API for Configure page  
### 2021.5.28
•	Added input check   
•	Added a no_meeting_minutes alert message  
•	Updated data sample  

# COMP90082-2021-SM2-Boxjelly

### Branches

#### Branch Name, Features, Author

<pre>
**Home Page**

**Project Overview Page**

**Product Quality Page**
ProductQuality_scitools, ButtonGroup, show directory structure into PolarArea and directory/function metrics into Treemap, jennychen89 <br />

**Process Quality Page**
ProcessQuality, show Jira pie chart & Github, Confluence, Jira modifications/updates calendar heatmap, Line Graph for Time spent in Confluence, jennychen89 <br />

**Communication Page**
feature/Calendar Integration, show calendar for key/meeting dates , Communicaiton Page, breh97 <br />

**Individual Contribution Page**
radar_chart, show individual contribution in the radar chart, Individual Contribution Page, jennychen89 <br />

</pre>


### Tag/Version

#### Version 1: (2021.)

#### Version 2: (2021.)


### Release

