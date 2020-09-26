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
      city: '',
      zipcode: '',
      posts: [],
      addressCards1: [],
      addressCards2: [],
      savedProperties: [],
      showComponent: 'Filter',
      showFilters1: false,  
      showFilters2: false,  

      addressLine1: '', 
      bedrooms: '', 
      bathrooms: '',
      price: '', 
      daysOnMarket: '', 

      averageRent: '',
      minRent: '', 
      maxRent: '', 

      getResponse: [],
      showSaved: false
    };

    fetchData = (inputFormValues = {}) => {

      console.log(inputFormValues);
      
      const zipcode = inputFormValues.zipcode ? inputFormValues.zipcode : undefined;
      const city = inputFormValues.city ? inputFormValues.city : undefined;

      console.log(zipcode, city);

      const breed1 = 'husky';
      const breed2 = 'shiba';

      const realtyMoleAPIKey = 'aa9315e3c9msh7e70db338b431dbp1dae55jsn19c615063e3f';

      const addressLine1Search = this.state.addressLine1;
      const bedroomsSearch = this.state.bedrooms;
      const bathroomsSearch = this.state.bathrooms;
      const priceSearch = this.state.price;
      const daysOnMarketSearch = this.state.daysOnMarket;

      const averageRent = this.state.averageRent;
      const minRent = this.state.minRent;
      const maxRent = this.state.maxRent;

      const url1 = `https://realty-mole-property-api.p.rapidapi.com/rentalListings?city=${city}&limit=6&rapidapi-key=${realtyMoleAPIKey}`;
      const url2 = `https://realty-mole-property-api.p.rapidapi.com/zipCodes/${zipcode}?&limit=1&rapidapi-key=${realtyMoleAPIKey}`;

      Promise.all([
        fetch(url1),
        fetch(url2)
      ])
      .then(([ 
        res1, 
        res2
      ]) => {
        return Promise.all([
          res1.json(),
          res2.json()
        ])
      })
      .then(([ 
        res1, 
        res2
      ]) => {
        this.setState({
          addressCards1: res1,
          addressCards2: res2.rentalData.detailed,
        bedrooms: '',
        bathrooms: '',
        price: '',
        daysOnMarket: ''
        })
      })


    };

  getSavedProperties = () => {
    // only load get data when user hits click button, then display button

    if(!this.state.showSaved) {
      getProps()   
        .then(res => { 
          this.setState({ getResponse: res.data })
        })
    }
    this.setState({ showSaved : !this.state.showSaved })

  };

  handleChange = ({ target }) => {
    const { name, value } = target;
      this.setState({ [name]: value });
  };

  submit = (event) => {

    console.log('submit button clicked');
    event.preventDefault();

    const inputFormValues = {
      city: this.state.city,
      zipcode: this.state.zipcode,
    };

    this.fetchData(inputFormValues);
    this.resetUserInputs();
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      city: '',
      zipcode: '',
    });
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

    const showFilters1 = this.state.showFilters1;
    const showFilters2 = this.state.showFilters2;

    return (

      <Container>

        <Row>
          <HeroComponent />
        </Row>
        <Row className="d-flex">
          <SearchField 
            city={this.state.city} 
            zipcode={this.state.zipcode} 
            submitIt={this.submit} 
            handleChange={this.handleChange} 
            fetchData={this.fetchData}
          />
        </Row>

        <Row>
          <Button className="mx-auto text-muted border-0 shadow p-3 mb-5 bg-white rounded" onClick={() => this.hideComponent('showFilters1')}>
            { this.state.showFilters1 ? 'Hide' : 'Rental Criteria' }
          </Button>

          <Button className="mx-auto text-muted border-0 shadow p-3 mb-5 bg-white rounded" onClick={() => this.hideComponent('showFilters2')}>
            { this.state.showFilters2 ? 'Hide' : 'Property Criteria Filter' }
          </Button>
        </Row>

        <Row>
          <Col>
            {showFilters1 && <RentalCriteriaFilterCard showComponent={this.state.showComponent} />}
          </Col>

          <Col>
            {showFilters2 && <PropertyCriteriaFilterCard showComponent={this.state.showComponent} />}
          </Col>
        </Row>

        <Row xs={6} md={4} className="mx-2">
          {this.state.addressCards1.length ? this.state.addressCards1.map((streetAddr, i) => {
            return (
              <TestPropertyCard 
                key={i} 
                streetAddr={streetAddr} 
              />
            ) 
          })
        :  <h2>Enter Zipcode and City</h2> }
        </Row>

        <Row xs={6} md={4} className="mx-2">
          <ul>
            {this.state.addressCards2.length ? this.state.addressCards2.map((streetAddr, i) => {
            return (
              <li key={i}>
                {streetAddr.averageRent}
                {streetAddr.minRent}
              </li>
            )})
          :  null }
          </ul> 
        </Row>

        <Row>
          { this.state.showSaved ? <h2 className="display-3">Saved Content</h2> : null }
          <Button className="m-5 text-muted border-0 shadow p-3 bg-white rounded" onClick={this.getSavedProperties}>{ this.state.showSaved ? 'Hide' : 'View Saved' }</Button>
        </Row>

        <Row>
          {this.state.getResponse.length && this.state.showSaved ? this.state.getResponse.map((streetAddr, i) => {
              return (
                <TestPropertyCard 
                  key={i} 
                  streetAddr={streetAddr} 
                />
              ) 
            })
          :  null }
        </Row>

      </Container>

    );
  }
}

export default Home;