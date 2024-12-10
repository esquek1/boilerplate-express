// Challenge 5 - dotenv package to load environment variables from the .env 
require('dotenv').config()

let express = require('express');
let app = express();





// Challenge 1 - Meet the Node console
// Print something to the console
// console.log("Hello world");

// Challenge 2 - Start a Working Express Server
// ES6 syntax
// app.get("/", (req, res) => {
//     res.send("Hello Express");
// })

// Challenge 3 - Serve an HTML File
// https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/serve-an-html-file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

// Challenge 4 - Serve Static Assets
app.use("/public", express.static(__dirname + "/public"))

// Challenge 7 - Implement a Root-Level Request Logger Middleware
// https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/implement-a-root-level-request-logger-middleware
// middleware functions (3 args: request object, response object, next function in the apps req-res cycle)

// NOTE: have middleware functions together, then the routes after
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})



// Challenge 5 - Serve JSON on a Specific Route
// https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/serve-json-on-a-specific-route
// Create a simple API by creating a route that responds with JSON at the path "/json"
// app.get("/json", (req, res) => {
    
//     res.json({"message": "HELLO json"});
// })
 
// Challenge 6 - Use the .env File
// https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/use-the--env-file
// Create .env file and add dotenv package 
app.get("/json", (req, res) => {
    res.json({
        "message": process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json"
    })
})

// Challenge 7 - Implement a Root-Level Request Logger Middleware 
//https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/implement-a-root-level-request-logger-middleware
/*
Middleware functions 
- functions that take 3 arguments: 
(request obj, response obj, next function in the apps request-response cycle)
- execute some code that:
(adds info to the req/res obj)
or (end the cycle by sending a res when a condition is met)

If no response is sent when they are done, 
they start execution of the next function in the stack
(triggers calling the 3rd arg, next() )
*/

/* 
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
*/

//TO MOUNT A MIDDLEWARE FUNCTION AT ROOT LEVEL
// app.use(<mware-function>) method
// (function will be executed for all reqs - can specify conditions)

// ex: if you want function to be executed only for POST req, use
// app.post(<mware-function>)


//TODO: build a simple logger
// For every req, it should log to console
// format: method path - ip
// Ex: GET /json - ::ffff:127:0.0.1

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
}) 

module.exports = app;
