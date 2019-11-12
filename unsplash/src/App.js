import React from 'react';
import './App.css';
import NavigationBar from './Components/Navbar';
import navStyle from '../src/style/NavStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from './Components/Images';
import Cover from './Components/Cover';
// import JumboCover from './Components/JumboCover';
function App() {
  return (
    <div>
      <NavigationBar />
      <Cover />
      <Images />
    </div>
  )
}

export default App;
