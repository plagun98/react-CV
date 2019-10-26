import React from 'react';
import {Row} from 'reactstrap';
import SectionHeader from './SectionHeader';
import PortfolioItem from './PortfolioItem';

const SectionPortfolio = () => {
  
    const portfolioLogo = require('../img/portfolio.png');
    const aquazisPath = require('../img/aquazis.png');
    const aquaplannerPath = require('../img/aquaplanner.png');

    return (
        <div className="section">
            <SectionHeader imagePath={portfolioLogo} sectionTitle="Portfolio"/>
            <PortfolioItem link="https://aquazis.com/landing" website="Aquazis.com" imagePath={aquazisPath}/>
            <PortfolioItem link="https://aquaplanner.com.ua" website="Aquaplanner.com.ua" imagePath={aquaplannerPath}/>
        </div>
  );
}

export default SectionPortfolio;