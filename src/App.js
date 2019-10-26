import React from 'react';
import NavbarMenu from './components/NavbarMenu';
import MainInfo from './components/MainInfo';
import TextInfo from './components/TextInfo';

const App = () => {
  
  return (
    <div>
      <NavbarMenu/>
      <div className="container">
        <MainInfo/>
        <TextInfo/>
      </div>
      
    </div>
  );
}

export default App;