import React from 'react';
import {Row, Col} from 'reactstrap';

const SectionCV = () => {
  
  return (
    <div className="section">
        <Row className="section-header">
            <img src={require("../img/graduate.png")} alt="graduate"/>
            <h2>Education</h2>
        </Row>
    </div>
  );
}

export default SectionCV;