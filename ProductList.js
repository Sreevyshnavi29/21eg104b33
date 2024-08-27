import { fetchTopProducts } from '../services/api';
import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    priceRange: [0, 1000],
    rating: 0,
    discount: 0,
  });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchTopProducts(filters.category, filters.company);
      setProducts(data);
    };
    loadProducts();
  }, [filters]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Top Products</h1>
      {/* Filter and sort options here */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <h2>{product.name}</h2>
            <p>Company: {product.company}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
          </div>
        ))}
      </div>
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </div>
  );
};

export default ProductList;
