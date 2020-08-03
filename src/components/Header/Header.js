import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {auth} from '../../firebase/firebase';
import './Header.scss';

const Header = ({currentUser}) => {
    return (
        <header>
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <nav>
                <Link to="/shop" className="navigation-item">SHOP</Link>
                <Link to="/contact" className="navigation-item">CONTACT</Link>
                {
                    currentUser ?
                        <div className="navigation-item" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="navigation-item" to="/login">SIGN IN</Link>
                }
            </nav>
        </header>
    );
};

export default Header;