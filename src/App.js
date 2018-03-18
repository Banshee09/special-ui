import React, { Component } from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from "./components/home/Home";
import CategoryMain from "./containers/CategoryMain";
import StoreMain from "./containers/StoreMain";
import ProductMain from "./containers/ProductMain";
import OfferMain from "./containers/OfferMain";
import About from "./components/about/About";

import { loadCategories, addCategory, editCategory, deleteCategory, selectCategory, searchCategories }
    from "./actions/categoryActions";
import { loadProducts, addProduct, editProduct, deleteProduct, selectProduct, searchProducts }
    from "./actions/productActions";
import { loadStores, addStore, editStore, deleteStore, selectStore, searchStoresByName, searchStoresByLocation }
    from "./actions/storeActions";
import { loadOffers, loadOffersStores, addOffer, editOffer, deleteOffer, selectOffer, searchOffersByLocation }
    from "./actions/offerActions";

class App extends Component {

    render() {

        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route path='/categories' render={() => (
                        <CategoryMain categoryReducer={this.props.categoryReducer}
                            categoryDispatcher={this.props.categoryDispatcher} />
                    )} />

                    <Route path='/stores' render={() => (
                        <StoreMain storeReducer={this.props.storeReducer}
                            storeDispatcher={this.props.storeDispatcher} />
                    )} />

                    <Route path='/:category_name/:category_id/products' render={(routeProps) => (
                        <ProductMain categoryId={routeProps.match.params.category_id}
                            categoryName={routeProps.match.params.category_name}
                            productReducer={this.props.productReducer}
                            productDispatcher={this.props.productDispatcher} />
                    )} />

                    <Route path='/:product_name/:product_id/offers' render={(routeProps) => (
                        <OfferMain productId={routeProps.match.params.product_id}
                            productName={routeProps.match.params.product_name}
                            offerReducer={this.props.offerReducer}
                            offerDispatcher={this.props.offerDispatcher} />
                    )} />

                    <Route path='/about' component={About} />

                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categoryReducer: state.categoryReducer,
        productReducer: state.productReducer,
        storeReducer: state.storeReducer,
        offerReducer: state.offerReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        categoryDispatcher: {
            loadCategories: () => {
                dispatch(loadCategories());
            },
            addCategory: (category) => {
                dispatch(addCategory(category));
            },
            editCategory: (categoryId, changes) => {
                dispatch(editCategory(categoryId, changes));
            },
            deleteCategory: (categoryId) => {
                dispatch(deleteCategory(categoryId));
            },
            selectCategory: (category) => {
                dispatch(selectCategory(category));
            },
            searchCategories: (text) => {
                dispatch(searchCategories(text));
            }
        },
        productDispatcher: {
            loadProducts: (categoryId) => {
                dispatch(loadProducts(categoryId));
            },
            addProduct: (product) => {
                dispatch(addProduct(product));
            },
            editProduct: (productId, changes, categoryId) => {
                dispatch(editProduct(productId, changes, categoryId));
            },
            deleteProduct: (productId, categoryId) => {
                dispatch(deleteProduct(productId, categoryId));
            },
            selectProduct: (product) => {
                dispatch(selectProduct(product));
            },
            searchProducts: (text) => {
                dispatch(searchProducts(text));
            }
        },
        storeDispatcher: {
            loadStores: () => {
                dispatch(loadStores());
            },
            addStore: (store) => {
                dispatch(addStore(store));
            },
            editStore: (storeId, changes) => {
                dispatch(editStore(storeId, changes));
            },
            deleteStore: (storeId) => {
                dispatch(deleteStore(storeId));
            },
            selectStore: (store) => {
                dispatch(selectStore(store));
            },
            searchStoresByName: (text) => {
                dispatch(searchStoresByName(text));
            },
            searchStoresByLocation: (text) => {
                dispatch(searchStoresByLocation(text));
            }
        },
        offerDispatcher: {
            loadOffers: (productId) => {
                dispatch(loadOffers(productId));
            },
            loadOffersStores: () => {
                dispatch(loadOffersStores());
            },
            addOffer: (offer) => {
                dispatch(addOffer(offer));
            },
            editOffer: (offerId, changes, productId) => {
                dispatch(editOffer(offerId, changes, productId));
            },
            deleteOffer: (offerId, productId) => {
                dispatch(deleteOffer(offerId, productId));
            },
            selectOffer: (offer) => {
                dispatch(selectOffer(offer));
            },
            searchOffersByLocation: (text) => {
                dispatch(searchOffersByLocation(text));
            }
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

