import React from "react";
import { EditButton, DeleteButton } from "../common/Buttons";

const OfferRow = (props) => {

    const offer = props.offer;

    const selectRow = () => {
        props.selectOffer(offer);
    }

    const selectRowAndPreFill = () => {
        props.selectOffer(offer);
        document.getElementById('editOfferPrice').value = offer.price;
    }

    return (

        <tr>
            <td>
                <div className="price">${offer.price}</div>
                {offer.store.name}<br />
                {offer.store.location}<br />
                {offer.date}<br />
            </td>
            <td align='right'>
                <EditButton selectRowAndPreFill={selectRowAndPreFill}/>&nbsp;
                <DeleteButton selectRow={selectRow} />
            </td>
        </tr>

    );
}

export default OfferRow;