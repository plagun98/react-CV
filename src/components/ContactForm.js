import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import SectionHeader from './SectionHeader';

const SectionContacts = () => {
  
    const contactLogo = require('../img/contact.png');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [sendingData, setSendingData] = useState({
        mailSent: false,
        error: null 
    });

    const formHandler = e => {
        e.preventDefault();

        console.log(formData);
    }

    const handleInput = (e) => {
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="section">
            <SectionHeader imagePath={contactLogo} sectionTitle="Contact me"/>
            <Row>
                <Col md={{size: 8, offset: 2}}>
                    <Form onSubmit={formHandler} action="/send.php" method="post" >
                        <FormGroup>
                            {/* <Label for="user-name">Name</Label> */}
                            <Input type="text"  name="name" id="user-name" placeholder="Name" value={formData.name} onChange={handleInput} required />
                        </FormGroup>
                        <FormGroup>
                            {/* <Label for="exampleEmail">Email</Label> */}
                            <Input type="email" name="email" id="user-email" placeholder="Email" value={formData.email} onChange={handleInput} required />
                        </FormGroup>
                        <FormGroup>
                            {/* <Label for="exampleText">Text Area</Label> */}
                            <Input type="textarea" name="message" id="user-message" placeholder="Message" value={formData.message} onChange={handleInput} required />
                        </FormGroup>
                        <Button type="submit" name="submit" value="Submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default SectionContacts;