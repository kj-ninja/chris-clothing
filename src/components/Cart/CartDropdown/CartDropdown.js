import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotal} from "../../../store/selectors/cart";
import {toggleCartHidden} from "../../../store/actions/cart";
import CustomButton from "../../UI/CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import './CartDropdown.scss';

const CartDropdown = ({cartItems, history, dispatch, hidden, total}) => {
    return (
        <>
            {!hidden ? <div className="backdrop" onClick={()=>dispatch(toggleCartHidden())}/> : null}
            <aside className={`cart-dropdown ${hidden ? '' : 'open'}`}>
                <div className="cart-header">
                    <h3>Shopping Cart</h3>
                    <div className="cart-cross" onClick={()=>dispatch(toggleCartHidden())}/>
                </div>
                <div className="cart-items">
                    {cartItems.length ?
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} dispatch={dispatch}/>
                        ))
                        : <span className="empty-message">Your cart is empty</span>}
                </div>
                <div className="cart-footer">
                    <div className="cart-checkout">
                        <h3>Subtotal:</h3>
                        <h3>${total}</h3>
                    </div>
                    <CustomButton onClick={() => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                    }}>
                        GO TO CHECKOUT
                    </CustomButton>
                </div>
            </aside>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CartDropdown));