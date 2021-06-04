import React, { useContext } from "react";
import { Accordion, Card, Row, Col, Button } from "react-bootstrap";
import { isMobile } from 'react-device-detect';
import SessionContext from "../../utils/sessionContext";
import "./style.css";




function GetStarted() {
  const { logged_in } = useContext(SessionContext);
  console.log(logged_in);

  if (isMobile && logged_in) {
    return (
      <Card className="mobileView">
        <Accordion.Toggle as={Card.Header} eventKey="2">
        Get Started
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Row style={{ textAlign: "center" }}>
              <Col md={7} className="cardBody"> 
              <h1>Get Started</h1>
              <p>Please Sign-Up. After submitting the Sign-Up form, please be sure to keep your private key in a safe place where only your eyes will be able to view it (You will need it for peer-to-peer transactions). You'll notice that your account is empty, in order to fill your account with coins you'll need to either Mine or Buy coins! Once you have a base of coins in your wallet, do with them whatever you'd like. Be sure to keep track of the value of the coin by checking your USD amount in your profile, or the graph located on the Buy page.</p>
              </Col>
              <Col md={5}><img src={'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg'} className="image" alt='Started' /></Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>

      </Card>
    )
  } else if (isMobile) {
    return (
      <Card className="mobileView">
        <Accordion.Toggle as={Card.Header} eventKey="2">
        Get Started
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Row style={{ textAlign: "center" }}>
              <Col md={7} className="cardBody"> 
              <h1>Get Started</h1>
              <p>Please Sign-Up. After submitting the Sign-Up form, please be sure to keep your private key in a safe place where only your eyes will be able to view it (You will need it for peer-to-peer transactions). You'll notice that your account is empty, in order to fill your account with coins you'll need to either Mine or Buy coins! Once you have a base of coins in your wallet, do with them whatever you'd like. Be sure to keep track of the value of the coin by checking your USD amount in your profile, or the graph located on the Buy page.</p>
              <Button variant="dark">Sign Up !</Button>
              </Col>
              <Col md={5}><img src={'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg'} className="image" alt='Started' /></Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>

      </Card>
    )
  } else if (logged_in) {
    return (
      <Card className="desktopCard">
        <Card.Body>
          <Row style={{ textAlign: "center" }}>
            <Col md={7} className="cardBody"> 
            <h1>Get Started</h1>
            <p>Please Sign-Up. After submitting the Sign-Up form, please be sure to keep your private key in a safe place where only your eyes will be able to view it (You will need it for peer-to-peer transactions). You'll notice that your account is empty, in order to fill your account with coins you'll need to either Mine or Buy coins! Once you have a base of coins in your wallet, do with them whatever you'd like. Be sure to keep track of the value of the coin by checking your USD amount in your profile, or the graph located on the Buy page.</p>
            </Col>
            <Col md={5}><img src={'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg'} className="image" alt='Started' /></Col>
          </Row>
        </Card.Body>
      </Card>
    )
  } else {
    return (
      <Card className="desktopCard">
        <Card.Body>
          <Row style={{ textAlign: "center" }}>
            <Col md={7} className="cardBody"> 
            <h1>Get Started</h1>
            <p>Please Sign-Up. After submitting the Sign-Up form, please be sure to keep your private key in a safe place where only your eyes will be able to view it (You will need it for peer-to-peer transactions). You'll notice that your account is empty, in order to fill your account with coins you'll need to either Mine or Buy coins! Once you have a base of coins in your wallet, do with them whatever you'd like. Be sure to keep track of the value of the coin by checking your USD amount in your profile, or the graph located on the Buy page.</p>
            <Button variant="dark">Sign Up !</Button>
            </Col>
            <Col md={5}><img src={'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg'} className="image" alt='Started' /></Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}

export default GetStarted;