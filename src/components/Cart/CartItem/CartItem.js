import React from 'react';
import './CartItem.scss';
import {clearItemFromCart, addItem, removeItem} from "../../../store/actions/cart";

const CartItem = ({item, dispatch}) => {
    const {imageUrl, name, quantity, price} = item;

    return (
        <div className="cart-item">
            <div className="cart-cross" onClick={()=>dispatch(clearItemFromCart(item))} style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
                width: '20px',
                height: '20px'
            }}/>
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
                <div className="buttons">
                    <div onClick={()=>dispatch(addItem(item))} >
                        <i className="fas fa-plus"/>
                    </div>
                    <div>{quantity}</div>
                    <div onClick={()=>dispatch(removeItem(item))} >
                        <i className="fas fa-minus"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CartItem);