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
                            My professional skills: strong knowledge of HTML5/CSS3, basic knowledge of Javascript, jQuery, Ajax, plugin integration, 
                            crossbrowser and responsive coding. For website development I use Gulp, less, git, Zeplin. 
                            Knowledge of foreign languages: English - intermediate, German - beginner.</p>
                    </div>
                </Card>
                <Card className="bottom-card">
                    <Row>
                        <Col><Button className="button">Download CV</Button></Col>
                        <Col><Button className="button">Contact me</Button></Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        
    </div>
  );
};

export default TextInfo;