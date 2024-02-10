import { useNavigate } from "react-router-dom"
import React from 'react';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function StarterPage() {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <img src={logo} alt="Logo" className="logo img-fluid mb-4" />
          <div className="row">
            <div className="col-md-6 mb-2">
              <button className="btn btn-primary btn-lg btn-block" onClick={() => navigate('/login')}>Log In</button>
            </div>
            <div className="col-md-6 mb-2">
              <button className="btn btn-secondary btn-lg btn-block" onClick={() => navigate('/register')}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarterPage;