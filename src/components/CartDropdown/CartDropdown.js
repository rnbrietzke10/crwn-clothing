import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart.context';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleClick}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
