import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './SignIn.styles.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignIn = () => {
  useEffect(() => {
    const signInRedirect = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    signInRedirect();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
