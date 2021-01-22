import './App.css';
import Registration from './Auth/RegistrationForm.js'
import ParaLanding from './ParaLanding/ParaLanding.js';
import SideNav from './SideNav/SideNav.js';
import StackView from './StackViewer/StackView.js';
import DragDrop from './DragDrop/DragDrop.js';
import MappedTable from './MappedTable/MappedTable.js';
import ColorShadow from './ColorShadow/ColorShadow.js';
import CustomModal from './CustomModal/CustomModalF.js';

import MultiSelectCheckBox from './MultiSelectCheckBox/MultiSelectCheckBox.js';


const Content = () => {
  return (
      <div>
        <p>Two components walk into a bar, one says:</p>
        <h1>"I'm the dom"</h1>
      </div>
    )
}

function App() {

  // ==================================================
  // PROPS TO PASS TO MAPPED TABLE COMPONENT
  const people = [
    { name: 'John', surname: 'Smith', age: 42 },
    { name: 'Adam', surname: 'Smith', gender: 'male' }
  ];
  const propertyNames = ['name', 'surname', 'age'];
  // ==================================================

  // ==================================================
  // PROPS TO PASS TO MULTI SELECT CHECK BOX
  const options = [{ label: 'Item One' }, { label: 'Item Two' }];
  // ==================================================

  // ==================================================
  // PROPS TO PASS TO CUSTOM MODAL
  const propsToModal = {
    title: 'Hello, world!',
    closeOnClick: true,
    content: <img src="https://github.com/30-seconds/30-seconds-of-react/blob/master/logo.png"/>
  }
  const show = (data) => {
    document.dispatchEvent(new CustomEvent('modal', {
        detail: {
            data
        }
    }));
  }
  // ===================================================

  return (
    <div 
      className="App" 
      >
      <SideNav />
      <CustomModal  />
      {/* <Registration /> */}
      {/* <ParaLanding /> */}
      {/* <MappedTable data={people} propertyNames={propertyNames}/> */}
      <div onClick={show(propsToModal)}>
        <ColorShadow />
      </div>
      {/* <MultiSelectCheckBox
        options={options}
        onChange={data => {
          console.log(data);
        }}
      /> */}
      {/* <StackView /> */}
      {/* <DragDrop /> */}
    </div>
  );
}

export default App;
