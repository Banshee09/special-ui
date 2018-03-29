import axios from 'axios';
import { API_URL } from '../contants';

export const LOAD_CATEGORIES_REQUEST = "LOAD_CATEGORIES_REQUEST";
export const LOAD_CATEGORIES_RESPONSE = "LOAD_CATEGORIES_RESPONSE";
export const ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST";
export const ADD_CATEGORY_RESPONSE = "ADD_CATEGORY_RESPONSE";
export const EDIT_CATEGORY_REQUEST = "EDIT_CATEGORY_REQUEST";
export const EDIT_CATEGORY_RESPONSE = "EDIT_CATEGORY_RESPONSE";
export const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST";
export const DELETE_CATEGORY_RESPONSE = "DELETE_CATEGORY_RESPONSE";

export const SHOW_ERROR = "SHOW_ERROR";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const SEARCH_CATEGORIES = "SEARCH_CATEGORIES";


function loadCategoriesRequest() {
    return {
        type: LOAD_CATEGORIES_REQUEST
    }
};

function loadCategoriesResponse(categories) {
    return {
        type: LOAD_CATEGORIES_RESPONSE,
        categories: categories
    }
};

function addCategoryRequest() {
    return {
        type: ADD_CATEGORY_REQUEST
    }
};
function addCategoryResponse() {
    return {
        type: ADD_CATEGORY_RESPONSE,
    }
};
function editCategoryRequest() {
    return {
        type: EDIT_CATEGORY_REQUEST
    }
};
function editCategoryResponse() {
    return {
        type: EDIT_CATEGORY_RESPONSE
    }
};

function deleteCategoryRequest() {
    return {
        type: DELETE_CATEGORY_REQUEST
    }
};

function deleteCategoryResponse() {
    return {
        type: DELETE_CATEGORY_RESPONSE
    }
};


export const loadCategories = () => {
    return dispatch => {
        dispatch(loadCategoriesRequest());
        axios({
            method: 'get',
            url: `${API_URL}/categories`,
        }).then(response => {
            dispatch(loadCategoriesResponse(response.data.categories));
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const addCategory = (category) => {
    return dispatch => {
        dispatch(addCategoryRequest());
        axios({
            method: 'post',
            url: `${API_URL}/categories`,
            data: category
        }).then(response => {
            dispatch(addCategoryResponse());
            dispatch(loadCategories());
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const editCategory = (categoryId, changes) => {
    return dispatch => {
        dispatch(editCategoryRequest());
        axios({
            method: 'patch',
            url: `${API_URL}/categories/${categoryId}`,
            data: changes
        }).then(response => {
            dispatch(editCategoryResponse());
            dispatch(loadCategories());
        }).catch(error => {
            alert(error.stack);
            dispatch(showError(error));
        })
    }
}


export const deleteCategory = (categoryId) => {
    return dispatch => {
        dispatch(deleteCategoryRequest());
        axios({
            method: 'delete',
            url: `${API_URL}/categories/${categoryId}`,
        }).then(response => {
            dispatch(deleteCategoryResponse());
            dispatch(loadCategories());
        }).catch(error => {
            dispatch(showError(error));
        })
    }
}

export const selectCategory = (category) => {
    return {
        type: SELECT_CATEGORY,
        category: category
    }
}

export const searchCategories = (text) => {
    return {
        type: SEARCH_CATEGORIES,
        text: text
    }
}

function showError(error) {

    if(error.response)
        alert(error.response.data.message);
    else
        alert(error);
            
    return {
        type: SHOW_ERROR,
        error: error
    }
};


