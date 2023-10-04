import { useContext } from 'react';

import { CartContext } from '../../contexts/Cart.context';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      {cartItems.map(item => (
        <div className='checkout-item'>
          <img src={item.imageUrl} alt={`${item.name}`} />
          <div className='description'>{item.name}</div>
          <div className='quantity'>
            <span> </span>
            {item.quantity}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
