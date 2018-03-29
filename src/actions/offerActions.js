import axios from 'axios';
import { API_URL } from '../contants';

export const LOAD_OFFERS_REQUEST = "LOAD_OFFERS_REQUEST";
export const LOAD_OFFERS_RESPONSE = "LOAD_OFFERS_RESPONSE";
export const LOAD_OFFERS_STORES_REQUEST = "LOAD_OFFERS_STORES_REQUEST";
export const LOAD_OFFERS_STORES_RESPONSE = "LOAD_OFFERS_STORES_RESPONSE";
export const ADD_OFFER_REQUEST = "ADD_OFFER_REQUEST";
export const ADD_OFFER_RESPONSE = "ADD_OFFER_RESPONSE";
export const EDIT_OFFER_REQUEST = "EDIT_OFFER_REQUEST";
export const EDIT_OFFER_RESPONSE = "EDIT_OFFER_RESPONSE";
export const DELETE_OFFER_REQUEST = "DELETE_OFFER_REQUEST";
export const DELETE_OFFER_RESPONSE = "DELETE_OFFER_RESPONSE";

export const SHOW_ERROR = "SHOW_ERROR";
export const SELECT_OFFER = "SELECT_OFFER";
export const SEARCH_OFFERS = "SEARCH_OFFERS";


function loadOffersRequest() {
    return {
        type: LOAD_OFFERS_REQUEST
    }
};

function loadOffersResponse(offers) {
    return {
        type: LOAD_OFFERS_RESPONSE,
        offers: offers
    }
};

function loadOffersStoresRequest() {
    return {
        type: LOAD_OFFERS_STORES_REQUEST
    }
};

function loadOffersStoresResponse(storeArr, storeMap) {
    return {
        type: LOAD_OFFERS_STORES_RESPONSE,
        storeArr: storeArr,
        storeMap: storeMap
    }
};

function addOfferRequest() {
    return {
        type: ADD_OFFER_REQUEST
    }
};
function addOfferResponse() {
    return {
        type: ADD_OFFER_RESPONSE,
    }
};
function editOfferRequest() {
    return {
        type: EDIT_OFFER_REQUEST
    }
};
function editOfferResponse() {
    return {
        type: EDIT_OFFER_RESPONSE
    }
};

function deleteOfferRequest() {
    return {
        type: DELETE_OFFER_REQUEST
    }
};

function deleteOfferResponse() {
    return {
        type: DELETE_OFFER_RESPONSE
    }
};


export const loadOffers = (productId) => {
    return dispatch => {
        dispatch(loadOffersRequest());
        axios({
            method: 'get',
            url: `${API_URL}/product/${productId}/offers`,
        }).then(response => {
            dispatch(loadOffersResponse(response.data.offers));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const loadOffersStores = () => {
    return dispatch => {
        dispatch(loadOffersStoresRequest());
        axios({
            method: 'get',
            url: `${API_URL}/stores`,
        }).then(response => {
            const store_array = response.data.stores;
            const store_map = store_array.reduce((map, store) => {
                map[store._id] = store;
                return map;
            }, {})
            dispatch(loadOffersStoresResponse(store_array, store_map));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const addOffer = (offer) => {
    return dispatch => {
        dispatch(addOfferRequest());
        axios({
            method: 'post',
            url: `${API_URL}/offers`,
            data: offer
        }).then(response => {
            dispatch(addOfferResponse());
            dispatch(loadOffers(offer.product));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const editOffer = (offerId, changes, productId) => {
    return dispatch => {
        dispatch(editOfferRequest());
        axios({
            method: 'patch',
            url: `${API_URL}/offers/${offerId}`,
            data: changes
        }).then(response => {
            dispatch(editOfferResponse());
            dispatch(loadOffers(productId));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}


export const deleteOffer = (offerId, productId) => {
    return dispatch => {
        dispatch(deleteOfferRequest());
        axios({
            method: 'delete',
            url: `${API_URL}/offers/${offerId}`,
        }).then(response => {
            dispatch(deleteOfferResponse());
            dispatch(loadOffers(productId));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const selectOffer = (offer) => {
    return {
        type: SELECT_OFFER,
        offer: offer
    }
}

export const searchOffersByLocation = (text) => {
    return {
        type: SEARCH_OFFERS,
        text: text
    }
}

function showError(error) {
    if (error.response)
        alert(error.response.data.message);
    else
        alert(error);

    return {
        type: SHOW_ERROR,
        error: error
    }
};


