import React, { Component } from "react";
import pablo from "../Images/pablo.JPG";
import brandon from "../Images/brandon.png";
import nick from "../Images/nick.jpg";
import chidi from "../Images/chidi.jpeg";
import { Container, Card, CardDeck, Col, Image } from "react-bootstrap";
import "./style.css";
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
              <h6 className="title">Title</h6>
              <a
                className="github-btn"
                type="button"
                href="https://github.com/BrandonEJenkins"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <span className="linkedin-btn" type="button">
                <a
                  href="https://www.linkedin.com/in/brandon-e-jenkins/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
              </span>
              <span className="email-btn" type="button">
                <a href="mailto: pablohdzjr@gmail.com">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                </a>
              </span>
            </Card.Body>
          </Col>
          <Col className="my-5 px-1 pb-5 text-center border-0">
            <Image className="avatar" src={nick} />
            <Card.Body>
              <h5 className="name">Nicholas Foreman</h5>
              <h6 className="title">Title</h6>
              <a
                className="github-btn"
                type="button"
                href="https://github.com/nickforeman4"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <span className="linkedin-btn" type="button">
                <a
                  href="https://www.linkedin.com/in/nickforeman/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
              </span>
              <span className="email-btn" type="button">
                <a href="mailto: pablohdzjr@gmail.com">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                </a>
              </span>
            </Card.Body>
          </Col>
          <Col className="my-5 px-1 pb-5 text-center border-0">
            <Image className="avatar" src={chidi} />
            <Card.Body>
              <h5 className="name">Chidi Onyeabo</h5>
              <h6 className="title">Title</h6>
              <a
                className="github-btn"
                type="button"
                href="https://github.com/fonyeabo12"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <span className="linkedin-btn" type="button">
                <a
                  href="https://www.linkedin.com/in/franklin-onyeabo/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
              </span>
              <span className="email-btn" type="button">
                <a href="mailto: pablohdzjr@gmail.com">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                </a>
              </span>
            </Card.Body>
          </Col>
          <Col className="my-5 px-1 pb-5 text-center border-0">
            <Image className="avatar" src={pablo} />
            <Card.Body>
              <h5 className="name">Pablo Hernandez</h5>
              <h6 className="title">Front End/Designer</h6>
              <a
                className="github-btn"
                type="button"
                href="https://github.com/medszilla26"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <span className="linkedin-btn" type="button">
                <a
                  href="https://www.linkedin.com/in/pablohdzjr/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
              </span>
              <span className="email-btn" type="button">
                <a href="mailto: pablohdzjr@gmail.com">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                </a>
              </span>
            </Card.Body>
          </Col>
        </CardDeck>
      </Container>
    );
  }
}

export default Team;
