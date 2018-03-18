import {
    LOAD_CATEGORIES_REQUEST, LOAD_CATEGORIES_RESPONSE,
    ADD_CATEGORY_REQUEST, ADD_CATEGORY_RESPONSE,
    EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_RESPONSE,
    DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_RESPONSE,
    SELECT_CATEGORY, SEARCH_CATEGORIES, SHOW_ERROR
} from "../actions/categoryActions"

const categoryReducer = (
    state = {
        isLoading: true,
        categories: [],
        category: {},
        filter: ''
    }, action) => {

    let nextCategories = [];
    let nextCategory = {};
    let nextState = {};

    switch (action.type) {
        case LOAD_CATEGORIES_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case LOAD_CATEGORIES_RESPONSE:
            nextCategories = Object.assign([], action.categories);
            nextState = Object.assign({}, state, { isLoading: false, categories: nextCategories });
            return nextState;

        case ADD_CATEGORY_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case ADD_CATEGORY_RESPONSE:
            nextState = state;
            return nextState;

        case EDIT_CATEGORY_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case EDIT_CATEGORY_RESPONSE:
            nextState = state;
            return nextState;

        case DELETE_CATEGORY_REQUEST:
            nextState = Object.assign({}, state, { isLoading: true });
            return nextState;

        case DELETE_CATEGORY_RESPONSE:
            nextState = state;
            return nextState;

        case SELECT_CATEGORY:
            nextCategory = Object.assign({}, action.category)
            nextState = Object.assign({}, state, { category: nextCategory });
            return nextState;

        case SEARCH_CATEGORIES:
            nextState = Object.assign({}, state, { filter: action.text });
            return nextState;

        case SHOW_ERROR:
            nextState = Object.assign({}, state, { isLoading: false });
            return nextState;

        default:
            return state;
    }

}

export default categoryReducer;