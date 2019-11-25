---------------------------------------------------------------
LIST OF BOOKS App
---------------------------------------------------------------

notes made while coding this app as personal roadmap reference.

1st of all setup git,

then assuming we have
 nodemon
 cuncurrency
 create-react-app
already global-installed on npm 

[in the project folder]

(1) npm init
(2) install express
(3) install mongoose
(4) create-react-app client (it will setup a react app in a folder called "client")


**************************************************************************************************************************************************************
(5) setup the dev management
**************************************************************************************************************************************************************

edit project folder package.json and create a start script

 "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1", // already existing
      "start": "node server.js", // starts run the server.js (or whatever) in node environment
      "client": "cd client && npm run start", // enter the client folder and runs the start script in the client's package.json 
      "server": "nodemon server.js --ignore client/", // runs nodemon only on server (ignores client)    
      "client-install": "cd client && npm install", // automatically install server node packages
      "server-install": "npm install", // automatically install client node packages
      "install-all": "concurrently \"npm run client-install\" \"npm run server-install\"", //automatically installs both server anc client node packages
      "dev": "concurrently \"npm run client\" \"npm run server\"" // runs simultaneously server and client
}
  
now "$ npm run dev" to run both client and server 

edit client folder package.json file and add a proxy after developement array object

"development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
      "proxy":"http://localhost:5000"
**************************************************************************************************************************************************************

(6) setup the server file (server.js) and setup mongo connection
(7) setup the schema (model folder)

**************************************************************************************************************************************************************
(8) setup routes (Create Update Read Delete)
**************************************************************************************************************************************************************

bookRouter.get( '/' , (req , res) => {... Read 

bookRouter.post( '/' , (req , res) => {... Create

bookRouter.delete('/:id' , (req , res) => {... Delete

bookRouter.put('/:id' , (req , res) => {... Update

**************************************************************************************************************************************************************
(9) launch the Backend
**************************************************************************************************************************************************************

a) start mongodb: server $ sudo mongod
b) start the server: $ npm run server

something similar would be good sign:

   > mern_app_books@1.0.0 server /home/ytze/CodeBox/NodeJs/mern_app_books
   > nodemon server --ignore client/

   [nodemon] 2.0.1
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching dir(s): *.*
   [nodemon] watching extensions: js,mjs,json
   [nodemon] starting `node server.js`
   app is running
   listening on port 5000
   succesfully connected to  mongodb://localhost:27017/booksdb

**************************************************************************************************************************************************************
(9) test the Backend
**************************************************************************************************************************************************************
 
