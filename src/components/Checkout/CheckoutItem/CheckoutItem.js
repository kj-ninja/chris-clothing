import React from 'react';
import {connect} from 'react-redux';

import {
    clearItemFromCart,
    addItem,
    removeItem
} from '../../../store/actions/cart';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './CheckoutItem.styles';

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

export default connect(null, {addItem, removeItem, clearItemFromCart})(CheckoutItem);