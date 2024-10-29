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


module.exports = app;
