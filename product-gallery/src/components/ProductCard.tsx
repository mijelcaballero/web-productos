import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} style={{ maxWidth: '200px', height: '200px', objectFit: 'cover' }}/>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
