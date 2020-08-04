import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../store/selectors/cart";
import {selectCurrentUser} from "../../store/selectors/user";
import {auth} from '../../firebase/firebase';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartIcon from "../Cart/CartIcon/CartIcon";
import CartDropdown from "../Cart/CartDropdown/CartDropdown";
import './Header.scss';

const Header = ({currentUser, hidden}) => {
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
                <CartIcon/>
            </nav>
            {hidden ? null : <CartDropdown/>}
        </header>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);