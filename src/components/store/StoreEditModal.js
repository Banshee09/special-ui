import React from "react";

const StoreEditModal = (props) => {

    return (
        <div id="editModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" >&times;</button>
                        <h1 className="modal-title">Edit a store</h1>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <input type="text" className="form-control" id="editStoreName" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="editStoreLocation" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" >Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.handleEdit}>Save</button>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default StoreEditModal;