import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key=>collections[key])
);

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
    )
);

export const selectIsCollectionLoading = createSelector(
    [selectShop],
    shop => shop.loading
);

export const selectItemsFromCollections = createSelector(
    [selectShop],
    shop =>  shop.items
);