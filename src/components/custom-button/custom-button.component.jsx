import React from 'react';

import { CustumButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, signInWithGoogle, ...props }) => {
  return (
    <CustumButtonContainer onClick={signInWithGoogle}>
      {children}
    </CustumButtonContainer>
  );
};

export default CustomButton;
