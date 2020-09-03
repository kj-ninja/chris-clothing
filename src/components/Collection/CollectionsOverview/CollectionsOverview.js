import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview, selectIsCollectionLoading} from "../../../store/selectors/shop";
import CollectionList from "../CollectionList/CollectionList";
import Spinner from "../../UI/Spinner/Spinner";

const CollectionsOverview = ({collections, isLoading}) => {
    console.log(collections);
    if (isLoading) {
        return <Spinner/>;
    }

    return (
        <section className="collections-overview">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionList key={id} {...otherCollectionProps}/>
            ))}
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
    isLoading: selectIsCollectionLoading
});

export default connect(mapStateToProps)(CollectionsOverview);