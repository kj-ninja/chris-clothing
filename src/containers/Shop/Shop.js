import React from 'react';
import './Shop.scss';
import CollectionsOverview from "../../components/Collection/CollectionsOverview/CollectionsOverview";

const Shop = () => {
    return (
        <section className="shop">
            <CollectionsOverview/>
        </section>
    );
};

export default Shop;