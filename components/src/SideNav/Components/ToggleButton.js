import React from 'react'

function PanelToggleButton(props) {
    return(
        <button className="toggle-button" onClick={props.click}>
            <i className="fas  fa-chevron-circle-right fa-3x"></i>
        </button>
    )
};

export default PanelToggleButton;