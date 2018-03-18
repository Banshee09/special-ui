import React, { Component } from "react";

import Spinner from "../components/common/Spinner";
import { AddButton } from "../components/common/Buttons";
import SearchBar from "../components/common/SearchBar";
import OfferTable from "../components/offer/OfferTable";
import OfferAddModal from "../components/offer/OfferAddModal"
import OfferEditModal from "../components/offer/OfferEditModal"
import OfferDeleteModal from "../components/offer/OfferDeleteModal"

class OfferMain extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.offerDispatcher.loadOffersStores();
        this.props.offerDispatcher.loadOffers(this.props.productId);
    }
    
    fetchStores() {
        return this.props.offerReducer.offers.map(offer => {
            return Object.assign({}, offer, { store: this.props.offerReducer.storeMap[offer.store] });
        })
    }

    handleAdd() {
        const price = document.getElementById('addOfferPrice').value.trim();
        const storeId = document.getElementById('addOfferStore').value;
        const productId = this.props.productId;
        const offer = { price: price, product: productId, store: storeId };

        this.props.offerDispatcher.addOffer(offer);
    }

    handleEdit() {
        const newPrice = document.getElementById('editOfferPrice').value.trim();
        const oldPrice = this.props.offerReducer.offer.price;

        if (newPrice !== '' && newPrice !== oldPrice) {
            const offerId = this.props.offerReducer.offer._id;
            const productId = this.props.productId;
            const changes = [{ key: "price", value: newPrice }];

            this.props.offerDispatcher.editOffer(offerId, changes, productId);
        }
        else
            document.getElementById('editOfferPrice').value = '';
    }

    handleDelete() {
        const offerId = this.props.offerReducer.offer._id;
        const productId = this.props.productId;
        
        this.props.offerDispatcher.deleteOffer(offerId, productId);
    }

    handleSearch(event) {
        this.props.offerDispatcher.searchOffersByLocation(event.target.value);
    };

    filterOffers(offers) {
        const locationFilter = this.props.offerReducer.locationFilter.toLowerCase().trim();
        let result = offers;
        if (locationFilter !== '') {
            result = offers.filter((offer) => {
                let location = offer.store.location.toLowerCase().trim();
                if (location.indexOf(locationFilter) > -1)
                    return true;
                else
                    return false;
            })
        }
        return result;
    }

    render() {
        if (this.props.offerReducer.isLoading || this.props.offerReducer.isLoadingStores)
            return <Spinner />

        const offers = this.filterOffers(this.fetchStores(this.props.offerReducer.offers));

        return (
            <div id="main">
                <h1>Offers of {this.props.productName}</h1>
                <SearchBar filter={this.props.offerReducer.locationFilter} handleChange={this.handleSearch} field="location" />
                <AddButton />
                <br />
                <br />

                <OfferTable offers={offers}
                    selectOffer={this.props.offerDispatcher.selectOffer} />

                <OfferAddModal handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    filter={this.props.offerReducer.locationFilter}
                    stores={this.props.offerReducer.storeArr} />

                <OfferEditModal offer={this.props.offerReducer.offer}
                    handleEdit={this.handleEdit} />

                <OfferDeleteModal offer={this.props.offerReducer.offer}
                    handleDelete={this.handleDelete} />
            </div>
        );
    }

};

export default OfferMain;