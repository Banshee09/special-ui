import React, { Component } from "react";

import Spinner from "../components/common/Spinner";
import SearchBar from "../components/common/SearchBar";
import { AddButton } from "../components/common/Buttons";
import CategoryTable from "../components/category/CategoryTable";
import CategoryAddModal from "../components/category/CategoryAddModal";
import CategoryEditModal from "../components/category/CategoryEditModal";
import CategoryDeleteModal from "../components/category/CategoryDeleteModal";


class CategoryMain extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.categoryDispatcher.loadCategories();
    }

    handleAdd() {
        const name = document.getElementById('addCategoryName').value.trim();
        const category = { name: name };
        this.props.categoryDispatcher.addCategory(category);
    }

    handleEdit() {
        const newName = document.getElementById('editCategoryName').value.trim();
        const oldName = this.props.categoryReducer.category.name

        if (newName !== '' && newName !== oldName) {
            const categoryId = this.props.categoryReducer.category._id;
            const changes = [{ key: "name", value: newName }];
            this.props.categoryDispatcher.editCategory(categoryId, changes);
        }
        else
            document.getElementById('editCategoryName').value = '';

    }

    handleDelete() {
        const categoryId = this.props.categoryReducer.category._id;
        this.props.categoryDispatcher.deleteCategory(categoryId);
    };

    handleSearch(event) {
        this.props.categoryDispatcher.searchCategories(event.target.value);
    }

    filterCategories() {
        let categories = this.props.categoryReducer.categories;
        const filter = this.props.categoryReducer.filter.toLowerCase().trim();

        if (filter !== '') {
            categories = this.props.categoryReducer.categories.filter((category) => {
                let name = category.name.toLowerCase().trim();
                if (name.indexOf(filter) > -1)
                    return true;
                else
                    return false;
            })
        }

        return categories;
    }

    render() {

        if (this.props.categoryReducer.isLoading)
            return <Spinner />

        const categories = this.filterCategories();

        return (
            <div id="main">

                <h1>Categories</h1>
                <SearchBar filter={this.props.categoryReducer.filter} handleChange={this.handleSearch} />
                <AddButton />
                <br />
                <br />

                <CategoryTable categories={categories}
                    selectCategory={this.props.categoryDispatcher.selectCategory} />

                <CategoryAddModal handleAdd={this.handleAdd} />

                <CategoryEditModal category={this.props.categoryReducer.category}
                    handleEdit={this.handleEdit} />

                <CategoryDeleteModal category={this.props.categoryReducer.category}
                    handleDelete={this.handleDelete} />

            </div>
        );
    }

};

export default CategoryMain;