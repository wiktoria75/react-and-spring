import React from 'react';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormLayout({ children }) {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <img src={logo} alt="Logo" className="logo img-fluid mb-4" />
          {children}
        </div>
      </div>
    </div>
  );
}

export default FormLayout;