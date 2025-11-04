import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfZu7NuEHoz5qBc3-t1csuVH26IDJ6ORQ",
  authDomain: "spotify-clone-8a46d.firebaseapp.com",
  databaseURL: "https://spotify-clone-8a46d.firebaseio.com",
  projectId: "spotify-clone-8a46d",
  storageBucket: "spotify-clone-8a46d.appspot.com",
  messagingSenderId: "975325124053",
  appId: "1:975325124053:web:dec3dd61dbe7ae0e2e595c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
