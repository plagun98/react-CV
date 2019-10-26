import React from 'react';
import NavbarMenu from './components/NavbarMenu';
import MainInfo from './components/MainInfo';
import TextInfo from './components/TextInfo';
import SectionEducation from './components/SectionCV';
import SectionPortfolio from './components/SectionPortfolio';

const App = () => {
  
  return (
    <div>
      <NavbarMenu/>
      <div className="container">
        <MainInfo/>
        <TextInfo/>
        <SectionEducation/>
        <SectionPortfolio/>
      </div>
      
    </div>
  );
}

export default App;