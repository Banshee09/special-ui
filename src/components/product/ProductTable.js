import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = (props) => {

    const products = props.products;

    return (

        <table className="table table-hover table-striped">
            <thead>
            </thead>
            <tbody>
                {products.map((product) => {
                    return <ProductRow key={product._id} product={product}
                        selectProduct={props.selectProduct} />
                })}
            </tbody>
        </table>
    );
}

export default ProductTable;