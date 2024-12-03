import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>Quantity: {item.quantity}</p>
        <p className="price">${item.price}</p>
      </div>
      <div>
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <button onClick={() => increaseQuantity(item)}>+</button>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;