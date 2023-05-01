import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
      <nav className="navbar bg-body-tertiary" id='navbar'>
          <div className="container-fluid">
              <div className="navbar-brand">
                  <a id="logo" className="navbar-brand" onClick={() => navigate('/')}>GYM LOGO</a>
              </div>
              <div className="navbar-right">
                  <i className="fa-solid fa-circle-user fa-2xl"></i>
              </div>
          </div>
      </nav>
    )
  }
  

export default Navbar