import * as React from 'react';
import './styles/app.css';
import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import Body from './components/Body';


function App() {

  return (
    <div className="App">

      <NavBar />
      <SideNav />

      <Body />

    </div>
  );
}

export default App;
