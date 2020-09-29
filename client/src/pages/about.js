import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>

        <div className="about">

          <Row className="mb-5">
            <Col>
              <div className="about-heading">About Us</div>
                <p>
                  <span className="about-text-styling">Property Search</span> allows
                  you to quickly find your next home by providing a friendly one stop
                  site for your renting needs.
                </p>
                <p>
                  We provide a living database that offers current homes and
                  apartments that are available on the market.
                </p>
                <p>
                  <span className="about-text-styling">Property Search</span> launched
                  in 2020 and is headquartered in Houston.
                </p>
            </Col>
          </Row>

          <Row>
            <h2 className="about-text-styling m-3">Why Did We Create This Application?</h2>
              <p className="m-3">
                We created this service to solve <strong>three critical problems</strong> facing our country right now:
              </p>
          </Row>

          <Row className="m-3">
            <div class="card-deck">
              <div class="card shadow-sm p-3 mb-5 bg-white rounded border-0">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title"><strong>Affordable Rent</strong></h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card shadow-sm p-3 mb-5 bg-white rounded border-0">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card shadow-sm p-3 mb-5 bg-white rounded border-0">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </Row>

        </div>

      </Container>
    );
  }
}

export default About;
