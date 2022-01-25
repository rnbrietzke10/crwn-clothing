import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  signInWithGoogle,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      onClick={signInWithGoogle}
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
