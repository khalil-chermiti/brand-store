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

// this is used to convert snapshot to an array 
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = async () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth() ;
export const firestore = firebase.firestore() ;

// creating google signin popup window 
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase ;