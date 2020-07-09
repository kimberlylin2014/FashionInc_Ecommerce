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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

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
  
export default firebase;