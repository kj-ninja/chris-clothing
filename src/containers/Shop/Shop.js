import React, {Component} from 'react';
import SHOP_DATA from './shopData';
import CollectionList from "../../components/Collection/CollectionList/CollectionList";
import './Shop.scss';

class Shop extends Component {
    state = {
        collections: SHOP_DATA
    };

    render() {
        const {collections} = this.state;

        return (
            <section className="shop">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionList key={id} {...otherCollectionProps}/>
                ))}
            </section>
        );
    }
}

export default Shop;