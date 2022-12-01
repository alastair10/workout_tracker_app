Express setup
1) install nodemon globally: npm install -g nodemon

2) add script for 'dev' command in package.json file: "dev": "nodemon" 
  - this allows you to run 'npm run dev' to start the server listening to the port

  - now we need to create something to react to the requests => create a route

3) add route to handle requests that were 'heard'

4) USE environment variable instead of hardcoding the port number
  - add to gitignore
  - need to install node package: npm install dotenv

5) require the dotenv package into server.js file

6) Can now use Postman app to try out different requests (before building them)
  - simulates requests to the server (routes from the API)  

7) Register middleware to log requests


8) Set up routes and route handler fxns
  - can do it in server but cleaner to have own routes folder
  - require them into the server.js file

9) Test routes in Postman
  - get, post, delete, patch endpoints should all return the dummy json text successfully

10) Work on DB
  - set up free online mongodb.com/atlas/database
  - start a new cluster and copy the URL

11) Connect to DB!
  - Install Mongoose to connect to DB
  - helps work on db
  - require mongoose in server.js file
  - connect in server.js file using connection uri
    - check to see if bad env variable shows auth fail

Now we can start interacting w/DB to retrieve, update data (done inside route handler fxns)

12) Create a Schema
  - new models folder, workout.js file
  - need mongoose to create schemas, so require mongoose package.

13) Create a Model

14) use model to create a new document (workout)
  - use a try catch set up
  - define the POST route

15) Test Post route in Postman
  - Body, (raw w/ JSON body)

16) Set up Controller file
  - import the model file
  - when a Post request comes in (routes), we fire the createWorkout fxn (controller)

17) Write fxns to be imported into routes
  - test in postman

18) Use React to make requests to back end API
  - create-react-app frontend  <-- this installs packages and creates folder
  - install react packages 
  - delete unecessary files and imports

19) Install React Router Dom package
  - to add diff pages to application later 
  - in the front end folder: npm install react-router-dom 
    - don't audit fix!