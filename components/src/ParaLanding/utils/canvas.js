import React, { useState, useEffect, useRef } from 'react';

// Scaling Constants for Canvas
const SCALE = 0.1;
const OFFSET = 80;
export const canvasWidth = window.innerWidth * .8;
export const canvasHeight = window.innerHeight * .2;

export function draw(ctx){
  console.log("attempting to draw")
    let counter = 0;
    let dashLen = 100;
    let dashOffset = dashLen;
    let speed = 10;
    let txt = ["Andrew Miller, Full Stack"];
    let x = 30;
    let i = 0;

    ctx.strokeStyle = '#BADA55';
    // ctx.fillStyle = 'red';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;
    ctx.font = "50px Rock Salt"; 
    // ctx.lineWidth = 15;
    ctx.lineJoin = "round";
    // ctx.globalAlpha = 2/3;
    // ctx.strokeStyle = ctx.fillStyle = "red";
    console.log(ctx)
    txt.forEach(word => {
        (function loop() {
            ctx.clearRect(x, 0, 60, 150);
            ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
            dashOffset -= speed;                                         // reduce dash length
            ctx.strokeText(word[i], x + 2, 90);                               // stroke letter
        
            if (dashOffset > 0) requestAnimationFrame(loop);             // animate
            else {
            ctx.fillText(word[i], x + 2, 90);                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            x += ctx.measureText(word[i++]).width + ctx.lineWidth * Math.random();
            ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
            ctx.rotate(Math.random() * 0.005);                         // random rotation
            if (i < word.length) requestAnimationFrame(loop);
            counter++;
            }
        })();
    })
};

export function useCanvas(){
    console.log('canvas')
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(()=>{
        console.log('useeffect')
        const canvasObj = canvasRef.current;
        canvasObj.style.letterSpacing = '5px';
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );
        console.log('before')
        draw(ctx);
        console.log('after')
    });

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ];
}