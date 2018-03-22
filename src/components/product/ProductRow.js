import React from "react";
import { Link } from "react-router-dom";
import { EditButton, DeleteButton } from "../common/Buttons";

const ProductRow = (props) => {
    const product = props.product;

    const selectRow = () => {
        props.selectProduct(product);
    }

    const selectRowAndPreFill = () => {
        props.selectProduct(product);
        document.getElementById('editProductName').value = product.name;
    }

    return (

        <tr>
            <td>
                <Link to={`/${product.name}/${product._id}/offers`} >
                    <span className="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>&nbsp;
                    {product.name}
                </Link>
            </td>
            <td align='right'>
                <EditButton selectRowAndPreFill={selectRowAndPreFill} />&nbsp;
                <DeleteButton selectRow={selectRow} />
            </td>
        </tr>

    );
}

export default ProductRow;