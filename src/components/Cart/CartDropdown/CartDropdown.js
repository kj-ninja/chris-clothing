import React from 'react';
import './CartDropdown.scss';
import CustomButton from "../../../UI/CustomButton/CustomButton";

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropdown;