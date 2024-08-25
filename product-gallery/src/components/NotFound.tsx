import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="container">
      <h1>Error 404</h1>
      <p>La página que buscas no existe.</p>
      <img src="/images/404notfound.jpg" alt="404" />
    </div>
  );
};

export default NotFound;
