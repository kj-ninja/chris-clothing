import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../store/selectors/cart";
import './Checkout.scss';
import CheckoutItem from "./CheckoutItem/CheckoutItem";

const Checkout = ({cartItems, total}) => {
    return (
        <section className="checkout-page">
            <div className="checkout-header">
                <div className="checkout-block">
                    <span>Product</span>
                </div>
                <div className="checkout-block">
                    <span>Description</span>
                </div>
                <div className="checkout-block">
                    <span>Quantity</span>
                </div>
                <div className="checkout-block">
                    <span>Price</span>
                </div>
                <div className="checkout-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem=> (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}

            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);