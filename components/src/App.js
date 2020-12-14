import './App.css';
import SideNav from './SideNav/SideNav.js';


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
    <div className="App">
      <SideNav />
      {/* <Content /> */}
    </div>
  );
}

export default App;
