// const adminMod = require("firebase-admin")
// const firebaseMod = require("firebase");
// const request = require('supertest');
// const index = require("../index");
// var { firebase } = require("../util/firebase");
// var { admin, db } = require("../util/admin");

// const testConfig = {
//   apiKey: "AIzaSyC2EOH3AwZnUAX_z69CKl7WAy4E0cOrYrk",
//   authDomain: "articulate-test-e753f.firebaseapp.com",
//   databaseURL: "https://articulate-test-e753f-default-rtdb.firebaseio.com",
//   projectId: "articulate-test-e753f",
//   storageBucket: "articulate-test-e753f.appspot.com",
//   messagingSenderId: "513162765329",
//   appId: "1:513162765329:web:13b0d5f590bdeedc66fdb0",
//   measurementId: "G-Z0N2YPRP63"
// };


// const test = require("firebase-functions-test")(
//     {
//         databaseURL: "https://articulate-test-e753f-default-rtdb.firebaseio.com",
//         storageBucket: "articulate-test-e753f.appspot.com",
//         projectId: "articulate-test-e753f",
//     },
//     "../private-key.json"
// );

// describe("testing basic function", () => { });

// let adminStub, firebaseStub;
// beforeAll(() => {
//     admin = jest.fn().mockImplementation(() => adminMod.initializeApp());
//     firebase = jest.fn().mockImplementation(() => firebaseMod.initializeApp(testConfig))
//     db = jest.fn().mockImplementation(() => adminMod.firestore();
//     db.doc(`/users/hannah`)
//         .get()
//         .then((doc) => {
//             if (doc.exists) {
//                 console.log(doc.id, '=>', doc.data());
//             } else {
//                 console.log('No matching documents.');
//             }
//         });  

// });

// afterAll(() => {
//     // adminStub.mockRestore();
//     test.cleanup();
// });

// it("firebase HTML function test", async (done) => {
//     const res = await request(index.api).get('/helloworld')
//     let { ok, status, text } = res
//     expect(ok).toBe(true)
//     expect(status).toEqual(200)
//     expect(text).toEqual("Hello, World!")
//     done()
// });

// it("creates user successfully", (done) => {
//     const newUser = {
//         "email": "user1@gmail.com",
//         "userName": "username1",
//         "password": "123test123!",
//         "confirmPassword": "123test123!",
//     }
//     request(index.api)
//         .post('/signup')
//         .send(newUser)
//         .then((res) => {
//             let { ok, status, error } = res
//             console.log(error)

//             expect(ok).toBe(true)
//             expect(status).toEqual(201)
//             done();
//         })
//         .catch(done)

// });

// attempt 2: 
// const admin = require("firebase-admin")
// const test = require("firebase-functions-test")(
//     {
//         databaseURL: "https://articulate-3fb4b.firebaseio.com",
//         storageBucket: "articulate-3fb4b.appspot.com",
//         projectId: "articulate-3fb4b",
//     },
//     "../private-key.json"
// );


// let myFunctions;
// beforeAll(() => {
//     myFunctions = require('../handlers/users');
// });

// afterAll(() => {
//     // reset the database.
//     admin.database().ref('test-users').remove();
//     // Do cleanup tasks.
//     test.cleanup();

// });

// it('should create user successfully', async (done) => {
//     const newUser = {
//         "email": "user1@gmail.com",
//         "userName": "username1",
//         "password": "123test123!",
//         "confirmPassword": "123test123!",
//         "env": "test",
//     }
//     const req = { body: newUser };

//     const res = {};
//     res.status = jest.fn().mockReturnValue(res);
//     res.json = jest.fn().mockReturnValue(res);

//     await myFunctions.createUser(req, res);
//     expect(res.status).toHaveBeenCalledWith(201);
//     expect(res.json).toBeDefined();
    
// });