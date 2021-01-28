import React, { useState } from 'react';

function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(false);
    const style = {
      on: {
        backgroundColor: "green"
      },
      off: {
        backgroundColor: "grey"
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
