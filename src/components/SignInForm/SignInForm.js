import { useState } from 'react';

import { useDispatch } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import { SignInContainer, ButtonsContainer } from './SignInForm.styles';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={() => signInWithGoogle()}
            type="button"
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

// import { useState } from 'react';

// import FormInput from '../FormInput/FormInput';
// import Button from '../Button/Button';

// import {
//   signInUserWithEmailAndPassword,
//   signInWithGooglePopUp,
//   createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.utils';

// import './SignInForm.styles.scss';

// const defaultFormFields = {
//   email: '',
//   password: '',
// };
// const SignInForm = () => {
//   const [formFields, setFormFields] = useState(defaultFormFields);

//   const { email, password } = formFields;

//   const signInWithGoogle = async event => {
//     event.preventDefault();
//     const { user } = await signInWithGooglePopUp();
//     await createUserDocumentFromAuth(user);
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     try {
//       const { user } = signInUserWithEmailAndPassword(email, password);

//       setFormFields(defaultFormFields);
//     } catch (err) {
//       switch (err.code) {
//         case 'auth/wrong-password':
//           alert('incorrect password for email');
//           break;
//         case 'auth/user-not-found':
//           alert('no user associated with this email');
//           break;
//         default:
//           console.log(err);
//       }
//     }
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormFields({ ...formFields, [name]: value });
//   };

//   return (
//     <div className='sign-up-container'>
//       <h2>I already have an account</h2>
//       <span>Sign in with your email and password</span>
//       <form onSubmit={handleSubmit}>
//         <FormInput
//           label='Email'
//           type='email'
//           required
//           onChange={handleChange}
//           name='email'
//           value={email}
//         />

//         <FormInput
//           label='Password'
//           type='password'
//           required
//           onChange={handleChange}
//           name='password'
//           value={password}
//         />
//         <div className='buttons-container'>
//           <Button type='submit'>Sign In</Button>
//           <Button type='button' buttonType='google' onClick={signInWithGoogle}>
//             Google sign in
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignInForm;
