// load env vars
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const functions = require("firebase-functions");
// const cors = require("cors");
const app = require("express")();

// body parser to send request body properly
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// user handlers
const { createUser, loginUser } = require("./handlers/users");

// Signup Routes
app.post("/signup", createUser);
app.post("/login", loginUser);
app.get("/helloworld", (req, res) => {
    return res.status(200).send("Hello, World!")
});


exports.api = functions.https.onRequest(app);
