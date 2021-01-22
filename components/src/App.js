import './App.css';
import Registration from './Auth/RegistrationForm.js'
import ParaLanding from './ParaLanding/ParaLanding.js';
import SideNav from './SideNav/SideNav.js';
import StackView from './StackViewer/StackView.js';
import DragDrop from './DragDrop/DragDrop.js';
import MappedTable from './MappedTable/MappedTable.js';
import ColorShadow from './ColorShadow/ColorShadow.js';


const Content = () => {
  return (
      <div>
        <p>Two components walk into a bar, one says:</p>
        <h1>"I'm the dom"</h1>
      </div>
    )
}

function App() {

  const people = [
    { name: 'John', surname: 'Smith', age: 42 },
    { name: 'Adam', surname: 'Smith', gender: 'male' }
  ];
  const propertyNames = ['name', 'surname', 'age'];

  return (
    <div 
      className="App" 
    >
      {/* <Registration /> */}
      {/* <ParaLanding /> */}
      <SideNav />
      <MappedTable data={people} propertyNames={propertyNames}/>
      <ColorShadow />
      {/* <StackView /> */}
      {/* <DragDrop /> */}
    </div>
  );
}

export default App;
