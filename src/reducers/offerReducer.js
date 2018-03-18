import {
    LOAD_OFFERS_REQUEST, LOAD_OFFERS_RESPONSE,
    LOAD_OFFERS_STORES_REQUEST, LOAD_OFFERS_STORES_RESPONSE,
    ADD_OFFER_REQUEST, ADD_OFFER_RESPONSE,
    EDIT_OFFER_REQUEST, EDIT_OFFER_RESPONSE,
    DELETE_OFFER_REQUEST, DELETE_OFFER_RESPONSE,
    SELECT_OFFER, SEARCH_OFFERS, SHOW_ERROR
} from "../actions/offerActions"

const offerReducer = (
    state = {
        isLoading: true,
        isLoadingStores: true,
        offers: [],
        offer: {},
        storeMap: {},
        storeArr: [],
        locationFilter: ''
    }, action) => {

    let nextOffers = [];
    let nextOffer = {};
    let nextStoreMap = {};
    let nextStoreArr = [];
    let nextState = {};

    switch (action.type) {
        case LOAD_OFFERS_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case LOAD_OFFERS_RESPONSE:
            nextOffers = Object.assign([], action.offers);
            nextState = Object.assign({}, state, { isLoading: false, offers: nextOffers });
            return nextState;

        case LOAD_OFFERS_STORES_REQUEST:
            nextState = Object.assign({}, state, { isLoadingStores: true });
            return nextState;

        case LOAD_OFFERS_STORES_RESPONSE:
            nextStoreMap = Object.assign({}, action.storeMap);
            nextStoreArr = Object.assign([], action.storeArr);
            nextState = Object.assign({}, state, { isLoadingStores: false, storeMap: nextStoreMap, storeArr: nextStoreArr });
            return nextState;

        case ADD_OFFER_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case ADD_OFFER_RESPONSE:
            nextState = state;
            return nextState;

        case EDIT_OFFER_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case EDIT_OFFER_RESPONSE:
            nextState = state;
            return nextState;

        case DELETE_OFFER_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case DELETE_OFFER_RESPONSE:
            nextState = state;
            return nextState;

        case SELECT_OFFER:
            nextOffer = Object.assign({}, action.offer)
            nextState = Object.assign({}, state, { offer: nextOffer });
            return nextState;

        case SEARCH_OFFERS:
            nextState = Object.assign({}, state, { locationFilter: action.text });
            return nextState;

        case SHOW_ERROR:
            nextState = Object.assign({}, state, { isLoading: false });
            return nextState;

        default:
            return state;
    }

}

export default offerReducer;