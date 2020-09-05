import React, {useState} from 'react';
import './CollectionsOverview.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {
    selectCollectionsForPreview,
    selectIsCollectionLoading,
    selectItemsFromCollections
} from "../../../store/selectors/shop";
import CollectionList from "../CollectionList/CollectionList";
import Spinner from "../../UI/Spinner/Spinner";
import CollectionItem from "../CollectionItem/CollectionItem";
import {CollectionPreview} from "../CollectionList/CollectionList.styles";

const CollectionsOverview = ({collections, isLoading, items}) => {
    const [searchValue, setSearchValue] = useState('');

    if (isLoading) {
        return <Spinner/>;
    }

    console.log(items);

    return (
        <section className="items-overview">
            <div className="items-filtering">
                    <input type="search" value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                           placeholder="Szukaj po nazwie..."
                    />
                    <div className="items-categories">
                        <ul>
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Jackets</li>
                            <li>Sneakers</li>
                            <li>Hats</li>
                        </ul>
                    </div>
                <div className="items-range-tracker">
                    Input range tracker
                </div>
                <div className="items-buttons">
                    <button>filter</button>
                    <button>clear</button>
                </div>
            </div>
            <div className="items-container">
                <div className="order-by">
                    Order by
                </div>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
    isLoading: selectIsCollectionLoading,
    items: selectItemsFromCollections
});

export default connect(mapStateToProps)(CollectionsOverview);