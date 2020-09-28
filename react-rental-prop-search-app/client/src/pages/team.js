import React, { Component } from "react";
import pablo from "../Images/pablo.JPG";
import brandon from "../Images/brandon.png";
import nick from "../Images/nick.jpg";
import chidi from "../Images/chidi.jpeg";
import { Container, Card, CardDeck, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";

class Team extends Component {
  render() {
    return (
      <Container>
        <div className="team-page">
          <div className="team-heading">Meet the Team</div>
          <CardDeck>
            {/* Brandon Jenkins */}
            <Col className="my-5 px-1 pb-5 text-center border-0">
              <Image className="team-avatar" src={brandon} />
              <Card.Body>
                <h5 className="team-name">Brandon Jenkins</h5>
                <h6 className="team-title">Back End</h6>
                {/* Github Button */}
                <span className="github-btn" type="button">
                  <a href="https://github.com/BrandonEJenkins" target="blank">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </span>
                {/* Linkedin Button */}
                <span className="linkedin-btn" type="button">
                  <a
                    href="https://www.linkedin.com/in/brandon-e-jenkins/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                  </a>
                </span>
                {/* Email Button */}
                <span className="email-btn" type="button">
                  <a href="mailto: brandonejenkins@gmail.com">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                  </a>
                </span>
              </Card.Body>
            </Col>

            {/* Nicholas Foreman */}
            <Col className="my-5 px-1 pb-5 text-center border-0">
              <Image className="team-avatar" src={nick} />
              <Card.Body>
                <h5 className="team-name">Nicholas Foreman</h5>
                <h6 className="team-title">Back End</h6>
                {/* Github Button */}
                <span className="github-btn" type="button">
                  <a href="https://github.com/nickforeman4" target="blank">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </span>
                {/* Linkedin Button  */}
                <span className="linkedin-btn" type="button">
                  <a
                    href="https://www.linkedin.com/in/nickforeman/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                  </a>
                </span>
                {/* Email Button */}
                <span className="email-btn" type="button">
                  <a href="mailto: nicholas.m.foreman@gmail.com">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                  </a>
                </span>
              </Card.Body>
            </Col>

            {/* Chidi Onyeabo */}
            <Col className="my-5 px-1 pb-5 text-center border-0">
              <Image className="team-avatar" src={chidi} />
              <Card.Body>
                <h5 className="team-name">Chidi Onyeabo</h5>
                <h6 className="team-title">Front End</h6>
                {/* Github Button */}
                <span className="github-btn" type="button">
                  <a href="https://github.com/fonyeabo12" target="blank">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </span>
                {/* Linkedin Button */}
                <span className="linkedin-btn" type="button">
                  <a
                    href="https://www.linkedin.com/in/franklin-onyeabo/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                  </a>
                </span>
                {/* Email Button */}
                <span className="email-btn" type="button">
                  {/* <a hfef=""> missing email link */}
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                  {/* </a> */}
                </span>
              </Card.Body>
            </Col>

            {/* Pablo Hernandez */}
            <Col className="my-5 px-1 pb-5 text-center border-0">
              <Image className="team-avatar" src={pablo} />
              <Card.Body>
                <h5 className="team-name">Pablo Hernandez</h5>
                <h6 className="team-title">Front End/Designer</h6>
                {/* Github Button */}
                <span className="github-btn" type="button">
                  <a href="https://github.com/medszilla26" target="blank">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </span>
                {/* Linkedin Button */}
                <span className="linkedin-btn" type="button">
                  <a
                    href="https://www.linkedin.com/in/pablohdzjr/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                  </a>
                </span>
                {/* Email Button */}
                <span className="email-btn" type="button">
                  <a href="mailto: pablohdzjr@gmail.com">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                  </a>
                </span>
              </Card.Body>
            </Col>
          </CardDeck>
        </div>
      </Container>
    );
  }
}

export default Team;
