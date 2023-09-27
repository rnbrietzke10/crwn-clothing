import React from 'react';

const signUpForm = () => {
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <from onSubmit={() => {}}>
        <label>Display Name</label>
        <input type='text' required />
        <label>Email</label>
        <input type='email' required />
        <label>Password</label>
        <input type='password' required />
        <label>Confirm Password</label>
        <input type='password' required />
        <button type='submit'>Sign Up</button>
      </from>
    </div>
  );
};

export default signUpForm;
