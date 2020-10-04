const functions = require("firebase-functions");
// const cors = require("cors");
const app = require("express")();

// user handlers
const { createUser, loginUser } = require("./handlers/users");

// Signup Routes
app.post("/signup", createUser);
app.post("/login", loginUser);

exports.api = functions.https.onRequest(app);
