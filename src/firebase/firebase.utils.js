import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkM_jbHtNmpD4kA5MYHse1DDTDSUa4Rb8",
    authDomain: "clothingstore-5628c.firebaseapp.com",
    projectId: "clothingstore-5628c",
    storageBucket: "clothingstore-5628c.appspot.com",
    messagingSenderId: "697221597299",
    appId: "1:697221597299:web:d21819bd48fcdb1b290206"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth() ;
export const firestore = firebase.firestore() ;

// creating pop up window 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase ;