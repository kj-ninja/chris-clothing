import React from 'react';
import {connect} from 'react-redux';
import {addItem} from "../../../store/actions/cart";

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './CollectionItem.styles';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;

    return (
        <CollectionItemContainer className="collection-item">
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);