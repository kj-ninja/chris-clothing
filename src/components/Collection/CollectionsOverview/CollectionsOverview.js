import React, {useState} from 'react';
import './CollectionsOverview.scss';
import {connect} from 'react-redux';
import AsyncSelect from 'react-select/async';
import {createStructuredSelector} from "reselect";
import {
    selectCollectionsForPreview,
    selectIsCollectionLoading,
    selectItemsFromCollections
} from "../../../store/selectors/shop";
import {sortItems} from "../../../store/actions/shop";
import Spinner from "../../UI/Spinner/Spinner";
import CollectionItem from "../CollectionItem/CollectionItem";
import {Link} from "react-router-dom";
import {toggleCartHidden} from "../../../store/actions/cart";
import CartItem from "../../Cart/CartItem/CartItem";
import CustomButton from "../../UI/CustomButton/CustomButton";

const CollectionsOverview = ({collections, isLoading, items, match, sortItems}) => {
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [visible, setVisible] = useState(12);
    const [filtersOn, setFiltersOn] = useState(false);

    const options = [
        {value: 'az', label: 'Alphabetically, A-Z'},
        {value: 'za', label: 'Alphabetically, Z-A'},
        {value: 'low', label: 'Price, low to high'},
        {value: 'high', label: 'Price, high to low'}
    ];

    if (isLoading) {
        return <Spinner/>;
    }

    const loadMore = () => {
        setVisible(prevState => prevState + 9)
    }


    const handleInputChange = (selectedOption) => {
        if (selectedOption.value === 'az') {
            setSortValue(selectedOption);
            sortItems(items.sort((a, b) => a.name < b.name ? -1 : 1));
        }
        if (selectedOption.value === 'za') {
            setSortValue(selectedOption);
            sortItems(items.sort((a, b) => a.name > b.name ? -1 : 1));
        }
        if (selectedOption.value === 'low') {
            setSortValue(selectedOption);
            sortItems(items.sort((a, b) => a.price - b.price));
        }
        if (selectedOption.value === 'high') {
            setSortValue(selectedOption);
            sortItems(items.sort((a, b) => b.price - a.price));
        }
    };

    const filteredItems = (arr) => {
        return arr.filter(item => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase())
        })
    };

    //TODO: wydzielic dropdown i backdrop do osobnych komponentow!

    return (
        <>
            {filtersOn ? <div className="backdrop" onClick={() => setFiltersOn(false)}/> : null}
            <aside className={`filters-dropdown ${!filtersOn ? '' : 'open'}`}>
                <div className="filters-header">
                    <h4>Filters</h4>
                    <div className="cart-cross" onClick={() => setFiltersOn(false)}/>
                </div>
                <div className="filters-body">
                    <input type="search" value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                           placeholder="Search by name..."
                    />
                    <div className="items-categories">
                        <h4>Choose category</h4>
                        <ul>
                            <li>
                                <Link to={`${match.path}/${collections[0].routeName}`}>Mens
                                    ({collections[0].items.length})</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/${collections[1].routeName}`}>Womens
                                    ({collections[1].items.length})</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/${collections[2].routeName}`}>Hats
                                    ({collections[2].items.length})</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/${collections[3].routeName}`}>Jackets
                                    ({collections[3].items.length})</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/${collections[4].routeName}`}>Sneakers
                                    ({collections[4].items.length})</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </aside>
            <section className="items-overview">
                <aside className="items-filtering">
                    <input type="search" value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                           placeholder="Search by name..."
                    />
                    <div className="items-categories">
                        <h4>Choose category</h4>
                        <ul>
                            <li>
                                <Link to={`${match.path}/${collections[0].routeName}`}>Mens
                                    ({collections[0].items.length})</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/${collections[1].routeName}`}>Womens
                                    ({collections[1].items.length})</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/${collections[2].routeName}`}>Hats
                                    ({collections[2].items.length})</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/${collections[3].routeName}`}>Jackets
                                    ({collections[3].items.length})</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/${collections[4].routeName}`}>Sneakers
                                    ({collections[4].items.length})</Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="items-container">
                    <div className="order-by">
                        <button className="filtering-button" onClick={() => setFiltersOn(true)}>
                            Filters
                        </button>
                        <AsyncSelect
                            defaultOptions={options}
                            cacheOptions
                            placeholder="Sort by..."
                            className="select"
                            onChange={handleInputChange}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary: "black"
                                }
                            })}/>
                    </div>
                    <div className="items-wrapper">
                        {filteredItems(items).slice(0, visible).map(item => (
                            <CollectionItem key={item.id} item={item} className="fade-in"/>
                        ))}
                    </div>
                    {visible < items.length &&
                    <button onClick={loadMore} type="button" className="load-more">Load more</button>
                    }
                </div>
            </section>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
    isLoading: selectIsCollectionLoading,
    items: selectItemsFromCollections
});

export default connect(mapStateToProps, {sortItems})(CollectionsOverview);