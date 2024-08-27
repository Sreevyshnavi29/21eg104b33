import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
      {/* Random image illustration */}
      <img src={`https://picsum.photos/200/300?random=${product.id}`} alt={product.name} />
    </div>
  );
};

export default ProductDetail;
