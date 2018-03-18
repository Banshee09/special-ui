import React from "react";

const AddButton = (props) => {
    return (<button type="button" className="btn btn-info" data-toggle="modal" data-target="#addModal">Add</button>);
}

const EditButton = (props) => {
    return (<button type="button" className="btn btn-info" data-toggle="modal" data-target="#editModal" onClick={props.selectRowAndPreFill}>Edit</button>);
}

const DeleteButton = (props) => {
    return (<button type="button" className="btn btn-warning" data-toggle="modal" data-target="#deleteModal" onClick={props.selectRow}>Delete</button>);
}


export { AddButton, EditButton, DeleteButton };