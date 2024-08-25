import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductGallery: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Muestra un estado de carga

  useEffect(() => {
    fetch('/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el archivo JSON");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false); // Detiene la carga cuando los datos estén listos
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setLoading(false); // Detiene la carga incluso si hay un error
      });
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (!products.length) {
    return <div>No hay productos disponibles</div>;
  }

  return (
    <div className="container">
      <h2 className="my-4">Nuestros Productos</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Precio: ${product.price}
                </Card.Text>
                <Button href={`/productos/${product.id}`} variant="primary">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGallery;
