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
      showFilters1: false, //handleShowFilters set to click event 
      showFilters2: false, //handleShowFilters set to click event 

      // state variables to be passed to property card as props
      // store response object from fetch in state variables
      addressLine1: '', // address street from realy mole api
      bedrooms: '', // number of bedrooms from realty mole api
      bathrooms: '', // number of bathrooms from realty mole api
      price: '', // rental price from realty mole api
      daysOnMarket: '', // days on market (dom) from realty mole api
      
      averageRent: '', // avg rent from second realty mole Zip Code Rental Data endpoint
      minRent: '', // min rent from second realty mole Zip Code Rental Data endpoint
      maxRent: ''// max rent from second realty mole Zip Code Rental Data endpoint
    };

    fetchData = (inputFormValues = {}) => {

      console.log(inputFormValues);
      
      const zipcode = inputFormValues.zipcode ? inputFormValues.zipcode : undefined;
      const city = inputFormValues.city ? inputFormValues.city : undefined;

      console.log(zipcode, city);

      // const breed1 = 'hound';
      const breed1 = 'husky';
      const breed2 = 'shiba';

      // const url1 = `https://dog.ceo/api/breed/${breed1}/images/random/3`;
      // const url2 = `https://dog.ceo/api/breed/${breed2}/images/random/3`;

      const realtyMoleAPIKey = 'aa9315e3c9msh7e70db338b431dbp1dae55jsn19c615063e3f';

      // const stateSearch = 'MD';

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
        // fetch(url3)
      ])
      .then(([ 
        res1, 
        res2
        // res3
      ]) => {
        return Promise.all([
          res1.json(),
          res2.json()
          // res3.json()
        ])
      })
      .then(([ 
        res1, 
        res2
        // res3
      ]) => {
        this.setState({
          addressCards1: res1,
          addressCards2: res2.rentalData.detailed,
          // addressCards3: res3,

        // addressLine1: res3.,
        bedrooms: '',
        bathrooms: '',
        price: '',
        daysOnMarket: ''
        })
      })


    };

    // on apply filter save filtering options to the state var
    // upon submit check to see whether there are filtering options in state

  // componentDidMount() {

  //   this.fetchData();
  //   // this.getPropertySearch();

  // };

  // REMOVE THIS CB NO NEED TO SAVE FORM ENTRY
  // SINCE IT WILL BE CONCATENATED INTO URL FOR HTTP REQUEST TO API
  // getPropertySearch = () => {
  //   axios.get('/api')
  //   .then((response) => {
  //     const data = response.data;
  //     this.setState({ posts: data });
  //     console.log('Data has been received!!');
  //   })
  //   .catch(() => {
  //     alert('Error retrieving data');
  //   });
  // };

  handleChange = ({ target }) => {
    const { name, value } = target;
      this.setState({ [name]: value });
  };

  submit = (event) => {
    // grab values of city and or zipcode state variable forms
    // declare variable to store input values
    // concatenate variable in http request url string

    console.log('submit button clicked');
    event.preventDefault();

    const inputFormValues = {
      city: this.state.city,
      zipcode: this.state.zipcode,
    };

    this.fetchData(inputFormValues);
    this.resetUserInputs();
    // axios({
    //   url: '/api/save',
    //   method: 'POST',
    //   data: payload
    // })
    //   .then(() => {
    //     console.log('Data has been sent to the server');
    //     this.resetUserInputs();
    //     this.getPropertySearch(); 
    //   })
    //   .catch(() => {
    //     console.log('Internal server error');
    //   });
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      city: '',
      zipcode: '',
    });
  };

  // displayPropertySearch = (posts) => {
  //   if (!posts.length) return null;
  //   return posts.map((post, index) => (
  //     <div key={index} className="property-search-display">
  //       <TestPropertyCard post={ post } />
  //       {/* <PropertyCard post={ post } /> */}
  //     </div>
  //   ));
  // };

  handleGetSavedProperties = () => {
    // handler for firing the GET request to the '/properties/' route
    // handler should get all saved properties when the 'view saved' button is clicked
    // callback should call getProps() method from API.js util
    // print message to the console saying all properties retrieved
    // HELP: NEED TO FIGURE OUT HOW TO PROPERLY SET UP GET IN 'saved-properties.route.js' file
  }

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

    //   if(this.state.addressCards1 && this.state.addressCards2) {
    //   const addressCardsList1 = this.state.addressCards1.map((streetAddr, i) => {
    //     return (
    //       <TestPropertyCard 
    //         key={i} 
    //         streetAddr={streetAddr} 
    //       />
    //     ) 
    //   })

    //   const addressCardsList2 = this.state.addressCards2.map((streetAddr, i) => {
    //     return (
    //       <TestPropertyCard 
    //         key={i} 
    //         streetAddr={streetAddr} 
    //       />
    //     )
    //   })
    // } else {
    //   return( <h2>Enter Zipcode and City</h2> );
    // }

    const showFilters1 = this.state.showFilters1;
    const showFilters2 = this.state.showFilters2;

    // const addressCards = this.state.addressCards.map((streetAddr, i) => {
      // map over response object; pass down props to property card component
    //   return <AddressCard key={i} streetAddr={streetAddr} />
    // })

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

              {/* {addressCardsList1} */}
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
          <Button className="m-5 text-muted border-0 shadow p-3 bg-white rounded" onClick={this.getSavedProperties}>View Saved</Button>
        </Row>

      </Container>

    );
  }
}

export default Home;