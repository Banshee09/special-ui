import React from "react";

const CategoryAddModal = (props) => {

    const handleClose = () => {
        document.getElementById('addCategoryName').value = '';
    }

    return (
        <div id="addModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" onClick={handleClose}>&times;</button>
                        <h1 className="modal-title">Add a category</h1>
                    </div>

                    <div className="modal-body">
                        <div className="form-group">
                            <label className="control-label" htmlFor="addCategoryName">Name</label>
                            <input type="text" className="form-control" id="addCategoryName" placeholder="Enter Name" />
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

export default CategoryAddModal;