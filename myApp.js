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
/*You can respond to requests with a file using the res.sendFile(path) 
method. You can put it inside the app.get('/', ...) route handler. 
Behind the scenes, this method will set the appropriate headers to instruct 
your browser on how to handle the file you want to send, according to its 
type. Then it will read and send the file. This method needs an absolute 
file path. We recommend you to use the Node global variable __dirname to 
calculate the path like this:

Send the /views/index.html file as a response to GET requests to the / 
path. If you view your live app, you should see a big HTML heading (and a 
form that we will use later…), with no style applied.
*/

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})







 module.exports = app;
