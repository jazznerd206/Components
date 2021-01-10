import React, { useState } from 'react';
import Toolbar from './Components/Toolbar.js';
import SidePanel from './Components/SidePanel.js';
import Background from './Components/Background.js';
import './styles.css'

function SideNav() {
  
    const [ reveal, setReveal ] = useState(false);
  
    const toggle = () => {
      setReveal(!reveal);
    };
  
    let background;
    
    if (reveal) {
      background = <Background click={toggle} />;
    }
    
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={toggle} />
        <SidePanel show={reveal} />
        {background}
      </div>
    )
  }

export default SideNav;