import React from 'react';
import {
  Card, Button, Row, Col
} from 'reactstrap';

const TextInfo = (props) => {
  return (
    <div id="text-info">
        <Row>
            <Col lg={{size: 8, offset: 2}} md={{size: 12, offset: 0}}>
                <Card className="text-info-card">
                    <div>
                        <p>Hello! I am junior front-end developer in Kyiv and I am interested to get full or part time job.
                             The main goal for me now is to get more working experience and to improve my programming skills. </p>
                    </div>
                </Card>
                <Card className="bottom-card">
                    <Row>
                        <Col md={{size: 3, offset: 3}} xs={{size: 5, offset: 1}}><Button href="https://resume.io/r/eW5Enechf" target="_blank" rel="noopener noreferrer" className="button">Watch CV</Button></Col>
                        <Col md="3" xs="5"><Button href="#contacts" className="button">Contact me</Button></Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        
    </div>
  );
};

export default TextInfo;