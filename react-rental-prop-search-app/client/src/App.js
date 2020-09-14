import React from 'react';
import axios from 'axios';

import './App.css';

// import carInterior from './Images/car-interior.jpg';
import PropertyCard from './components/card/property-card.component.jsx';
import SearchField from './components/search-field/search-field.component.jsx';
import { Container } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class App extends React.Component {

    state = {
      title: '',
      body: '',
      zipcode: '',
      numberOfBeds: '',
      numberOfBaths: '',
      posts: []
    }

  componentDidMount = () => {
    this.getPropertySearch();
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
      body: this.state.body,
      zipcode: this.state.zipcode,
      numberOfBeds: this.state.numberOfBeds,
      numberOfBaths: this.state.numberOfBaths
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
      body: '',
      zipcode: '',
      numberOfBeds: '',
      numberOfBaths: ''
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

    // JSX
    return (
      <Container>

            <SearchField zipcode={this.state.zipcode} handleChange={this.handleChange} />
                <div className="property-search">
                  {this.displayPropertySearch(this.state.posts)}
                </div>
      </Container>

    );
  }
}

export default App;