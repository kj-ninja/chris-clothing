import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <nav>
                <Link to="/shop" className="navigation-item">SHOP</Link>
                <Link to="/contact" className="navigation-item">CONTACT</Link>
            </nav>
        </header>
    );
};

export default Header;