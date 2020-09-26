import React from 'react';
// import carInterior from './Images/car-interior.jpg';
import PropertyCard from '../card/property-card.component.jsx';
import SearchField from '../search-field/search-field.component.jsx';
import TestPropertyCard from '../card/test-property-card.component';
import HeroComponent from '../hero/hero.component.jsx';

import { Container, Row, Col } from 'react-bootstrap';

// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../../App.css';

class Home extends React.Component {

    state = {
      title: '',
      city: '',
      zipcode: '',
      posts: [],
      addressCards1: [],
      addressCards2: []
    }

  componentDidMount() {

    this.getPropertySearch();

    const breed1 = 'hound';
    const breed2 = 'boxer';

    const url1 = `https://dog.ceo/api/breed/${breed1}/images/random/3`;
    const url2 = `https://dog.ceo/api/breed/${breed2}/images/random/3`;

    Promise.all([
      fetch(url1),
      fetch(url2)
    ])
    .then(([ res1, res2 ]) => {
      return Promise.all([
        res1.json(),
        res2.json()
      ])
    })
    .then(([ res1, res2 ]) => {
      this.setState({
        addressCards1: res1.message,
        addressCards2: res2.message
      })
    })
  };

  getPropertySearch = () => {
    axios.get('/api')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data });
      console.log('Data has been received!!');
    })
    .catch(() => {
      alert('Error retrieving data');
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
      this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      city: this.state.city,
      zipcode: this.state.zipcode,
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getPropertySearch();
      })
      .catch(() => {
        console.log('Internal server error');
      });
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      city: '',
      zipcode: '',
    });
  };

  displayPropertySearch = (posts) => {
    if (!posts.length) return null;
    return posts.map((post, index) => (
      <div key={index} className="property-search-display">
        <PropertyCard post={ post } />
      </div>
    ));
  };

  render() {
    console.log('State: ', this.state);

    const addressCardsList1 = this.state.addressCards1.map((streetAddr, i) => {
      return (
      <Container>
        <Row>
          <Col xs={6} md={4} className="mx-auto">
            <TestPropertyCard key={i} streetAddr={streetAddr} />
          </Col>
        </Row>
      </Container>
      )
    })

    const addressCardsList2 = this.state.addressCards2.map((streetAddr, i) => {
      return <TestPropertyCard key={i} streetAddr={streetAddr} />
    })

    // JSX
    return (

      <Container>

        <HeroComponent />

        <SearchField zipcode={this.state.zipcode} submitIt={this.submit} handleChange={this.handleChange} />
            <div className="property-search">
              {this.displayPropertySearch(this.state.posts)}
            </div>

        {addressCardsList1}
        {addressCardsList2}

      </Container>

    );
  }
}

export default Home;
