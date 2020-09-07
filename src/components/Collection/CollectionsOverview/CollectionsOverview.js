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

// const sortByName = (sortMethod) => {
//     if (sortMethod === 'ascending') {
//         return filteredPokemons(transformedPokemons.sort((a, b) => {
//             return a.name < b.name ? -1 : 1;
//         }));
//     } else {
//         return filteredPokemons(transformedPokemons.sort((a, b) => {
//             return a.name > b.name ? -1 : 1;
//         }));
//     }
// };

const CollectionsOverview = ({collections, isLoading, items, match, sortItems}) => {
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    const options = [
        {value: 'az', label: 'Alphabetically, A-Z'},
        {value: 'za', label: 'Alphabetically, Z-A'},
        {value: 'low', label: 'Price, low to high'},
        {value: 'high', label: 'Price, high to low'}
    ];

    if (isLoading) {
        return <Spinner/>;
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

    return (
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
                {/*<div className="items-range-tracker">*/}
                {/*    Input range tracker*/}
                {/*</div>*/}
                {/*<div className="items-buttons">*/}
                {/*    <button>filter</button>*/}
                {/*    <button>clear</button>*/}
                {/*</div>*/}
            </aside>
            <div className="items-container">
                <div className="order-by">
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
                {filteredItems(items).map(item => (
                    <CollectionItem key={item.id} item={item}/>
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

export default connect(mapStateToProps, {sortItems})(CollectionsOverview);