import React, { Component } from 'react';

class Gallery extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     largeImage: true
  //   };
  // }

  // cardOrImage() {
  //   this.setState({ largeImage: !this.state.largeImage });
  // }

  render() {
    const { images, viewCard } = this.props;
    return (
      <ul className="list-of-images">
        {images.map((image, index) => {
          return (
            <img
              key={image._id}
              className="image-src"
              src={`https://obscure-beyond-35921.herokuapp.com/images/show/${
                image._id
              }`}
              alt="one face"
              onClick={() => viewCard(image._id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default Gallery;
