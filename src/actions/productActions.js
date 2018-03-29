import axios from 'axios';
import { API_URL } from '../contants';

export const LOAD_PRODUCTS_REQUEST = "LOAD_PRODUCTS_REQUEST";
export const LOAD_PRODUCTS_RESPONSE = "LOAD_PRODUCTS_RESPONSE";
export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_RESPONSE = "ADD_PRODUCT_RESPONSE";
export const EDIT_PRODUCT_REQUEST = "EDIT_PRODUCT_REQUEST";
export const EDIT_PRODUCT_RESPONSE = "EDIT_PRODUCT_RESPONSE";
export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_RESPONSE = "DELETE_PRODUCT_RESPONSE";

export const SHOW_ERROR = "SHOW_ERROR";
export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";


function loadProductsRequest() {
    return {
        type: LOAD_PRODUCTS_REQUEST
    }
};

function loadProductsResponse(products) {
    return {
        type: LOAD_PRODUCTS_RESPONSE,
        products: products
    }
};

function addProductRequest() {
    return {
        type: ADD_PRODUCT_REQUEST
    }
};
function addProductResponse() {
    return {
        type: ADD_PRODUCT_RESPONSE,
    }
};
function editProductRequest() {
    return {
        type: EDIT_PRODUCT_REQUEST
    }
};
function editProductResponse() {
    return {
        type: EDIT_PRODUCT_RESPONSE
    }
};

function deleteProductRequest() {
    return {
        type: DELETE_PRODUCT_REQUEST
    }
};

function deleteProductResponse() {
    return {
        type: DELETE_PRODUCT_RESPONSE
    }
};


export const loadProducts = (categoryId) => {
    return dispatch => {
        dispatch(loadProductsRequest());
        axios({
            method: 'get',
            url: `${API_URL}/category/${categoryId}/products`,
        }).then(response => {
            dispatch(loadProductsResponse(response.data.products));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const addProduct = (product) => {
    return dispatch => {
        dispatch(addProductRequest());
        axios({
            method: 'post',
            url: `${API_URL}/products`,
            data: product
        }).then(response => {
            dispatch(addProductResponse());
            dispatch(loadProducts(product.category));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const editProduct = (productId, changes, categoryId) => {
    return dispatch => {
        dispatch(editProductRequest());
        axios({
            method: 'patch',
            url: `${API_URL}/products/${productId}`,
            data: changes
        }).then(response => {
            dispatch(editProductResponse());
            dispatch(loadProducts(categoryId));
        }).catch(error => {
            alert(error.stack);
            dispatch(showError(error));
        })
    }
}


export const deleteProduct = (productId, categoryId) => {
    return dispatch => {
        dispatch(deleteProductRequest());
        axios({
            method: 'delete',
            url: `${API_URL}/products/${productId}`,
        }).then(response => {
            dispatch(deleteProductResponse());
            dispatch(loadProducts(categoryId));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const selectProduct = (product) => {
    return {
        type: SELECT_PRODUCT,
        product: product
    }
}

export const searchProducts = (text) => {
    return {
        type: SEARCH_PRODUCTS,
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


