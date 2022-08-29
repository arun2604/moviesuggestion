import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }from 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa3_OpVIDih2OZT_LlADXJnLMbdkYRfnQ",
  authDomain: "final-project-9009a.firebaseapp.com",
  projectId: "final-project-9009a",
  storageBucket: "final-project-9009a.appspot.com",
  messagingSenderId: "498559771331",
  appId: "1:498559771331:web:a67fd43bd69436bd0cf876",
  measurementId: "G-M48FGT8GK3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function addUser (email,pass) {
  return createUserWithEmailAndPassword(auth, email, pass);
}

const loginUser = (email, password) => {
  return signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    return userCredential.user;
  })
  .catch((error) => {
    return error
  });
}

export {
  addUser,
  loginUser
}
