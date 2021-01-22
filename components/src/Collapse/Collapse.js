import React from 'react'

function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);
  
    const style = {
      collapsed: {
        display: "none"
      },
      expanded: {
        display: "block"
      },
      buttonStyle: {
        display: "block",
        width: "10%",
        margin: "0 auto"
      },
      container: {
          
      }
    };
  
    return (
      <div style={style.container}>
        <button
          style={style.buttonStyle}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show" : "Hide"} content
        </button>
        <div
          className="collapse-content"
          style={isCollapsed ? style.collapsed : style.expanded}
          aria-expanded={isCollapsed}
        >
          {props.children}
        </div>
      </div>
    );
  }

export default Collapse
