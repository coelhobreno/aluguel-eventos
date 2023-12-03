import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDkqu1Io95T1FlrDv1XUdnF3uWG7KsIYcQ",
  authDomain: "ger-ped-vend-ee843.firebaseapp.com",
  projectId: "ger-ped-vend-ee843",
  storageBucket: "ger-ped-vend-ee843.appspot.com",
  messagingSenderId: "699169714900",
  appId: "1:699169714900:web:91dd1629b7317893120141"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }