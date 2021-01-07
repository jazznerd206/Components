import React from 'react';
import Draggable from 'react-draggable'

function DragDrop() {

    const inputStyles = {
        minHeight: '200px',
        background: 'yellow'
    }
    return (
        <div className="wrapper">
            <Draggable>
            <input 
                type="text" 
                style={inputStyles}
                draggable="true"
            >
            </input>
            </Draggable>
        </div>
    )
}

export default DragDrop
