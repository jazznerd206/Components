import React from 'react';
import DrawerToggleButton from './ToggleButton.js';

function Toolbar(props) {
    return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">LOGO</a></div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
          </ul>
        </div>
      </nav>
    </header>
    )
  };

export default Toolbar


