import React from 'react';
import axios from 'axios';

import { Container, Row, Col, Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// import carInterior from './Images/car-interior.jpg';
import PropertyCard from '../components/card/property-card.component.jsx';
import SearchField from '../components/search-field/search-field.component.jsx';
import TestPropertyCard from '../components/card/test-property-card.component.jsx';
import HeroComponent from '../components/hero/hero.component.jsx';
import RentalCriteriaFilterCard from '../components/rental-criteria-filter-card/rental-criteria-filter-card.component.jsx';
import PropertyCriteriaFilterCard from '../components/property-criteria-filter-card/property-criteria-filter-card.component.jsx';

import '../App.css';
import { getProps } from '../utils/API.js';

class Home extends React.Component {

    state = {
      title: '',
      city: '',
      zipcode: '',
      posts: [],
      addressCards1: [],
      addressCards2: [],
      savedProperties: [],
      showComponent: 'Filter',
      showFilters1: false, //handleShowFilters set to click event 
      showFilters2: false //handleShowFilters set to click event 
    };

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

  hideComponent = (showComponent) => {
    console.log(showComponent);
    switch(showComponent) {
      case "showFilters1":
        this.setState({ showFilters1: !this.state.showFilters1 });
        break;
      case "showFilters2":
        this.setState({ showFilters2: !this.state.showFilters2 });
        break;
        default:
          return;
    }
  };

  render() {
    console.log('State: ', this.state);

    const addressCardsList1 = this.state.addressCards1.map((streetAddr, i) => {
      return <TestPropertyCard key={i} streetAddr={streetAddr} />
    })

    const addressCardsList2 = this.state.addressCards2.map((streetAddr, i) => {
      return <TestPropertyCard key={i} streetAddr={streetAddr} />
    })

    const showFilters1 = this.state.showFilters1;
    const showFilters2 = this.state.showFilters2;

    // FUNCTION TO BE CALLED WHEN 'VIEW SAVED PROPERTIES' LINK IS CLICKED
    // getSavedProperties = () => {
    //   getProps()
    //     .then((data) => {
    //       this.setState({
    //         savedProperties: data
    //       })
    //     })
    //     .catch()
    // }

    // JSX
    return (

      <Container>

        <Row>
          <HeroComponent />
        </Row>
        <Row xs={6} md={4} className="mx-auto">
          <SearchField zipcode={this.state.zipcode} submitIt={this.submit} handleChange={this.handleChange} />
              <div className="property-search">
                {this.displayPropertySearch(this.state.posts)}
              </div>
        </Row>

        <Row>
          {showFilters1 && <RentalCriteriaFilterCard showComponent={this.state.showComponent} />}
        </Row>
        <Row>
          {showFilters2 && <PropertyCriteriaFilterCard showComponent={this.state.showComponent} />}
        </Row>

        <Row>
          <Button onClick={() => this.hideComponent('showFilters1')}>
            { this.state.showFilters1 ? 'Hide' : 'Rental Criteria' }
          </Button>

          <Button onClick={() => this.hideComponent('showFilters2')}>
            { this.state.showFilters2 ? 'Hide' : 'Property Criteria Filter' }
          </Button>
        </Row>

        <Row xs={6} md={4} className="mx-auto">
              {addressCardsList1}
        </Row>
        <Row xs={6} md={4} className="mx-auto">
            {addressCardsList2}
        </Row>

        <Button onClick={this.getSavedProperties}>View Saved</Button>

      </Container>

    );
  }
}

export default Home;