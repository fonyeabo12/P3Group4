import React from 'react';
import axios from 'axios';

import './App.css';

import carInterior from './Images/car-interior.jpg';
import PropertyCard from './components/card/property-card.component';

import Card from 'react-bootstrap/Card';
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

    // fakePost = {
    //   title: 'adfad',
    //   body: 'blah blah blah'
    // }

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
      <div className="app">

        <div className='card-container'>
            <img 
                alt='monster' 
                src=""
            />
            <h2> Filler heading text </h2>
            <p> Filler body text </p>
            {/* <h2> {props.monster.name} </h2>
            <p> {props.monster.email} </p> */}
        </div>

          <h2>Welcome to my App</h2>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={carInterior} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
                <form onSubmit={this.submit}>
                  <div className="form-input">
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-input">
                    <input 
                      type="text"
                      name="body"
                      placeholder="Enter body"
                      value={this.state.body}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-input">
                    <input 
                      type="text"
                      name="zipcode"
                      placeholder="Enter zipcode"
                      value={this.state.zipcode}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-input">
                    <input 
                      type="text"
                      name="numberOfBeds"
                      placeholder="Enter number of bedrooms"
                      value={this.state.numberOfBeds}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-input">
                    <input 
                      type="text"
                      name="numberOfBaths"
                      placeholder="Enter number of bathrooms"
                      value={this.state.numberOfBaths}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button>Submit</button>
                </form>

                <div className="property-search">
                  {this.displayPropertySearch(this.state.posts)}
                </div>

              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>

              </Card.Body>
          </Card>

          

      </div>
    );
  }
}

export default App;
