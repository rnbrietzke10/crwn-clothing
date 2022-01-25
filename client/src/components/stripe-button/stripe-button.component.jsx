import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KEI7VLruGBnqXwFb11nTHkqa3Fu9AGc1Uj8wsC7Sd6AyyjUTyRd4g1jsgGS0Vx15CaRmKtkVw9Uby4rf9GZmPNF00KDElrbYa';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment success');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          'There was an issue with your payment. Please be sure to use the provided credit card.'
        );
      });
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
