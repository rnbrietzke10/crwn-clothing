import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemImg,
  ItemQuantity,
  ItemValue,
  Arrow,
  RemoveButton,
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ItemImg src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className='name'>{name}</span>
      <ItemQuantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <ItemValue>{quantity}</ItemValue>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </ItemQuantity>
      <span className='price'>${price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
