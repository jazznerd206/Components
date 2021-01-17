import './App.css';
import Registration from './Auth/RegistrationForm.js'
import ParaLanding from './ParaLanding/ParaLanding.js';
import SideNav from './SideNav/SideNav.js';
import StackView from './StackViewer/StackView.js';
import DragDrop from './DragDrop/DragDrop.js';


const Content = () => {
  return (
      <div>
        <p>Two components walk into a bar, one says:</p>
        <h1>"I'm the dom"</h1>
      </div>
    )
}

function App() {
  return (
    <div 
      className="App" 
    >
      <Registration />
      {/* <ParaLanding /> */}
      {/* <SideNav /> */}
      {/* <StackView /> */}
      {/* <DragDrop /> */}
    </div>
  );
}

export default App;
