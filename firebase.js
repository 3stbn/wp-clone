import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD40BM2dG_dBr5s2Z4toSiwglDP77gL5qg",
  authDomain: "wp-clone-aa3e3.firebaseapp.com",
  projectId: "wp-clone-aa3e3",
  storageBucket: "wp-clone-aa3e3.appspot.com",
  messagingSenderId: "1072208407815",
  appId: "1:1072208407815:web:80a0d0aa9f0f0c1e82e9a2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
