import {
    LOAD_STORES_REQUEST, LOAD_STORES_RESPONSE,
    ADD_STORE_REQUEST, ADD_STORE_RESPONSE,
    EDIT_STORE_REQUEST, EDIT_STORE_RESPONSE,
    DELETE_STORE_REQUEST, DELETE_STORE_RESPONSE,
    SEARCH_STORES_BY_NAME, SEARCH_STORES_BY_LOCATION,
    SELECT_STORE, SHOW_ERROR
} from "../actions/storeActions"

const storeReducer = (
    state = {
        isLoading: true,
        stores: [],
        store: {},
        nameFilter: '',
        locationFilter: ''
    }, action) => {

    let nextStores = [];
    let nextStore = {};
    let nextState = {};

    switch (action.type) {
        case LOAD_STORES_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case LOAD_STORES_RESPONSE:
            nextStores = Object.assign([], action.stores);
            nextState = Object.assign({}, state, { isLoading: false, stores: nextStores });
            return nextState;

        case ADD_STORE_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case ADD_STORE_RESPONSE:
            nextState = state;
            return nextState;

        case EDIT_STORE_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case EDIT_STORE_RESPONSE:
            nextState = state;
            return nextState;

        case DELETE_STORE_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case DELETE_STORE_RESPONSE:
            nextState = state;
            return nextState;

        case SELECT_STORE:
            nextStore = Object.assign({}, action.store)
            nextState = Object.assign({}, state, { store: nextStore });
            return nextState;

        case SEARCH_STORES_BY_NAME:
            nextState = Object.assign({}, state, { nameFilter: action.text });
            return nextState;

        case SEARCH_STORES_BY_LOCATION:
            nextState = Object.assign({}, state, { locationFilter: action.text });
            return nextState;

        case SHOW_ERROR:
            nextState = Object.assign({}, state, { isLoading: false });
            return nextState;

        default:
            return state;
    }

}

export default storeReducer;