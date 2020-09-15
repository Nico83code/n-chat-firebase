import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBNwNsssjBU4sc8k6PswUTscDjPnLTcXoU",
    authDomain: "n-chat-41e0f.firebaseapp.com",
    databaseURL: "https://n-chat-41e0f.firebaseio.com",
    projectId: "n-chat-41e0f",
    storageBucket: "n-chat-41e0f.appspot.com",
    messagingSenderId: "211949018629",
    appId: "1:211949018629:web:904b36812f95fe77b5866c",
    measurementId: "G-LJDMSBVZBS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;