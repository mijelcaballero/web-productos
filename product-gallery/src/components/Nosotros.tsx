import React from 'react';
import { Card } from 'react-bootstrap';

const Nosotros: React.FC = () => {
  return (
    <div className="container">
      <h1>Nosotros</h1>
      <section>
        <h2>Nuestra Historia</h2>
        <p>EQ-TEC nació con la visión de acercar la tecnología de vanguardia a todos los sectores de la sociedad. Fundada en 2010 por un grupo de apasionados de la tecnología, EQ-TEC se ha consolidado como un referente en la venta de productos tecnológicos de alta calidad. 
        Con sede en Quito, Ecuador, la empresa ha logrado expandirse rápidamente gracias a su compromiso con la innovación y su constante búsqueda por ofrecer productos que transformen la vida cotidiana de las personas.</p>
      </section>
      <section>
        <h2>Misión</h2>
        <p>Nuestra misión es proporcionar soluciones tecnológicas innovadoras y accesibles que mejoren la vida de las personas, ayudando a nuestros clientes a adaptarse y sobresalir en un mundo cada vez más digital. 
        Nos enfocamos en ofrecer productos de alta calidad, un excelente servicio al cliente y un compromiso constante con la innovación.</p>
        <h2>Visión</h2>
        <p>Nuestra visión es convertirnos en el líder del mercado tecnológico en América Latina, reconocido por nuestra capacidad de anticipar las necesidades del cliente y por ofrecer productos que faciliten su integración en el futuro digital. 
        Queremos ser la empresa en la que las personas confíen para mejorar su estilo de vida a través de la tecnología.</p>
      </section>
      <section>
        <h2>Nuestros Ejecutivos</h2>
        <div className="row">
          <Card className="col-md-4">
          <Card.Img variant="top" src="/images/CEO1.jpg" alt="Juan Pérez" />
            <Card.Body>
              <Card.Title>Juan Pérez</Card.Title>
              <Card.Text>Ing. de Software </Card.Text>
            </Card.Body>
          </Card>
          {/* Segundo Directivo */}
          <Card className="col-md-4">
          <Card.Img variant="top" src="/images/CEO2.jpg" alt="Adriana Fernandez" />
            <Card.Body>
              <Card.Title>Adriana Fernandez</Card.Title>
              <Card.Text>Analista de Datos </Card.Text>
            </Card.Body>
          </Card>
          {/* Tercer Directivo */}
          <Card className="col-md-4">
          <Card.Img variant="top" src="/images/CEO3.jpg" alt="Edwin Quevedo" />
            <Card.Body>
              <Card.Title>Edwin Quevedo</Card.Title>
              <Card.Text>Ing. de Redes y Telecomunicaciones </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
