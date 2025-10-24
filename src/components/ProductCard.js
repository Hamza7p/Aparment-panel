import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

export default ProductCard;