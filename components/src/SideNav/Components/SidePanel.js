import React from 'react'

function SidePanel(props) {
    let panelClasses = 'side-panel';
    if (props.show) {
        panelClasses = 'side-panel open';
    }
    return (
        <nav className={panelClasses}>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
      )
}

export default SidePanel;
