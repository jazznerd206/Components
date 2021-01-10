import React, { useRef } from 'react';
import { useCanvas } from './canvas.js';
import '../styles.css'


function Write() {

    const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ] = useCanvas();
    

    return (
        <div>
            <canvas 
                className="App-canvas"
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
            />
        </div>
    )
}

export default Write;
