import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../store/selectors/cart";
import {selectCurrentUser} from "../../store/selectors/user";
import {auth} from '../../firebase/firebase';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartIcon from "../Cart/CartIcon/CartIcon";
import CartDropdown from "../Cart/CartDropdown/CartDropdown";
import {HeaderContainer, LogoContainer, Nav, NavItem} from './Header.styles';

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo/>
            </LogoContainer>
            <Nav>
                <NavItem to="/shop">SHOP</NavItem>
                {/*<Link to="/contact" className="navigation-item">ORDERS</Link>*/}
                {currentUser ?
                    <NavItem as='div' onClick={() => auth.signOut()}>SIGN OUT</NavItem>
                    :
                    <NavItem to="/login">SIGN IN</NavItem>
                }
                <CartIcon/>
            </Nav>
            {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);