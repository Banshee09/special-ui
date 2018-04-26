import React from "react";

const OfferAddModal = (props) => {

    const handleClose = () => {
        document.getElementById('addOfferPrice').value = '';
        document.getElementById('addOfferStore').value = 0;
    }

    let stores = props.stores;
    const locationFilter = props.filter.toLowerCase().trim();
    if (locationFilter !== '') {
        stores = stores.filter((store) => {
            let location = store.location.toLowerCase().trim();
            if (location.indexOf(locationFilter) > -1)
                return true;
            else
                return false;
        })
    }

    return (
        <div id="addModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" onClick={handleClose}>&times;</button>
                        <h1 className="modal-title">Add an offer</h1>
                    </div>

                    <div className="modal-body">
                        <div className="form-group">
                            <label className="control-label" htmlFor="addOfferPrice">Price</label>
                            <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <input type="text" className="form-control" id="addOfferPrice" placeholder="Price" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Location</label>
                            <input className="form-control" placeholder="Enter location to narrow the store list " onChange={props.handleSearch} value={props.filter} />
                        </div>

                        <div className="form-group">
                            <label className="control-label" htmlFor="addOfferStore">Store</label>
                            <select className="form-control" id="addOfferStore">
                                <option value="0">Select a store from the list</option>
                                {stores.map(store => (<option key={store._id} value={store._id}>{store.name} -- {store.location}</option>))}
                            </select>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={handleClose}>Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.handleAdd}>Add</button>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default OfferAddModal;