import React, { Component } from 'react';
import './App.css';

import VanillaTilt from 'vanilla-tilt';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      largeImage: true
    };
  }
  
  cardOrImage() {
    this.setState({ largeImage: !this.state.largeImage });
  }

  componentDidMount() {
    VanillaTilt.init(document.querySelector('.image-src'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
      'glare-prerender': false
    })
  }

  render() {
    const { DeleteImage, id } = this.props;
    const { metadata, uploadDate } = this.props.details;
    const { isAuthenticated } = this.props.auth;

    const showCard = (
      <li className="image-card">
        <div className="image-created">{uploadDate}</div>
        <img
          className="image-src"
          src={`https://obscure-beyond-35921.herokuapp.com/images/show/${this.props.id}`}
          alt="one face"
          onClick={this.cardOrImage.bind(this)}
          // data-tilt
        />
        <h3 className="image-title">
          {metadata.image_name ? metadata.image_name.toUpperCase() : 'no title'}
        </h3>
        <div className="image-description">{metadata.description}</div>
        {isAuthenticated() && <button onClick={() => DeleteImage(id)}>Delete</button>}
      </li>
    );

    const showImage = (
      <div
        className="wrapper"
        style={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#222',
          zIndex: 10,
        }}
      >
        <img
          className="image-src"
          onClick={this.cardOrImage.bind(this)}
          src={`https://obscure-beyond-35921.herokuapp.com/images/show/${this.props.id}`}
          alt="one face"
          style={{
            minHeight: '95vh'
          }}
        />
      </div>
    );
    
    return this.state.largeImage ? (
      <div>{showCard}</div>
    ) : (
      <div>{showImage}</div>
    );
  }
}

export default Image;
