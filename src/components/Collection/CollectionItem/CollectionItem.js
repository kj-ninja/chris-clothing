import React from 'react';
import {connect} from 'react-redux';
import {addItemToCart} from "../../../store/actions/cart";
import './CollectionItem.scss';
import CustomButton from "../../../UI/CustomButton/CustomButton";

const CollectionItem = ({item, addItemToCart}) => {
    const {imageUrl, name, price} = item;

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={()=>addItemToCart(item)} inverted>Add to cart</CustomButton>
        </div>
    );
};

export default connect(null, {addItemToCart})(CollectionItem);