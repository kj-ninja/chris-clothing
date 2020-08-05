import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../../store/selectors/shop";
import CollectionList from "../CollectionList/CollectionList";

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionList key={id} {...otherCollectionProps}/>
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);