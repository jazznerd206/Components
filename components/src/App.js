import './App.css';
import SideNav from './SideNav/SideNav.js';
import Registration from './Auth/RegistrationForm.js'
import ParaLanding from './ParaLanding/ParaLanding.js';
import StackView from './StackViewer/StackView.js';
import DragDrop from './DragDrop/DragDrop.js';
import MappedTable from './MappedTable/MappedTable.js';
import ColorShadow from './ColorShadow/ColorShadow.js';
import CustomModal from './CustomModal/CustomModalF.js';
import FileDrop from './FileDrops/FileFunc.js';
import MultiSelectCheckBox from './MultiSelectCheckBox/MultiSelectCheckBox.js';
import Carousel from './Carousel/Carousel.js';
import DataList from './DataList/DataList.js';
import Collapse from './Collapse/Collapse.js';
import CountdownTimer from './CountdownTimer/CountdownTimer.js';
import TreeView from './TreeView/TreeView.js';
import Select from './Select/Select.js';
import StarRating from './StarRating/StarRating';
import Input from './Input/Input';
import Accordion from './Accordion/Accordion';
import AccordionItem from './Accordion/AccordionItem';
import Toggle from './Toggle/Toggle';

// ===================================================
// loader element
const Content = () => {
  return (
      <div>
        <p>Two components walk into a bar, one says:</p>
        <h1>"I'm the dom"</h1>
      </div>
    )
}
// ===================================================



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
  // INCOMPLETE
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
  // INCOMPLETE
  // ===================================================

  // ===================================================
  // CAROUSEL PROPS
  const carouselItems = [
    <div>carousel item 1</div>,
    <div>carousel item 2</div>,
    <div>carousel item 3</div>
  ];
  // ===================================================
  // ===================================================
  // PASSWORD REVEALER
  const names = ['John', 'Paul', 'Mary'];
  // ===================================================

  // ===================================================
  // TREE VIEW DATA PROPS
  let treeData = {
    lorem: {
      ipsum: "dolor sit",
      amet: {
        consectetur: "adipiscing",
        elit: [
          "duis",
          "vitae",
          {
            semper: "orci"
          },
          {
            est: "sed ornare"
          },
          "etiam",
          ["laoreet", "tincidunt"],
          ["vestibulum", "ante"]
        ]
      },
      ipsum: "primis"
    }
  };
  // ===================================================


  // ===================================================
  // SELECT CHOICE PROPS
  let choices = [
    ['grapefruit', 'Grapefruit'],
    ['lime', 'Lime'],
    ['coconut', 'Coconut'],
    ['mango', 'Mango'],
    ['super long text value', 'Super Long Text Value']
  ];
  // ===================================================


  // ===================================================
  // ===================================================
  // ===================================================

  return (
    <div 
      className="App" 
      >
      <SideNav />
      <Toggle />
      {/* <Accordion defaultIndex="1" onItemClick={console.log}>
        <AccordionItem label="First Tab" index="1">
          Lorem ipsum
        </AccordionItem>
        <AccordionItem label="Second Tab" index="2">
          Dolor sit amet
        </AccordionItem>
      </Accordion> */}
      {/* <Input type='text' placeholder='Insert some text here...' callback={(val) => console.log(val)}/> */}
      {/* <StarRating /> */}
      {/* <StarRating rating={2} /> */}
      {/* <Select values={choices} selected='lime' callback={(val) => console.log('component ' + val)} /> */}
      {/* <CountdownTimer seconds={10}/> */}
      {/* <TreeView data={treeData} name='data'/> */}
      {/* <Collapse>
        <h1>Hello world</h1>
        <p>Oye mundo.</p>
      </Collapse> */}
      {/* <DataList data={names} /> */}
      {/* <Carousel carouselItems={carouselItems}/> */}
      {/* <FileDrop handleDrop={console.log}/> */}
      {/* <CustomModal  /> */}
      {/* <Registration /> */}
      {/* <ParaLanding /> */}
      {/* <MappedTable data={people} propertyNames={propertyNames}/> */}
      {/* <div onClick={show(propsToModal)}>
        <ColorShadow />
      </div> */}
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
