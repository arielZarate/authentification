// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV4yDSbet45a1K7jXCkYZWm3Q7FdrUsqU",
  authDomain: "pruebafirebasereact-91080.firebaseapp.com",
  projectId: "pruebafirebasereact-91080",
  storageBucket: "pruebafirebasereact-91080.appspot.com",
  messagingSenderId: "360709782470",
  appId: "1:360709782470:web:8d3a83b83bea2b4d7490c7",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

//const auth = getAuth(app);

//export { auth };

export default Firebase;
