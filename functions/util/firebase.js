const firebase = require("firebase");
const firebaseConfig = require("./config");

// initialize firebase app
firebase.initializeApp(firebaseConfig);

module.exports = { firebase };