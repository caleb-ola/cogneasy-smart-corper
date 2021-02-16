import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

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
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };
