import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="container">
      <h1 className="my-4">Bienvenido a RM-TEC</h1>
      
      {/* Carrusel de Ofertas */}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img className="d-block w-100" src="/images/oferta1.jpg" alt="Oferta 1" />
          <Carousel.Caption>
            <h3>Oferta Especial</h3>
            <p>¡Aprovecha nuestras ofertas exclusivas!</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Oferta 2*/}
        <Carousel.Item>
          <img className="d-block w-100" src="/images/oferta2.jpg" alt="Oferta 1" />
          <Carousel.Caption>
            <h3>Oferta Unica</h3>
            <p>¡Los mejores precios!</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Oferta 3*/}
        <Carousel.Item>
          <img className="d-block w-100" src="/images/oferta3.jpg" alt="Oferta 1" />
          <Carousel.Caption>
            <h3>Tecnologia de primer nivel</h3>
            <p>¡Lleva tus productos sin entrada!</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Oferta 4*/}
        <Carousel.Item>
          <img className="d-block w-100" src="/images/oferta4.jpg" alt="Oferta 1" />
          <Carousel.Caption>
            <h3>Lo ultimo en celulares</h3>
            <p>¡Unicamente aqui en EQ-TEC!</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      {/* Carrusel de Productos */}
      <h2 className="my-4">Productos Destacados</h2>
      <Carousel className="mb-4" interval={3000} fade>
        {products.slice(0, 4).map(product => (
          <Carousel.Item key={product.id}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
              <img 
                className="d-block" 
                src={product.image} 
                alt={product.name} 
                style={{ objectFit: 'cover', height: '100%', width: 'auto' }} 
              />
            </div>
            <Carousel.Caption>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Button href={`/productos/${product.id}`} variant="primary">Ver Producto</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
