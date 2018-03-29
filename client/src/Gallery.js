import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';
class Gallery extends Component {
  componentDidMount () {
    VanillaTilt.init(document.querySelectorAll('.image-src'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5
    });
  }

  render () {
    const { images, viewCard } = this.props;
    return (
      <ul className='list-of-images'>
        {images.map((image, index) => {
          return (
            <img
              key={image._id}
              className='image-src'
              src={`https://obscure-beyond-35921.herokuapp.com/images/show/${image._id}`}
              alt='one face'
              onClick={() => viewCard(image._id)}
						/>
          );
        })}
      </ul>
    );
  }
}

export default Gallery;
