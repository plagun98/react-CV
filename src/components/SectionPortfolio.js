import React from 'react';
import SectionHeader from './SectionHeader';
import PortfolioItem from './PortfolioItem';

const SectionPortfolio = () => {
  
    const portfolioLogo = require('../img/portfolio.png');
    const aquazisPath = require('../img/aquazis.png');
    const aquaplannerPath = require('../img/aquaplanner.png');
    const portfolio1Path = require('../img/mikocin.png');
    const portfolio2Path = require('../img/portfolio2.png');
    const portfolio3Path = require('../img/project3.png');

    return (
        <div className="section">
            <SectionHeader imagePath={portfolioLogo} sectionTitle="Portfolio"/>
            <PortfolioItem link="https://aquazis.com/landing" website="Aquazis.com" imagePath={aquazisPath}/>
            <PortfolioItem link="https://aquaplanner.com.ua" website="Aquaplanner.com.ua" imagePath={aquaplannerPath}/>
            <PortfolioItem link="http://portfolio-project1.kl.com.ua" website="portfolio-project1" imagePath={portfolio1Path}/>
            <PortfolioItem link="http://portfolio-project2.kl.com.ua" website="portfolio-project2" imagePath={portfolio2Path}/>
            <PortfolioItem link="https://portfolio-project3.000webhostapp.com" website="portfolio-project3" imagePath={portfolio3Path}/>
        </div>
  );
}

export default SectionPortfolio;