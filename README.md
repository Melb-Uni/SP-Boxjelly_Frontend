
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

This page first shows the Member page, which provides student information including student name, student profile, student ID and email address for the project. And it also allows the coordinator to input the GitHub username and Jira username for each student. In addition, when selecting the GitHub table, it will show the whole commit records including the repository, author name, commits, branch name time and the url, of all project members in terms of frontend and backend respectively. When checking the Jira table, it shows the Jira board as well as a table showing activity name, date time, what did they do and the corresponding url. Check the Confluence table, it shows the Confluence page tree and by clicking the page name, it can jump to the Confluence page.

## 5.3 Product Quality Page
This page helps coordinators to evaluate the product quality based on code analysis from Understand SciTools. The buttons are Directory Metrics, Frontend Metrics, and Backend Metrics.

#### Directory Metrics:  

Show Top 10 Countline JavaScript files for frontend and Python files for backend in Polar Area Charts. Compare both frontend and backend directories' number of classes, executable units, files, functions, methods and local methods in Horizontal Bar Chart. Used Radar Chart to demonstrate the composition of lines: code, comment and blank lines for frontend. Declarative code, executable code, comment, and blank lines for backend. Show number of total lines and ratio of
comment to code after these graphs. Compare the number of total statements (declarative/executable) in Radial Bar Charts. A table for the rest of the metrics: path count, cyclomatic, essentail and max nesting. 

#### Frontend & Backend Metrics:

Compare top 10 countline files in Tree Map and allow the coordinator to choose the metrics from the dropdown menu. Available metrics are: CountDeclClass, CountDeclExecutableUnit, CountDeclFunction, CountPath, Cyclomatic, Essential, MaxNesting, CountLine, RatioCommentToCode, CountCodeLine, CountExecutableCodeLine(backend only), CountExecutableCode (backend only), CountBlankLine, CountCommentLine, CountStatement, CountDeclarativeStatement, CountExecutableStatement. Show these ten files in Radar Chart for line comparison and Stacked Bar Chart for statement comparison.

#### Relevant files
src/ProjectPage/ProductQualityPage.js

## 5.4. Process Quality Page

This part helps coordinators to evaluate the process quality of the project through Confluence, Github, and Jira. Different buttons present different charts of the tool, and the selected button is dark to let the user know which platform is on the screen. 

#### Confluence: 

A calendar heatmap that show the update times for each day. One count is around 5 update times. Hover on the day to view date, count value, authors and document titles.

#### GitHub:

A calendar heatmap that show the update times for each day. One count is 1 update time. Hover on the day to view date, count value, authors, sources, commit messages and urls.

A calendar heatmap that show the file changes for each day. One count is 150 line changes. Hover on the day to view date, count value, total file line change, total line addition, total line deletion and source

#### Relevant files

src/ProjectPage/ProcessQualityPage.js

## 5.5 Communication Page

Relevant files is: 
src/qualityPages/CommunicationQualityPage.js

This page shows the activeness of communication on Confluence and Github. Check the Confluence button, it will show a list of every meeting with meeting time and meeting minutes, the cells of meeting minutes will be links that are able to be clicked. Check the Github card, it will show a line chart of the number of comments over time.

## 5.6 Individual Contribution Page

This page helps coordinators to see the proportion of individual contribution directly. The button group represents Task Comparison, User Comparison and More Details. Values are displayed in percentage and they are calculated by divided total team contribution.

#### Task Comparison:

Stacked Bar Chart of the individual document updated times, meeting attendence, number of commits, and number of total line changes. Student names are at the x-axis. Red shade color for Confluence data: individual document updated times and meeting attendence. Blue shade color for GitHub data: individual number of commits and number of total line changes.

#### User Comparison:

Horizontal Stacked Bar Chart of the individual document updated times, meeting attendence, number of commits, and number of total line changes. Tasks are at the y-axis. Radar Chart of the individual document updated times, meeting attendence, number of commits, and number of total line changes. Same color for the same names for these two graphs.

#### More Details:  

Show every team members latest commits and latest document updated in card group. Displayed name, date, username, the latest commit message and url for GitHub commits in a blue border card. Similarly, name, date, document titles and url for Confluence latest document updated in the red border card.

#### Relevant files: 

src/qualityPages/IndividualContributionPage.js  
src/qualityPages/IndividualContributionPage.css

## 5.7 Project Configuration Page 

Relevant files is: 
src/ProjectPage/ProjectSettingsPage.js

This page allows the user to check and update the link of Github, Jira. Paste the link of the two channels on this page to get all the information easily on other pages. 

## 5.8 Login Page 

This page is the entry page to an SP project that requires user identification and authentication, performed by entering a username which is an email address and password combination.

#### Relevant files:  
src/LoginRegister/LoginPage.js  
src/LoginRegister/RegisterPage.js  


<h1 id="6.0"> 6.0 Change Log </h1> 

## Sprint Summary

Sprint 0: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-1.+Sprint+0  

Sprint 1: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2.+Sprint+1   

Sprint 2: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3.+Sprint+2   

## Meeting Summary

Sprint 0: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-1-1.+Sprint+0+Meeting+Summary  

Sprint 1: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-1.+Sprint+1+Meeting+Summary   

Sprint 2: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3-1.+Sprint+2+Meeting+Summary  

## Trello Board

Sprint 0: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-1-2.+Sprint+0+Trello  

Sprint 1: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-2.+Sprint+1+Trello   

Sprint 2: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3-2.+Sprint+2+Trello  

## Sprint Planning

Sprint 0: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-1-3.+Sprint+1+Planning   

Sprint 1: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-8.+Sprint+2+Planning     

## Sprint 1: (2021.August.22 - 2021.09.19)

### Frontend

Project Overview: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-5-1.+Project+Overview+Page  

Product Quality: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-5-2.+Product+Quality+Page    

Process Quality: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-5-3.+Process+Quality+Page  

Communication: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-5-4.+Communication+Quality+Page   

Individual Contribution: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-5-5.+Individual+Contribution+Page       

### Backend

Postman: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-4-1.+Postman+Showcase  

Database: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-2-4-2.+Database+Information    

## Sprint 2: (2021.09.20 - 2021.10.24)

### Frontend

Project Overview: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3-5-1.+Sprint+2+-+Project+Overview+Page    

Product Quality: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3-5-2.+Sprint+2+-+Product+Quality+Page      

Process Quality: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3-5-3.+Sprint+2+-+Process+Quality+Page  

Communication: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3-5-4.+Sprint+2+-+Communication+Quality+page     

Individual Contribution: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3-5-5.+Sprint+2+-+Individual+Contribution+Page        

### Backend

Curl: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3-4-1.+Curl+Showcase 

Database: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/7-3-4-2.+Database      

## Branches

Frontend: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/14-1-2.+Frontend+Branch  

Backend: https://confluence.cis.unimelb.edu.au:8443/display/COMP900822021SM2SP/14-1-1.+Backend+Branch  

### Tag/Version

#### Version 1: (2021.09.19)

Frontend:

#### Version 2: (2021.10.24)

Frontend:  

Backend:  

### Release

Frontend:  

Backend:  
