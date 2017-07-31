import React from 'react';
import Image from './Image';

const Gallery = props => {
  const { images } = props;
  console.log('props from gallery', props);
  return (
    <ul className="list-of-images">
      {images.map((image, index) => {
        return (
          <Image
            key={index}
            details={image}
            DeleteImage={props.DeleteImage}
            auth={props.auth}
          />
        );
      })}
    </ul>
  );
};

export default Gallery;
