import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import logoImg from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from '../services/AuthService'

const Header = () => {

  const { logout } = useUser();
  const navigate = useNavigate();
  const handleLogout = () => { 
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logoImg} alt="Logo" width="120" height="auto" />
          </Link>
          <div className="ml-auto">
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;