import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar" id='navbar' style={{backgroundColor: "#020e62"}}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src={logo} alt="Logo" width="60" height="50"/>
                    <h4 className="ms-2" style={{color: "#fff"}}>G-Y-M</h4>
                </Link>
                <div className="d-flex align-items-center" style={{color: "#fff"}}>
                    <h5 className="me-3">Admin</h5>
                    <Avatar
                        alt="Admin"
                        sx={{ width: 40, height: 40 }}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
