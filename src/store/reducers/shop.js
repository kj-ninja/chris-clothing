import SHOP_DATA from "../../containers/Shop/shopData";

const initialState = {
    collections: SHOP_DATA
}

const shop = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shop;