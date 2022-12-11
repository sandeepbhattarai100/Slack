import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAPGYNPt9ex_UbYUNiXaaRhoSWNx6wL80c",
    authDomain: "slack-d7138.firebaseapp.com",
    projectId: "slack-d7138",
    storageBucket: "slack-d7138.appspot.com",
    messagingSenderId: "321216759865",
    appId: "1:321216759865:web:85d764b69793dc2c07a5e8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth,provider };