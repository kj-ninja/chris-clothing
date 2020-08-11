import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from "../../../store/selectors/shop";

import CollectionItem from "../CollectionItem/CollectionItem";
import {SpinnerContainer, SpinnerOverlay} from "../../UI/Spinner/Spinner.styles";
import './CollectionCategory.scss';

const CollectionCategory = ({collection}) => {
    if (!collection) {
        return (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        );
    }
    const {title, items} = collection;

    return (
        <div className="collection">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item=> (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionCategory);