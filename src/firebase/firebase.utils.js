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


// saving user to the database 

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName , email } = userAuth;
    
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName ,
        email,
        createdAt ,
        ...additionalData ,
      });
    } catch (err) {
      alert("error saving user : " + err);
    }
  }

  return userRef ;
};

// this util function is used to programmatically add collections and documents to firebase 

export const addDocumentsAndCollections = async (collectionName , objectsToAdd) => {

  const collectionRef = firestore.collection(collectionName);

  const batch = firestore.batch() ;

  // batch adding data to collection document
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc() ;
    batch.set(newDocRef , obj);
  })
  
  return await batch.commit();
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth() ;
export const firestore = firebase.firestore() ;

// creating google sign in popup window 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase ;