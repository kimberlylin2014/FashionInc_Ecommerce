import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDMrmWDftsxjfkcXB4gpNoPGQl2vNAVOhw",
    authDomain: "trendingfashion-2af13.firebaseapp.com",
    databaseURL: "https://trendingfashion-2af13.firebaseio.com",
    projectId: "trendingfashion-2af13",
    storageBucket: "trendingfashion-2af13.appspot.com",
    messagingSenderId: "913905266097",
    appId: "1:913905266097:web:167b0c67d77bf0b2052190"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) {
      return;
  }
  let userRef = firestore.doc(`users/${userAuth.uid}`);
  let userSnapShot = await userRef.get();
  if(!userSnapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
           cart: [],
           displayName,
           email,
           createdAt,
           ...additionalData,
        })
      } catch(error) {
        console.log(`error creating user`, error.message)
      }
  }
  return userRef;
}

export const createCollectionAndDocuments = async (collectionName, items) => {
  // create collectionRef
  const collectionRef = firestore.collection(collectionName);
  // create firestore batch to set multiple objects in database
  const batch = firestore.batch();
  items.forEach(obj => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });
 return await batch.commit();

}

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } , {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}
export default firebase;