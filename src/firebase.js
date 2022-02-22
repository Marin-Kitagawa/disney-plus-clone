import firebase from 'firebase';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "disney---clone.firebaseapp.com",
    projectId: "disney---clone",
    storageBucket: "disney---clone.appspot.com",
    messagingSenderId: "947064087754",
    appId: "1:947064087754:web:0eebb0c18913671c880033",
    measurementId: "G-L0BK8MXFRB"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;