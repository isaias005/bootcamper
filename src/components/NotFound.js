import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div className="NotFound text--center">
      <h1>Error <span className="text--secondary">404</span> pagina no encontrada</h1>
      <Link to="/" className="button button--secondary"><i className="fa fa-arrow-left"></i>Volver</Link>
    </div>
  )
}

export default NotFound;