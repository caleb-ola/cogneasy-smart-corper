import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
// require('dotenv').config();

const config = {
  apiKey: "AIzaSyDgLkw0y723sSqQg2I2yFKqQTLq58UxhlQ",
  authDomain: "cogneasy-258aa.firebaseapp.com",
  projectId: "cogneasy-258aa",
  storageBucket: "cogneasy-258aa.appspot.com",
  messagingSenderId: "480503656035",
  appId: "1:480503656035:web:08d0607338063964781256",
  measurementId: "G-D57PQNXZ5P",
};

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };
