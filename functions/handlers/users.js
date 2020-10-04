const firebase = require("firebase");
const firebaseConfig = require("../util/config");
const { admin, db } = require("../util/admin");
const { validateSignupData, validateLoginData } = require("../util/validators");

const EMAILEXISTS = "auth/email-already-in-use";

// initialize firebase app
firebase.initializeApp(firebaseConfig);

// sign up handler
let token, userID;
exports.createUser = (req, res) => {
  // validate email, password, first name, last name and role
  const { errors, isValid } = validateSignupData(req.body);
  if (!isValid) return res.status(400).json(errors);

  // create new user
  const newUser = {
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };

  // check if username already exists
  // create user if doesnt exist, otherwise return error
  db.doc(`/users/${newUser.userName}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({
          userName: "this username already exists",
        });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userID = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        createdAt: admin.firestore.Timestamp.fromDate(new Date()),
        email: newUser.email,
        userID: userID,
        userName: newUser.userName,
      };
      return db.doc(`/users/${newUser.userName}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === EMAILEXISTS) {
        return res.status(400).json({
          email: "Email is already in use.",
        });
      } else {
        return res
          .status(500)
          .json({ error: `something went wrong! Error ${err.code}` });
      }
    });
};

// login handler
exports.loginUser = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  // validate email and password
  const { errors, isValid } = validateLoginData(req.body);
  if (!isValid) return res.status(400).json(errors);

  // login if no errors
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => data.user.getIdToken())
    .then((token) => res.json({ token }))
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/wrong-password") {
        return res
          .status(403)
          .json({ general: "Wrong credentials, please try again" });
      } else return res.status(500).json({ error: err.code });
    });
};
