import React, { useState } from 'react';

function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(false);
    const style = {
      on: {
        backgroundColor: "green",
        height: "6em",
        width: '10em',
        boxSizing: 'content-box'
      },
      off: {
        backgroundColor: "grey",
        height: "5em",
        width: '8em',
        boxSizing: 'content-box'
      }
    };
  
    return (
      <button
        onClick={() => setIsToggleOn(!isToggleOn)}
        style={isToggleOn ? style.on : style.off}
      >
        {isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }

export default Toggle;
