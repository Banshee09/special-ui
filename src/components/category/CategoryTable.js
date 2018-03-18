import React from "react";

import CategoryRow from "./CategoryRow";

const CategoryTable = (props) => {

    let categories = props.categories;

    return (
        <table className="table table-hover table-striped">
            <thead>
            </thead>
            <tbody>
                {categories.map((category) => {
                    return <CategoryRow key={category._id} category={category}
                        selectCategory={props.selectCategory} />
                })}
            </tbody>
        </table>
    );
}

export default CategoryTable;