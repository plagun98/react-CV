import React from 'react';
import {Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader';

const SectionEducation = () => {
  
    const educationLogo = require('../img/graduate.png');

    return (
        <div id="education" className="section">
            <SectionHeader imagePath={educationLogo} sectionTitle="Education"/>
            <Row>
                <Col sm={{size: 5, offset: 0}} className="education-item">
                    <img src={require("../img/kpi.png")} alt=""/>
                    <h3>NTUU "Igor Sikorsky KPI" FICT 2015-2019 Bachelor degree</h3>
                </Col>
                <Col sm={{size: 7, offset: 0}} className="education-item">
                    <img className="course-pic" src={require("../img/diploma.jpg")} alt=""/>
                    <h3>Main Academy Front-end course 2018</h3>
                </Col>
            </Row>
        </div>
  );
}

export default SectionEducation;