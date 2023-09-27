import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAQzYvZOp9Z8ofrIDKo40L8uwuLqwcjV3o',
  authDomain: 'crwn-db-8ec60.firebaseapp.com',
  projectId: 'crwn-db-8ec60',
  storageBucket: 'crwn-db-8ec60.appspot.com',
  messagingSenderId: '976808189044',
  appId: '1:976808189044:web:1bef9e619dcca112200521',
  measurementId: 'G-986273QXCS',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log('Error creating the user', err.message);
    }
  }

  return userDocRef;
};
