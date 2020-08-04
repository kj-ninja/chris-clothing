import React from 'react';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../../store/selectors/cart';
import {toggleCartHidden} from "../../../store/actions/cart";
import './CartIcon.scss';
import {ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);