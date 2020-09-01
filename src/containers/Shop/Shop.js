import React, {useEffect, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchCollectionsStart} from "../../store/actions/shop";
import './Shop.scss';
import Spinner from "../../components/UI/Spinner/Spinner";

const CollectionsOverviewContainer = lazy(()=> import('../../components/Collection/CollectionsOverview/CollectionOverviewContainer'))
const CollectionCategory = lazy(()=> import('../../components/Collection/CollectionCategory/CollectionCategory'));

const Shop = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <main className="shop">
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionCategory}/>
            </Suspense>
        </main>
    );
};

export default connect(null, {fetchCollectionsStart})(Shop);
