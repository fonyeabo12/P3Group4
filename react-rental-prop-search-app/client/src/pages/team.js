import React, { Component } from "react";
import "./style.css";
import pablo from "../../src/Images/pablo.JPG";
import brandon from "../../src/Images/brandon.png";
import nick from "../../src/Images/nick.jpg";
import { Container, Card, CardDeck, Button, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Team extends Component {
  render() {
    return (
      <Container>
        <CardDeck>
          <Card.Body>
            <h2>Meet The Team</h2>
            <p>
              Occaecat nisi deserunt aute cupidatat ad Lorem ex Lorem
              reprehenderit velit magna occaecat ullamco. Enim elit deserunt non
              nostrud aliquip sint ullamco incididunt voluptate ad ipsum.
            </p>
          </Card.Body>

          <Col className="my-5 px-1 pb-5 text-center border-0">
            <Image className="avatar" src={brandon} />
            <Card.Body>
              <h5 className="name">Brandon Jenkins</h5>
              <h6 className="title">Front End/Designer</h6>
              <Button className="mx-1 mb-0">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </Button>
              <Button className="mx-1 mb-0">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </Button>
            </Card.Body>
          </Col>
          <Col className="my-5 px-1 pb-5 text-center border-0">
            <Image className="avatar" src={nick} />
            <Card.Body>
              <h5 className="name">Nicholas Foreman</h5>
              <h6 className="title">Front End/Designer</h6>
              <Button className="mx-1 mb-0">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </Button>
              <Button className="mx-1 mb-0">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </Button>
            </Card.Body>
          </Col>
          <Col className="my-5 px-1 pb-5 text-center border-0">
            <Image className="avatar" src={pablo} />
            <Card.Body>
              <h5 className="name">Pablo Hernandez</h5>
              <h6 className="title">Front End/Designer</h6>
              <Button className="mx-1 mb-0">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </Button>
              <Button className="mx-1 mb-0">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </Button>
            </Card.Body>
          </Col>
          <Col className="my-5 px-1 pb-5 text-center border-0">
            <Image className="avatar" src={pablo} />
            <Card.Body>
              <h5 className="name">Pablo Hernandez</h5>
              <h6 className="title">Front End/Designer</h6>
              <Button className="mx-1 mb-0">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </Button>
              <Button className="mx-1 mb-0">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </Button>
            </Card.Body>
          </Col>
        </CardDeck>
      </Container>
    );
  }
}

export default Team;
