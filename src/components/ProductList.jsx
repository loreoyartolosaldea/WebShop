import React, { useState } from 'react';
import { products as localProducts } from '../seed.js';
import { useCart } from '../context/CartContext';
import '../App.css';

const ProductList = () => {
  const [products, setProducts] = useState(localProducts);
  const { addToCart } = useCart();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card"> {/* <-- KEY GISA 'id' ERABILI */}
          <img src={product.irudi_urla} alt={product.izena} className="product-image" />
          <div className="product-card-content">
            <h3 className="product-name">{product.izena}</h3>
            <p className="product-description">{product.deskribapena}</p>
            <p className="product-price">{product.prezioa.toFixed(2)}€</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Saskira Gehitu
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
