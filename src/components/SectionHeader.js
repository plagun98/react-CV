import React from 'react';
import {Row} from 'reactstrap';

const SectionHeader = (props) => {
  
  return (
    <Row className="section-header">
        <img src={props.imagePath} alt="graduate"/>
        <h2>{props.sectionTitle}</h2>
    </Row>
  );
}

export default SectionHeader;