import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart.context';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleClick}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
