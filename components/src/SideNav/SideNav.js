import React, { Component } from 'react';
// import Toolbar from './Toolbar.js'
import './styles.css'

class SideNav extends React.Component {
    state = {
      sideDrawerOpen: false
    };
  
    drawerToggleClickHandler = () => {
      this.setState(prevState => {
        return {
          sideDrawerOpen: !prevState.sideDrawerOpen
        };
      });        
    };
  
    backdropClickHandler = () => {
      this.setState({ sideDrawerOpen: false });
    };
  
    render() {
        let backdrop;
        
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        
        return (
          <div style={{height: '100%'}}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            {/* <main style={{marginTop: '150px'}}>
              <p>This is the content</p>
            </main> */}
          </div>
        )
      }
    }
    
    const Toolbar = props => (
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
      );
      
    const DrawerToggleButton = props => (
        <button className="toggle-button" onClick={props.click}>
          <i className="fas  fa-chevron-circle-down fa-3x"></i>
        </button>
      );
      
    const SideDrawer = props => {
        let drawerClasses = 'side-drawer';
        if (props.show) {
          drawerClasses = 'side-drawer open';
        }
        return (
          <nav className={drawerClasses}>
            <ul>
              <li><a href="/">Products</a></li>
              <li><a href="/">Users</a></li>
            </ul>
          </nav>
        )
      };
      
    const Backdrop = props => (
        <div className="backdrop" onClick={props.click} />
      )

export default SideNav;