import axios from 'axios';
import { API_URL } from '../contants';

export const LOAD_STORES_REQUEST = "LOAD_STORES_REQUEST";
export const LOAD_STORES_RESPONSE = "LOAD_STORES_RESPONSE";
export const ADD_STORE_REQUEST = "ADD_STORE_REQUEST";
export const ADD_STORE_RESPONSE = "ADD_STORE_RESPONSE";
export const EDIT_STORE_REQUEST = "EDIT_STORE_REQUEST";
export const EDIT_STORE_RESPONSE = "EDIT_STORE_RESPONSE";
export const DELETE_STORE_REQUEST = "DELETE_STORE_REQUEST";
export const DELETE_STORE_RESPONSE = "DELETE_STORE_RESPONSE";

export const SHOW_ERROR = "SHOW_ERROR";
export const SELECT_STORE = "SELECT_STORE";
export const SEARCH_STORES_BY_NAME = "SEARCH_STORES_BY_NAME";
export const SEARCH_STORES_BY_LOCATION = "SEARCH_STORES_BY_LOCATION";


function loadStoresRequest() {
    return {
        type: LOAD_STORES_REQUEST
    }
};

function loadStoresResponse(stores) {
    return {
        type: LOAD_STORES_RESPONSE,
        stores: stores
    }
};

function addStoreRequest() {
    return {
        type: ADD_STORE_REQUEST
    }
};
function addStoreResponse() {
    return {
        type: ADD_STORE_RESPONSE,
    }
};
function editStoreRequest() {
    return {
        type: EDIT_STORE_REQUEST
    }
};
function editStoreResponse() {
    return {
        type: EDIT_STORE_RESPONSE
    }
};

function deleteStoreRequest() {
    return {
        type: DELETE_STORE_REQUEST
    }
};

function deleteStoreResponse() {
    return {
        type: DELETE_STORE_RESPONSE
    }
};


export const loadStores = () => {
    return dispatch => {
        dispatch(loadStoresRequest());
        axios({
            method: 'get',
            url: `${API_URL}/stores`,
        }).then(response => {
            dispatch(loadStoresResponse(response.data.stores));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const addStore = (store) => {
    return dispatch => {
        dispatch(addStoreRequest());
        axios({
            method: 'post',
            url: `${API_URL}/stores`,
            data: store
        }).then(response => {
            dispatch(addStoreResponse());
            dispatch(loadStores());
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const editStore = (storeId, changes) => {
    return dispatch => {
        dispatch(editStoreRequest());
        axios({
            method: 'patch',
            url: `${API_URL}/stores/${storeId}`,
            data: changes
        }).then(response => {
            dispatch(editStoreResponse());
            dispatch(loadStores());
        }).catch(error => {
            alert(error.stack);
            dispatch(showError(error));
        })
    }
}

export const deleteStore = (storeId) => {
    return dispatch => {
        dispatch(deleteStoreRequest());
        axios({
            method: 'delete',
            url: `${API_URL}/stores/${storeId}`,
        }).then(response => {
            dispatch(deleteStoreResponse());
            dispatch(loadStores());
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const selectStore = (store) => {
    return {
        type: SELECT_STORE,
        store: store
    }
}

export const searchStoresByName = (text) => {
    return {
        type: SEARCH_STORES_BY_NAME,
        text: text
    }
}

export const searchStoresByLocation = (text) => {
    return {
        type: SEARCH_STORES_BY_LOCATION,
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


