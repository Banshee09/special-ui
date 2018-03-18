import {
    LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_RESPONSE,
    ADD_PRODUCT_REQUEST, ADD_PRODUCT_RESPONSE,
    EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_RESPONSE,
    DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_RESPONSE,
    SELECT_PRODUCT, SEARCH_PRODUCTS, SHOW_ERROR
} from "../actions/productActions"

const productReducer = (
    state = {
        isLoading: true,
        products: [],
        product: {},
        filter: ''
    }, action) => {

    let nextProducts = [];
    let nextProduct = {};
    let nextState = {};

    switch (action.type) {
        case LOAD_PRODUCTS_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case LOAD_PRODUCTS_RESPONSE:
            nextProducts = Object.assign([], action.products);
            nextState = Object.assign({}, state, { isLoading: false, products: nextProducts });
            return nextState;

        case ADD_PRODUCT_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case ADD_PRODUCT_RESPONSE:
            nextState = state;
            return nextState;

        case EDIT_PRODUCT_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case EDIT_PRODUCT_RESPONSE:
            nextState = state;
            return nextState;

        case DELETE_PRODUCT_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case DELETE_PRODUCT_RESPONSE:
            nextState = state;
            return nextState;

        case SELECT_PRODUCT:
            nextProduct = Object.assign({}, action.product)
            nextState = Object.assign({}, state, { product: nextProduct });
            return nextState;

        case SEARCH_PRODUCTS:
            nextState = Object.assign({}, state, { filter: action.text });
            return nextState;

        case SHOW_ERROR:
            nextState = Object.assign({}, state, { isLoading: false });
            return nextState;

        default:
            return state;
    }

}

export default productReducer;