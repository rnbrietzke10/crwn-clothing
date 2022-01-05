import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KEI7VLruGBnqXwFb11nTHkqa3Fu9AGc1Uj8wsC7Sd6AyyjUTyRd4g1jsgGS0Vx15CaRmKtkVw9Uby4rf9GZmPNF00KDElrbYa';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe} // cents
      panelLabel="Pay Now"
      token={onToken}
      currency="USD"
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
