import React, { Component } from "react";

import Spinner from "../components/common/Spinner";
import { AddButton } from "../components/common/Buttons";
import SearchBar from "../components/common/SearchBar";
import ProductTable from "../components/product/ProductTable";
import ProductAddModal from "../components/product/ProductAddModal";
import ProductEditModal from "../components/product/ProductEditModal";
import ProductDeleteModal from "../components/product/ProductDeleteModal";

class ProductMain extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.productDispatcher.loadProducts(this.props.categoryId);
    }

    handleAdd() {
        const name = document.getElementById('addProductName').value.trim();
        const product = { name: name, category: this.props.categoryId, barcode: "0000000000000" };
        this.props.productDispatcher.addProduct(product);
    }

    handleEdit() {
        const newName = document.getElementById('editProductName').value.trim();
        const oldName = this.props.productReducer.product.name;
        const productId = this.props.productReducer.product._id;
        const categoryId = this.props.categoryId;

        if (newName !== '' && newName !== oldName ) {
            const changes = [{ key: "name", value: newName }];
            this.props.productDispatcher.editProduct(productId, changes, categoryId);
        }
        else
            document.getElementById('editCategoryName').value = '';

    }

    handleDelete() {
        const productId = this.props.productReducer.product._id;
        const categoryId = this.props.categoryId;
        this.props.productDispatcher.deleteProduct(productId, categoryId);
    };

    handleSearch(event) {
        this.props.productDispatcher.searchProducts(event.target.value);
    };

    filterProducts() {
        let products = this.props.productReducer.products;
        const filter = this.props.productReducer.filter.toLowerCase().trim();

        if (filter !== '') {
            products = this.props.productReducer.products.filter((product) => {
                let name = product.name.toLowerCase().trim();
                if (name.indexOf(filter) > -1)
                    return true;
                else
                    return false;
            })
        }
        return products;
    }

    render() {
        if (this.props.productReducer.isLoading)
            return <Spinner />

        const products = this.filterProducts();

        return (
            <div id="main">
                <h1>Products of {this.props.categoryName}</h1>
                <SearchBar filter={this.props.productReducer.filter} 
                    handleChange={this.handleSearch} />
                <AddButton />
                <br />
                <br />

                <ProductTable products={products}
                    selectProduct={this.props.productDispatcher.selectProduct} />

                <ProductAddModal handleAdd={this.handleAdd} />

                <ProductEditModal product={this.props.productReducer.product}
                    handleEdit={this.handleEdit} />

                <ProductDeleteModal product={this.props.productReducer.product}
                    handleDelete={this.handleDelete} />

            </div>
        );
    };

};

export default ProductMain;