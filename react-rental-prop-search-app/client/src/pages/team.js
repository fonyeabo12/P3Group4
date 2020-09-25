import React, { Component } from "react";

import { Container, Card, CardDeck, Button } from "react-bootstrap";
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
          <Card className="my-5 px-1 pb-5 text-center border-0">
            <Card.Img variant="top" src="https://via.placeholder.com/100" />
            <Card.Body>
              <Card.Title>FirstName LastName</Card.Title>
              <Card.Text className="text-muted">Position</Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-5 px-1 pb-5 text-center border-0">
            <Card.Img variant="top" src="https://via.placeholder.com/100" />
            <Card.Body>
              <Card.Title>FirstName LastName</Card.Title>
              <Card.Text className="text-muted">Position</Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-5 px-1 pb-5 text-center border-0">
            <Card.Img variant="top" src="https://via.placeholder.com/100" />
            <Card.Body>
              <Card.Title>FirstName LastName</Card.Title>
              <Card.Text className="text-muted">Position</Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-5 px-1 pb-5 text-center border-0">
            <Card.Img variant="top" src="https://via.placeholder.com/100" />
            <Card.Body>
              <Card.Title>Pablo Hernandez</Card.Title>
              <Card.Text className="text-muted">Front End/Designer</Card.Text>
              <Button>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </Button>
              <Button className="mx-1 mb-0">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}

export default Team;
