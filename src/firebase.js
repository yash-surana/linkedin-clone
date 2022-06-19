import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyNNUi0s0TYtY17_UM-uf_dV1fnGN5Fio",
  authDomain: "linkedinclone-92258.firebaseapp.com",
  projectId: "linkedinclone-92258",
  storageBucket: "linkedinclone-92258.appspot.com",
  messagingSenderId: "273869713983",
  appId: "1:273869713983:web:596f7e040abb17930bbe8a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
const db = firebaseApp.firestore();

export { auth, provider, storage };
export default db;
