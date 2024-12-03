// import React from "react";
// import { useCart } from "../context/CartContext";

// const ProductCard = ({ product }) => {
//   const { cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
//   const isInCart = cartItems.some((item) => item.id === product.id);
//   const cartItem = cartItems.find((item) => item.id === product.id);

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <p className="price">${product.price}</p>
//       <div className="button-container">
//         {isInCart ? (
//           <div>
//             <button onClick={() => decreaseQuantity(product.id)}>-</button>
//             <span>{cartItem.quantity}</span>
//             <button onClick={() => increaseQuantity(product.id)}>+</button>
//             <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
//           </div>
//         ) : (
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);
  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <div className="button-container">
        {isInCart ? (
          <div>
            <button onClick={() => decreaseQuantity(product.id)}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => increaseQuantity(product)}>+</button>
            <button onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </button>
          </div>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
