import React from "react";
import { EditButton, DeleteButton } from "../common/Buttons";

const StoreRow = (props) => {
    const store = props.store;

    const selectRow = () => {
        props.selectStore(store);
    }

    const selectRowAndPreFill = () => {
        props.selectStore(store);
        document.getElementById('editStoreName').value = store.name;
        document.getElementById('editStoreLocation').value = store.location;
    }

    return (

        <tr>
            <td>
                {store.name}<br/>
                {store.location}
            </td>
            <td align='right'>
                <EditButton selectRowAndPreFill={selectRowAndPreFill} />&nbsp;
                <DeleteButton selectRow={selectRow} />
            </td>
        </tr>

    );
}

export default StoreRow;