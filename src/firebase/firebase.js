import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMY7yKHSx-sqWAaGBxA6F9749xfpJOOrk",
    authDomain: "chris-clothing-84c63.firebaseapp.com",
    databaseURL: "https://chris-clothing-84c63.firebaseio.com",
    projectId: "chris-clothing-84c63",
    storageBucket: "chris-clothing-84c63.appspot.com",
    messagingSenderId: "122322872991",
    appId: "1:122322872991:web:3d4772149f50fc0523d0aa"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;