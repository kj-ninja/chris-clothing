import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from "../../../store/selectors/shop";

import CollectionItem from "../CollectionItem/CollectionItem";
import {CollectionPageContainer, CollectionTitle, CollectionItems} from './CollectionCategory.styles';
import Spinner from "../../UI/Spinner/Spinner";

const CollectionCategory = ({collection}) => {
    if (!collection) {
        return (
            <Spinner/>
        );
    }
    const {title, items} = collection;

    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItems>
                {items.map(item=> (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </CollectionItems>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionCategory);
