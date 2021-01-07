import React, { useState, useEffect } from 'react'

function StackView() {

    const stackStyle = {
        display:'flex',
        flexDirection: 'column',
        listStyleType: 'none'
    }

    const boxStyle = {
        border: '1px solid rgb(0,0,0,.5)',
        padding: '10px 10px',
        minWidth: '100px',
        margin: '0 auto'
    }

    const [ stack, setStack ] = useState([1,2,3]);
    const [ num, setNum ] = useState();

    const numPush = (event) => {
        event.preventDefault();
        setStack(stack => [...stack, num])
        setNum(0);
    }
    const numPop = (event) => {
        event.preventDefault();
        const newStack = [...stack]
        newStack.pop();
        setStack(newStack);
    }

    const stackReturn = () => {
        return stack.length > 0 ? (
            <ul className="stack" style={stackStyle}>
                {stack.map((num, index) => (
                    <li
                        style={boxStyle} 
                        key={index}
                    >
                        {num}
                    </li>
                ))}
            </ul>
    ) : (
        null
    )}
    return (
        <div className="page-container">
            <div className="title">
                <h1>Stack Viewer
                </h1>
            </div>
            <div className="input">
                <label htmlFor="input"></label>
                    <input 
                        name="number" 
                        type="number" 
                        placeholder="number"
                        onChange={event => setNum(event.target.value)}
                    />
                <button onClick={event => numPush(event)}>Push</button>
                <button onClick={event => numPop(event)}>Pop</button>
            </div>
            <div className="stack-holder">
                {stackReturn()}
            </div>
        </div>
    )
}

export default StackView;
