import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contact me </h5>
        <Card>
          <Row>
              <Input placeholder="contact@example.com" type="email" label="Email" s={12} />
              <Input placeholder="write the message" label="Message" s={12} />
            <Col s={12} m={12}>
              <Button waves='light' className="right grey darken-2">SEND</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;
