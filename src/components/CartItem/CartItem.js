import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
} from './CartItem.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>{`${quantity} x $${price}`}</ItemPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
