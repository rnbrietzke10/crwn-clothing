import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, signInWithGoogle, ...otherProps }) => {
  return (
    <button
      onClick={signInWithGoogle}
      className="custom-button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
