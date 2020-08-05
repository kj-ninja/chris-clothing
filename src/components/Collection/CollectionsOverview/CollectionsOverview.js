import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../../store/selectors/shop";
import CollectionList from "../CollectionList/CollectionList";

const CollectionsOverview = ({collections}) => {
    return (
        <section className="collections-overview">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionList key={id} {...otherCollectionProps}/>
            ))}
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);