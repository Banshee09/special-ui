import React from "react";

const OfferDeleteModal = (props) => {

    const offer = props.offer;
    let offerDetail = '';

    if (Object.keys(offer).length !== 0) {
        offerDetail = (
            <div className="form-group">
                <div className="price">${offer.price}</div>
                <div>{offer.store.name}</div>
                <div>{offer.store.location}</div>
                <div>{offer.date}</div>
            </div>
        );
    }


    return (
        <div id="deleteModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h1 className="modal-title">Are you sure to delete this offer?</h1>
                    </div>

                    <div className="modal-body">
                        {offerDetail}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={props.handleDelete} >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferDeleteModal;