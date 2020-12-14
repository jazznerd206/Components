import React from 'react';

function Backdrop(props) {
    return (
        <div>
            <div className="backdrop" onClick={props.click} />
        </div>
    )
}

export default Backdrop;