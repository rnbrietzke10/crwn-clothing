import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleClick}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
