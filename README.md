# final-project-crochet-jennifer-o
Unit 2 Final Project Full-Stack Crochet Application

CrochetCorner is your own personal crochet project management hub! This is a full-stack web application where users can add and edit projects to store details that may otherwise be forgotten!

### Technologies used:
* Frontend: JavaScript, React, HTML, CSS, Vite
* Backend: Java, MySQL, Spring Boot

### How I run this site locally:
This repository contains one frontend folder and one backend folder. I open the frontend folder in VS Code and the backend folder in IntelliJ.
I have a MySQL schema named crochet_app that houses table information. The backend gets run first, then "npm run dev" is typed in the VS Code terminal to run the frontend. If local projects exist in the backend, they will appear on the ProjectsPage of the localhost diplay (linked in VS Code terminal). My backend uses Java 21 and Maven.

### If you wish to run this on your own machine:
Take note of the applicatio.properties file found at crochet-app-backend/src/main/resources. Does your IntelliJ configuration environment match your MySQL Worbench information? Do you have a MySQL schema titled "crochet_app"? 
1. download this repositories zip, or clone to your machine "git clone https://github.com/jennyoleary87/final-project-crochet-jennifer-o.git" 
2. Create a MySQL schema in your local root instance named "crochet_app"
3. open the backend folder in IntelliJ (check for Java 21 as project SDK)
4. make sure configuration environment variables match your system (example (mine): name=DB_HOST value=localhost, name=DB_PORT value=3306, name=DB_NAME value=crochet_app)
5. run backend main class
6. open the frontend folder in VS Code
7. in VS Code, open the terminal to install dependencies "npm install" and run "npm run dev"
8. open the linked local host in your browser to view app

### Future features I plan to implement:
* Attach downloadable pattern pdfs
* Image upload functionality
* Search and filtering for the ProjectsPage
* User authentication and profiles
* Journal session entries for each project

Link to wireframes: https://www.figma.com/design/sqEjVfgO3i4f6eMc3W8xNU/Unit-2-Crochet?node-id=0-1&t=HJGQRk0yl6TI0Wvx-1 

Link to ERD models: https://lucid.app/lucidchart/8d528997-67d9-463f-a08a-60f5bc6417fb/edit?viewport_loc=-936%2C878%2C1691%2C821%2C0_0&invitationId=inv_c09f60b7-bbcf-483d-a55f-dd3d7c6d5336 

This project was first created in July 2025.
