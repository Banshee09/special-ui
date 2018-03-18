import React from "react";
import OfferRow from "./OfferRow";

const OfferTable = (props) => {
    const offers = props.offers;
    return (

        <table className="table table-hover table-striped">
            <thead>
            </thead>
            <tbody>
                {offers.map( (offer) => {
                    return <OfferRow key={offer._id} offer={offer} selectOffer={props.selectOffer}/>
                })}
            </tbody>
        </table>
    );
}

export default OfferTable;