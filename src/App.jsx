// src/App.jsx

import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
// Example list of products
const products = [
  {
    id: 1,
    name: "Sony Alpha ILCE-6100Y",
    description:
      "24.2 MP Mirrorless Digital SLR Camera with 16-50 mm & 55-210 mm Zoom Lenses, APS-C Sensor, Fast Auto Focus,Real-time Eye AF,Real-time Tracking, Vlogging & Content Creation -Black",
    price: 598.0,
    image: "https://m.media-amazon.com/images/I/81lghf1fdzL._SX679_.jpg",
  },
  {
    id: 2,
    name: "Canon EOS Rebel T7 DSLR Camera",
    description:
      "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos · 3-Year Protection Plan.",
    price: 549.0,
    image: "https://m.media-amazon.com/images/I/71ZYxtmYkPL._AC_SX466_.jpg",
  },
  {
    id: 3,
    name: "Nikon D7500 DX-Format Digital SLR Body",
    description:
      "DSLR D7500 ; DX. Format ; 20.9. Megapixels ; 8 FPS. Continuous Shooting ; 100 - 51,200. ISO Expandable to 1,640,000 ; 4K UHD. 3840x2160 at 30/25/24p.",
    price: 696.89,
    image: "https://m.media-amazon.com/images/I/813X74rfb1L._AC_SX466_.jpg",
  },
];

const App = () => {
  return (
    <CartProvider>
      <div className="app">
          <h1>React Shopping Cart</h1>
        <ProductList products={products} />
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
