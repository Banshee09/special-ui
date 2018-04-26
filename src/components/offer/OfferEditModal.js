import React from "react";

const OfferEditModal = (props) => {

    const offer = props.offer;

    let offerDetail = '';
    if (Object.keys(offer).length !== 0) {
        offerDetail = (
            <div className="form-group">
                <div className="disabled">
                    {offer.store.name}<br />
                    {offer.store.location}<br />
                    {offer.date}
                </div>
            </div>

        );
    }
    return (
        <div id="editModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h1 className="modal-title">Edit a offer</h1>
                    </div>

                    <div className="modal-body">
                        <div className="form-group">
                            <label className="control-label" htmlFor="editOfferPrice">Price</label>
                            <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <input type="text" className="form-control" id="editOfferPrice" />
                            </div>
                        </div>
                        {offerDetail}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.handleEdit}>Save</button>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default OfferEditModal;