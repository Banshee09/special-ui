import React, { Component } from "react";

import Spinner from "../components/common/Spinner";
import SearchBar from "../components/common/SearchBar";
import { AddButton } from "../components/common/Buttons";
import StoreTable from "../components/store/StoreTable";
import StoreAddModal from "../components/store/StoreAddModal";
import StoreEditModal from "../components/store/StoreEditModal";
import StoreDeleteModal from "../components/store/StoreDeleteModal";


class StoreMain extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSearchByName = this.handleSearchByName.bind(this);
        this.handleSearchByLocation = this.handleSearchByLocation.bind(this);
    }

    componentDidMount() {
        this.props.storeDispatcher.loadStores();
    }

    handleAdd() {
        const name = document.getElementById('addStoreName').value.trim();
        const location = document.getElementById('addStoreLocation').value.trim();
        const store = { name: name, location: location }

        this.props.storeDispatcher.addStore(store);
    };

    handleEdit() {
        const store = this.props.storeReducer.store;
        const newName = document.getElementById('editStoreName').value.trim();
        const newLocation = document.getElementById('editStoreLocation').value.trim();

        const changes = [];
        if (newName !== '' && newName !== store.name)
            changes.push({ key: "name", value: newName });

        if (newLocation !== '' && newLocation !== store.location)
            changes.push({ key: "location", value: newLocation });

        if (changes.length > 0)
            this.props.storeDispatcher.editStore(store._id, changes);
        else {
            document.getElementById('editStoreName').value = '';
            document.getElementById('editStoreLocation').value = '';
        }
    };

    handleDelete() {
        const store = this.props.storeReducer.store;
        this.props.storeDispatcher.deleteStore(store._id);
    };

    handleSearchByName(event) {
        this.props.storeDispatcher.searchStoresByName(event.target.value);
    }

    handleSearchByLocation(event) {
        this.props.storeDispatcher.searchStoresByLocation(event.target.value);
    }

    filterStore() {
        let stores = this.props.storeReducer.stores;

        const nameFilter = this.props.storeReducer.nameFilter.toLowerCase().trim();
        if (nameFilter !== '') {
            stores = this.props.storeReducer.stores.filter((store) => {
                let name = store.name.toLowerCase().trim();
                if (name.indexOf(nameFilter) > -1)
                    return true;
                else
                    return false;
            })
        }

        const locationFilter = this.props.storeReducer.locationFilter.toLowerCase().trim();
        if (locationFilter !== '') {
            stores = this.props.storeReducer.stores.filter((store) => {
                let location = store.location.toLowerCase().trim();
                if (location.indexOf(locationFilter) > -1)
                    return true;
                else
                    return false;
            })
        }

        return stores;
    }


    render() {

        if (this.props.storeReducer.isLoading)
            return <Spinner />

        const stores = this.filterStore();

        return (
            <div id="main">

                <h1>Stores</h1>
                <SearchBar filter={this.props.storeReducer.nameFilter}
                    handleChange={this.handleSearchByName} field="name" />
                <SearchBar filter={this.props.storeReducer.locationFilter}
                    handleChange={this.handleSearchByLocation} field="location" />
                <AddButton />
                <br />
                <br />

                <StoreTable stores={stores}
                    selectStore={this.props.storeDispatcher.selectStore} />

                <StoreAddModal handleAdd={this.handleAdd} />

                <StoreEditModal store={this.props.storeReducer.store}
                    handleEdit={this.handleEdit} />

                <StoreDeleteModal store={this.props.storeReducer.store}
                    handleDelete={this.handleDelete} />

            </div>
        );
    }

};

export default StoreMain;