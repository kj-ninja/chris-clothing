import React from 'react';
import {connect} from 'react-redux';
import {clearCart} from "../../../store/actions/cart";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price, clearCart}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HCiAaHJcvRe5XRZmO2Rfd8E2fGzPVkKVOd15nW0dIHRJVwPb58AaTDrGXltsyQNqoL5PdwPiJzS8GXg6rbcXfKf00m8pmFVkA';

    const onToken = token => {
        console.log(token);
        clearCart();
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Chris Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default connect(null, {clearCart})(StripeButton);