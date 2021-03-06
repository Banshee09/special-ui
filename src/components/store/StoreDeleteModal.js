import React from "react";

const StoreDeleteModal = (props) => {

    const store = props.store;

    return (
        <div id="deleteModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h1 className="modal-title">Are you sure to delete this store?</h1>
                    </div>

                    <div className="modal-body">
                        <div className="form-group">
                            <div>{store.name}</div>
                            <div>{store.location}</div>
                        </div>
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

export default StoreDeleteModal;