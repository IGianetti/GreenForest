import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCPv81KzBzgQc4P-GNvG9ROOC3n31WRj-k",

  authDomain: "e-commerse-coder.firebaseapp.com",

  projectId: "e-commerse-coder",

  storageBucket: "e-commerse-coder.appspot.com",

  messagingSenderId: "800723002781",

  appId: "1:800723002781:web:c765f33b384350fcb87b74"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);