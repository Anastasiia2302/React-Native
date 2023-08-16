import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import "firebase/auth";
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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const storage = getStorage(app);

export { auth, db, storage };
export default app;
