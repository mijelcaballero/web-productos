// src/components/ProductDetail.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch('/products.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
          }
          return response.json();
        })
        .then((data) => {
          const foundProduct = data.find((item: Product) => item.id === parseInt(id));
          setProduct(foundProduct || null);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al cargar los detalles del producto:', error);
          setLoading(false);
        });
    } else {
      console.error('ID del producto no encontrado');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Cargando detalles del producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Container className="my-4">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="img-fluid mb-3" />
      <p>Precio: ${product.price}</p>
      <Button variant="primary">Comprar</Button>
    </Container>
  );
};

export default ProductDetail;
