import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";
import storeReducer from "./reducers/storeReducer";
import offerReducer from "./reducers/offerReducer";

const store = createStore(
	combineReducers({ categoryReducer, productReducer, storeReducer, offerReducer }),
	{},
	applyMiddleware(logger, thunk)
);

export default store;