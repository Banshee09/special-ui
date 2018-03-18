import React from "react";
import { Link } from "react-router-dom";

import { EditButton, DeleteButton } from "../common/Buttons";

const CategoryRow = (props) => {
    
    const category = props.category;

    const selectRow = () => {
        props.selectCategory(category);
    }

    const selectRowAndPreFill = () => {
        props.selectCategory(category);
        document.getElementById('editCategoryName').value = category.name;
    }

    return (
        <tr>
            <td>
                <Link to={`/${category.name}/${category._id}/products`} >{category.name}</Link>
            </td>
            <td align='right'>
                <EditButton selectRowAndPreFill={selectRowAndPreFill}/>&nbsp;
                <DeleteButton selectRow={selectRow} />
            </td>
        </tr>
    );
}

export default CategoryRow;