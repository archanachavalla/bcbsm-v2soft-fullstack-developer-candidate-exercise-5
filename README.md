# BCBSM Full Stack Developer Candidate Coding Exercise
  
## Requirements:
1.	Create a single page web application with a login screen (username, password)
2.	Demonstrate user login and authentication/authorization using Spring WebSecurity with USER and ADMIN roles
3.	Upon login as a USER present the user with the ability to submit feedback with a number rating and a comment. User must be logged in to access this page
4.	Upon login present member with ability to Send an email with an attachment. User must be login to access this page
5.	Create a REST service to send an email and store the email details in a database with the below structure:  
    a.  From Email ID  
    b.  Recipient Email Id  
    c.  Attachment File Name   
    d.  Attachment File  
  	e.  UploadUser  
  	f.  UploadDate
7.	Display success message on web page and show the sent items in a list using angular data table with filters and sorting option
8.	Fork this repository and we will review your code from the fork.
9.  Mandatory to provide a code and workable application walk through 

## Tech Stack:  
    Springboot  
    Angular  
    MongoDB

# To execute this demo:
1. Pull the project into your local and make build
2. To start back end server: Go to the path /userApi and execute "gradle bootrun"
3. To start UI server: Go to the path /userUI and execute "ng serve"
4. 2 users are loaded on server start (Tom Cruise - ADMIN role, John Doe - USER role)
5. Bring up the application in any browser: http://localhost:4200
6. To test as ADMIN, login by tcruise username. Email functionality should be available
7. To test as USER, login by johndoe username. Sending feedback functionality should be available
8. Open http://localhost:8080/userApi/h2-console  to check the database commits 