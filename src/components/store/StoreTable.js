import React from "react";
import StoreRow from "./StoreRow";

const StoreTable = (props) => {
    
    const stores = props.stores;

    return (

        <table className="table table-hover table-striped">
            <thead>
            </thead>
            <tbody>
                {stores.map((store) => {
                    return <StoreRow key={store._id} store={store}
                        selectStore={props.selectStore} />
                })}
            </tbody>
        </table>
    );
}

export default StoreTable;