import React from "react";

const Product = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {isInCart ? (
        <button onClick={() => onRemoveFromCart(product.id)}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
