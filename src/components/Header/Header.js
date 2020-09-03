import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../store/selectors/cart";
import {signOutStart} from "../../store/actions/user";
import {selectCurrentUser} from "../../store/selectors/user";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartIcon from "../Cart/CartIcon/CartIcon";
import CartDropdown from "../Cart/CartDropdown/CartDropdown";
import {HeaderContainer, LogoContainer, Nav, NavItem, MyHeader} from './Header.styles';
import './Header.scss';

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <>
            <HeaderContainer className="main-container-pos-rel">
                <MyHeader id="myHeader">
                    <div className="header">
                        <LogoContainer to="/">
                            <Logo/>
                        </LogoContainer>
                        <Nav>
                            <NavItem to="/shop">SHOP</NavItem>
                            {currentUser ?
                                <NavItem as='div' onClick={signOutStart}>SIGN OUT</NavItem>
                                :
                                <NavItem to="/login">SIGN IN</NavItem>
                            }
                            <CartIcon/>
                        </Nav>

                    </div>
                </MyHeader>
            </HeaderContainer>
            <CartDropdown hidden={hidden}/>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps, {signOutStart})(Header);