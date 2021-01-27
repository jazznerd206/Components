import React from 'react';

function AccordionItem(props) {
    const style = {
      collapsed: {
        display: 'block'
      },
      expanded: {
        display: 'none'
      },
      buttonStyle: {
        color: 'rgb(84,25,38)',
        margin: '10px 10px',
        background: 'radial-gradient(rgb(162, 185, 188, .25), rgb(53, 56, 60, .25))',
        display: 'block',
        width: '10em',
        height: '4em',
        margin: '0 auto',
        border: '2px solid rgb(162, 185, 188)',
        borderRadius: '5px',
        textTransform: 'uppercase',
        fontFamily: 'Comfortaa'
      }
    };
  
    return (
      <div>
        <button style={style.buttonStyle} onClick={() => props.handleClick()}>
          {props.label}
        </button>
        <div
          className="collapse-content"
          style={props.isCollapsed ? style.collapsed : style.expanded}
          aria-expanded={props.isCollapsed}
        >
          {props.children}
        </div>
      </div>
    );
  }

export default AccordionItem;
