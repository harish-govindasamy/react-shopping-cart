// src/components/Cart.jsx

import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          ))}
            <hr />
            <div className="total-price">
              <h3>Total: ${total.toFixed(2)}</h3>
              </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
