import React from 'react';
import {
  Card, CardBody, CardText, Button, Row, Col
} from 'reactstrap';

const TextInfo = (props) => {
  return (
    <div>
        <Row>
            <Col lg={{size: 8, offset: 2}} md={{size: 12, offset: 0}}>
                <Card>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Row>
                            <Col><Button>Button</Button></Col>
                            <Col><Button>Button</Button></Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        
    </div>
  );
};

export default TextInfo;