import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Row, Col, Alert } from 'reactstrap';
import SectionHeader from './SectionHeader';

const SectionContacts = () => {
  
    const contactLogo = require('../img/contact.png');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [sendingData, setSendingData] = useState({
        mailSent: null
    });

    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    const formHandler = e => {
        e.preventDefault();

        const token = "764000482:AAH79WOgmyDmmWAgLuB8vc2p31p0sTCmQZY";
        const chat_id = "369395946";
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState === 4){
                if(this.response.status === 200){
                    setSendingData({mailSent: true});
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                } else {
                    setSendingData({mailSent: false});
                  }
            } 
        }
        xhr.open('POST','https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&parse_mode=html&text=' + JSON.stringify(formData), true);
        xhr.send();
    }

    const handleInput = (e) => {
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value
        })
    }

    const renderSendingResult = () => {
        if(sendingData.mailSent){
            return(
                <Alert color="success" isOpen={visible} toggle={onDismiss}>
                    Message sent successfully!
                </Alert>
            )
        } else if (sendingData.mailSent === false) {
            return(
                <Alert color="warning" isOpen={visible} toggle={onDismiss}>
                    Something went wrong!
                </Alert>
            )
        }
    }

    return (
        <div className="section contacts">
            <SectionHeader imagePath={contactLogo} sectionTitle="Contact me"/>
            <Row>
                <Col md={{size: 8, offset: 2}}>
                    <Form onSubmit={formHandler} action="#" method="post" >
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
                        <Button className="submit-button" type="submit" name="submit" value="Submit">Submit</Button>
                    </Form>
                    {renderSendingResult()}
                </Col>
            </Row>
        </div>
    );
}

export default SectionContacts;