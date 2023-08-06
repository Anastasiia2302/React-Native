import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvlyR1TJxZGMvTCuRVbviQt7E6NovfCu4",
  authDomain: "awesome-project-bfcb5.firebaseapp.com",
  databaseURL: "https://awesome-project-bfcb5-default-rtdb.firebaseio.com",
  projectId: "awesome-project-bfcb5",
  storageBucket: "awesome-project-bfcb5.appspot.com",
  messagingSenderId: "308733091018",
  appId: "1:308733091018:web:4e39787ea186ab95852833",
  measurementId: "G-H4QEZTZ5GD",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
