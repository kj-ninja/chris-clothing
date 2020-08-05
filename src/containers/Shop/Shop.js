import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from "../../components/Collection/CollectionsOverview/CollectionsOverview";
import './Shop.scss';
import CollectionCategory from "../../components/Collection/CollectionCategory/CollectionCategory";

const Shop = ({match}) => {
    console.log(match);

    return (
        <main className="shop">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionCategory}/>
        </main>
    );
};

export default Shop;