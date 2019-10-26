import React from 'react';
import NavbarMenu from './components/NavbarMenu';
import MainInfo from './components/MainInfo';
import TextInfo from './components/TextInfo';
import SectionCV from './components/SectionCV';

const App = () => {
  
  return (
    <div>
      <NavbarMenu/>
      <div className="container">
        <MainInfo/>
        <TextInfo/>
        <SectionCV/>
      </div>
      
    </div>
  );
}

export default App;